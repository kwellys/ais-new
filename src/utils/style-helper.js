export const boxShadow = '0 4px 16px #0641B7';

export const desctopMaxWidth = '1440px';

export const colors = {
  aqua: '#18DBDF',
  blue: '#3588F9',
  darkBlue: '#045DC5',
  darkBlueForButton: '#0641B7',
  lightBlue: '#62A9FC',
  lightGray: '#EDF3FF',
  red: '#F66565',
  textColor: '#525252',
  white: '#ffffff',
  whiteBlue: '#F2F8FF',
  darkViolet: '#2B329E',
};

export const fontFamily = {
  'font-family': 'Montserrat',
};
export const flexAllAlign = {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
};

export const flexJustify = {
  display: 'flex',
  'justify-content': 'center',
};

export const flexSpaceBetween = {
  display: 'flex',
  'justify-content': 'space-between',
};

export const flexAlign = {
  display: 'flex',
  'align-items': 'center',
};

export const flexColumn = {
  display: 'flex',
  'flex-direction': 'column',
};

export function setStyle(...styles) {
  const result = new Map();

  styles.forEach((styleObj) => {
    Object.keys(styleObj).forEach((item) => {
      result.set(item, `${item}:${styleObj[item]};`);
    });
  });

  return Array.from(result.values()).join('');
}
