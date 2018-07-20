import css from 'styled-jsx/css';
import closeIcon from 'assets/img/close-m-menu.svg';
import cube from 'assets/img/m-bg.svg';
import {
  colors,
  flexSpaceBetween,
  setStyle,
  flexAllAlign,
  fontFamily,
} from '../../utils/style-helper';

export default css`
  .b-hamburger {
    &__icon {
      width: 30px;
      height: 23px;
      border: none;
      background-color: unset;
      ${setStyle(flexSpaceBetween)} 
      flex-direction: column;
      cursor: pointer;
      padding: 0;
    }
    &__line {
      width: 30px;
      height: 4px;
      border-radius: 5px;
      background-color: ${colors.white};
    }
    &__menu-box {
      ${setStyle(flexAllAlign)}
      background-color: ${colors.white};
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2000;
    }
    &__close {
      width: 29.89px;
      height: 29.89px;
      position: absolute;
      right: 17px;
      top: 17px;
      cursor: pointer;
      border: none;
      background-color: unset;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${closeIcon});
    }
    &__menu-container {
      display: flex;
      flex-direction: column;
    }
    &__menu-item {
      ${setStyle(fontFamily)}
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 20px;
      text-transform: uppercase;
      text-decoration: none;
      margin-bottom: 40px;
      color: #3588f9;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__cube {
      width: 69px;
      height: 116px;
      right: 0;
      top: 33%;
      position: absolute;
      background-repeat: no-repeat;
      background-image: url(${cube});
    }
  }
`;
