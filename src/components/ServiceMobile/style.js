import css from 'styled-jsx/css';
// import { setStyle, flexJustify, flexAlign } from '../../utils/style-helper';

export default css`
  .rendered-twrapper {
    display: flex;
  }
  .chevron {
    position: relative;
    text-align: center;
    padding: 0 8px;
    margin-bottom: 6px;
    height: 18px;
    width: 16px;
  }

  .chevron:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 11px;
    height: 15%;
    width: 13%;
    background: blue;
    transform: skew(0deg, 30deg);
  }
  .chevron:after {
    content: '';
    position: absolute;
    top: 10px;
    right: 9px;
    height: 17%;
    width: 26%;
    background: blue;
    transform: skew(0deg, -45deg);
  }

  .serv-mobile {
    transition: padding 0.25s ease-in;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 2px 44px rgba(23, 128, 224, 0.271031);
    border-radius: 10px;
    margin-bottom: 33px;
    padding: 18px;
    padding-bottom: 0;
    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__image-wrapper {
      width: 36.56px;
      height: 35.32px;
      margin-right: 23px;
    }
    &__text {
      flex-basis: 55%;
    }
    &__list {
    }
    &__body {
      transition: max-height 0.25s ease-in;
      display: flex;
      overflow: hidden;
      height:auto;
    }
  }
`;
