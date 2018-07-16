
export const boxShadow = '0 0 25px #62A9FC';

export const desctopMaxWidth = '1440px';

export const colors = {
  blue: '#3588F9',
  darkBlue: '#045DC5',
  lightBlue: '#62A9FC',
  white: '#ffffff',
  lightGray: '#EDF3FF',
  textColor: '#525252',
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

export function setStyle(...styles) {
  const result = [];
  styles.forEach((styleObj) => {
    Object.keys(styleObj).forEach((item) => {
      result.push(`${item}: ${styleObj[item]};`);
    });
  });

  return result.join('');
}
