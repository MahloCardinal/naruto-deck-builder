'use strict';

const {createServer} = require('node:http');
const {createReadStream} = require('node:fs');
const {stat} = require('node:fs/promises');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const host = '127.0.0.1', port = 4173;
const mime = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8', '.webp':'image/webp', '.svg':'image/svg+xml'
};

createServer(async (request, response) => {
  if (!['GET','HEAD'].includes(request.method)) {
    response.writeHead(405, {Allow:'GET, HEAD'}).end();
    return;
  }

  let pathname;
  try {
    pathname = new URL(request.url, `http://${host}`).pathname;
  } catch {
    response.writeHead(400).end();
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  const publicPath = /^\/(?:[a-z-]+\.(?:html|css|js)|(?:card_images|misc_images|locales)\/(?:[a-z0-9_-]+\/)*[a-z0-9_-]+\.(?:webp|svg|js))$/i;
  if (!publicPath.test(pathname)) {
    response.writeHead(404).end();
    return;
  }

  const file = path.join(root, pathname.slice(1));
  const info = await stat(file).catch(() => null);
  if (!info?.isFile()) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, {'Content-Type':mime[path.extname(file).toLowerCase()], 'Content-Length':info.size, 'Cache-Control':'no-store'});
  if (request.method === 'HEAD') response.end();
  else createReadStream(file).on('error', () => response.destroy()).pipe(response);
}).listen(port, host, () => console.log(`Naruto Deck Builder: http://${host}:${port}`));
