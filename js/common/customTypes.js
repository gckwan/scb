export type WordType = {
  english: string,
  chinese: string,
  pinyin: string
};

const modeTypes = {
  CHINESE_TO_ENGLISH: 'CHINESE_TO_ENGLISH',
  ENGLISH_TO_CHINESE: 'ENGLISH_TO_CHINESE',
};

export {modeTypes};

export type ModeType = CHINESE_TO_ENGLISH | ENGLISH_TO_CHINESE;
