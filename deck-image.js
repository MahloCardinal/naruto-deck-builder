'use strict';

async function createDeckImage({name, cards, costLabel, chakraLabel}) {
  const artwork = await Promise.all(cards.map(async card => {
    const image = new Image();
    image.src = assetPath(`card_images/${card.key}.webp`);
    await image.decode();
    return image;
  }));

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const styles = getComputedStyle(document.documentElement);
  const color = token => styles.getPropertyValue(token).trim();
  const margin = 24, gap = 12, tileWidth = 240, textInset = 14;
  const artWidth = 220, artHeight = Math.round(artWidth * CARD_ART.height / CARD_ART.width);
  const gridTop = 100, textWidth = tileWidth - 2 * textInset;
  const nameFont = '700 16px system-ui', abilityFont = '15px system-ui';
  const columns = Math.min(cards.length, 5);
  const gridWidth = columns * tileWidth + (columns - 1) * gap;
  canvas.width = Math.max(380, gridWidth + 2 * margin);
  const gridLeft = (canvas.width - gridWidth) / 2;

  function wrap(text, font) {
    ctx.font = font;
    const lines = [];
    let line = '';
    for (const word of text.split(/\s+/).filter(Boolean)) {
      const candidate = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(candidate).width > textWidth) {
        lines.push(line);
        line = word;
      } else line = candidate;
    }
    if (line) lines.push(line);
    return lines;
  }

  const tiles = cards.map((card, index) => ({
    ...card, image:artwork[index],
    nameLines:wrap(card.name, nameFont), abilityLines:wrap(card.ability, abilityFont)
  }));
  const rows = [];
  for (let i = 0; i < tiles.length; i += columns) {
    const row = tiles.slice(i, i + columns);
    const textHeight = Math.max(...row.map(tile => 20 * tile.nameLines.length + 19 * tile.abilityLines.length));
    rows.push({tiles:row, height:artHeight + textHeight + 34});
  }
  canvas.height = gridTop + rows.reduce((height, row) => height + row.height, 0) + gap * (rows.length - 1) + margin;

  const paper = color('--paper'), ink = color('--ink'), accent = color('--accent'), chakra = color('--chakra-orb');
  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = accent;
  ctx.fillRect(margin, 24, 4, 30);
  ctx.fillStyle = ink;
  ctx.font = '750 30px system-ui';
  ctx.fillText(name, margin + 12, 48, canvas.width - 2 * margin - 12);

  function circle(x, y, radius, fill) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
  }
  function legend(x, label, fill) {
    circle(x + 5, 74, 5, fill);
    ctx.fillStyle = ink;
    ctx.font = '14px system-ui';
    ctx.fillText(label, x + 15, 79);
    return x + 15 + ctx.measureText(label).width;
  }
  legend(legend(margin, costLabel, accent) + 20, chakraLabel, chakra);

  function stat(x, y, value, fill, textColor) {
    circle(x, y, 15, paper);
    circle(x, y, 13, fill);
    ctx.fillStyle = textColor;
    ctx.font = '700 15px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(value), x, y);
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';
  }

  let top = gridTop;
  for (const row of rows) {
    row.tiles.forEach((tile, index) => {
      const x = gridLeft + index * (tileWidth + gap);
      ctx.fillStyle = color('--surface');
      ctx.fillRect(x, top, tileWidth, row.height);
      ctx.strokeStyle = color('--line');
      ctx.strokeRect(x + .5, top + .5, tileWidth - 1, row.height - 1);
      ctx.drawImage(tile.image, x + (tileWidth - artWidth) / 2, top + 4, artWidth, artHeight);
      stat(x + 49, top + 29, tile.cost, accent, ink);
      stat(x + tileWidth - 49, top + 29, tile.chakra, chakra, '#fff');
      let baseline = top + artHeight + 16;
      ctx.fillStyle = ink;
      ctx.font = nameFont;
      for (const line of tile.nameLines) {
        ctx.fillText(line, x + textInset, baseline, textWidth);
        baseline += 20;
      }
      ctx.fillStyle = color('--body-text');
      ctx.font = abilityFont;
      for (const line of tile.abilityLines) {
        ctx.fillText(line, x + textInset, baseline, textWidth);
        baseline += 19;
      }
    });
    top += row.height + gap;
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(png => png ? resolve(png) : reject(Error('PNG encoding failed')), 'image/png');
  });
}
