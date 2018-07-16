import css from 'styled-jsx/css';
import {
  colors,
  setStyle,
  flexAlign,
  fontFamily,
  flexAllAlign,
} from '../../utils/style-helper';

import Arrow from '../../assets/img/Arrow.svg';

export default css`
  .exp {
    &__container {
      width: 100%;
      max-width: 1470px;
      overflow: hidden;
      display: flex;
      &_inverted {
        flex-direction: row-reverse;
      }
    }
    &__wrapper {
      height: 500px;
      display: flex;
      justify-content: center;
      background-color: ${colors.lightGray};
      &_inverted {
        height: 561px;
        background-color: ${colors.white};
      }
    }
    &__description {
      flex-basis: 50%;
      padding-left: 11%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &_inverted {
        padding-left: 30%;
      }
    }
    &__list {
      margin-bottom: 29px;
    }
    &__title {
      margin-bottom: 20px;
    }
    &__image-wrapper {
      width: 100%;
      height: 100%;
      ${setStyle(flexAllAlign)}
    }
    &__image {
      width: 90%;
      max-width: 690.11px;
      overflow: hidden;
    }
  }
`;

export const listItem = css`
  .b-list {
    ${setStyle(flexAlign)} &:before {
      content: '';
      display: block;
      width: 7px;
      height: 7px;
      border-radius: 8px;

      margin-right: 8px;

      background-color: ${colors.blue};
    }
  }
`;

export const viewCases = css`
  .b-view-cases {
    ${setStyle(fontFamily, flexAlign)} font-style: normal;
    font-weight: normal;
    line-height: 27px;
    font-size: 16px;
    text-decoration: none;

    color: ${colors.blue};
    display: flex;
    &:after {
      content: '';
      display: block;

      margin-top: 3px;

      width: 11px;
      height: 10px;
      margin-left: 6px;
      background-repeat: no-repeat;
      background-image: url(${Arrow});
    }
  }
`;
