import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexAlign } from '../../utils/style-helper';

export default css`
  .ser-wrapper {
    ${setStyle(flexAlign)} flex-direction: column;
    &__image-wrapper {
      ${setStyle(flexJustify)} 
      width: 57px;
      height: 54px;
      margin-bottom: 48px;
      @media (max-width: 1150px){
        margin-bottom: 26px;
        width: 45.38px;
        height: 42.19px;
      }
      @media (max-width: 700px){
        margin-bottom: 0;
        margin-right: 24px;
      }
    }
    &__textmedium {
      margin-bottom: 18px;
      @media (max-width: 850px){ 
        min-height: 36px;
      }
      @media (max-width: 700px){
        margin-bottom: 0;
        min-height: min-content;
      }
    }
    &__descr {
      padding: 0 38px;
      margin-bottom: 11px;
      @media (max-width: 1150px){ 
        padding: 0 14px;
      }
      @media (max-width: 850px){
        min-height: 72px;
      }
    }
    .rendered-twrapper {
      ${setStyle(flexAlign)} 
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
    }
    .overWrapper {
      display: flex;
      flex-direction: column;
      max-width: max-content;
      overflow: hidden;
    }

  }
  .serv-mobile {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 2px 44px rgba(23, 128, 224, 0.271031);
    border-radius: 10px;
    margin-bottom: 33px;
    padding: 18px;
    &__header {
      display: flex;
      align-items: center;
    }

  }
`;
