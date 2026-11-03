'use strict';

class CardSearchIndex {
  constructor({ language, text, normalize, reference, number, level }) {
    Object.assign(this, { language, text, normalize, reference, number, level });
    this.records = new WeakMap();
    this.query = null;
    this.parsed = null;
  }
  matches(card, query, allLevels = false) {
    if (this.query !== query) {
      this.query = query;
      const index = /^#?(\d+)$/.exec(query),
        reference = /^s(\d+)\s*(?:[#_-]|\s)\s*(\d+)$/.exec(query),
        season = /^s(\d+)$/.exec(query);
      this.parsed = index
        ? { number: Number(index[1]) }
        : reference
          ? { season: Number(reference[1]), number: Number(reference[2]) }
          : season
            ? { season: Number(season[1]) }
            : null;
    }
    const parsed = this.parsed;
    if (parsed)
      return (
        (parsed.season === undefined || card.season === parsed.season) &&
        (parsed.number === undefined || this.number(card) === parsed.number)
      );
    const language = this.language();
    let record = this.records.get(card);
    if (record?.language !== language) {
      const { name, ability, descriptions } = this.text(card);
      record = {
        language,
        fields: [name, ability, `${this.reference(card)} ${name}`].map(this.normalize),
        descriptions: descriptions.map(this.normalize)
      };
      this.records.set(card, record);
    }
    if (record.query !== query) {
      record.query = query;
      record.shared = record.fields.some(text => text.includes(query));
      record.levels = record.descriptions.map(text => text.includes(query));
    }
    return (
      record.shared ||
      (allLevels ? record.levels.some(Boolean) : record.levels[this.level(card) - 1])
    );
  }
}
