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
      padding: 0 45px;
      &_inverted {
        flex-direction: row-reverse;
      }
    }
    &__wrapper {
      min-height: 500px;
      display: flex;
      justify-content: center;
      background-color: ${colors.lightGray};
      &_inverted {
        min-height: 561px;
        background-color: ${colors.white};
      }
      &_reversed {
        background-color: ${colors.white};
      }
      &_reflected {
        background-color: ${colors.lightGray};
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
      &_indent {
        padding-right: 21%;
      }
    }
    &__title {
      margin-bottom: 20px;
    }
    &__image {
      width: 90%;
      max-width: 690.11px;
      overflow: hidden;
      &-wrapper {
        width: 100%;
        height: 100%;
        ${setStyle(flexAllAlign)}
      }
    }
  }
  @media (max-width: 1150px) {
    .exp {
      &__description {
        padding-left: 6%;
      }
      &__image {
        &-container {
          flex-basis: 50%;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .exp {
      &__container {
        flex-direction: column;
        padding: 45px;
      }
      &__description {
        min-height: min-content;
        padding-left: 11%;
      }
      &__image {
        &-container {
          margin-top: 15px;
        }
      }
      &__list {
        &_indent {
          padding-right: 0;
        }
      }
      &__wrapper {
        &_inverted {
          .exp__container {
            flex-direction: column-reverse;
          }
          .exp__image-container {
            margin-top: 0;
            margin-bottom: 15px; 
          }
        }
      }
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
  .viewcase__container {
    width: 102px;
    height: 18px;
    .b-view-cases {
      ${setStyle(fontFamily, flexAlign)} font-style: normal;
      font-weight: normal;
      line-height: 27px;
      font-size: 16px;
      text-decoration: none;
  
      color: ${colors.blue};
      display: flex;
      padding-bottom: 2px;
      &:hover {
        transition: all 0.3s;
        border-bottom: 1px solid ${colors.darkBlue};
      }
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
  }
`;
