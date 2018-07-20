import css from 'styled-jsx/css';

import { setStyle, flexAllAlign } from '../../utils/style-helper';

export default css`
  .b-card {
    background-color: white;
    box-shadow: 0 2px 44px rgba(23, 128, 224, 0.25);
    border-radius: 3px;
    width: 315px;
    min-height: 461px;
    padding-top: 40px;
    padding: 42px 35px 10px 35px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 68px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 1150px) {
      width: 200px;
      min-height: 310px;
      padding: 29px 28px 10px 28px;
      height: 100%;
    }
    @media (max-width: 800px){
      width: 180px;
      padding: 25px 13px 10px 13px;
    }
    @media (max-width: 680px){
      margin-right: 0;
    }
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__image {
      ${setStyle(flexAllAlign)} 
      width: 156.94px;
      height: 136.32px;
      border-radius: 5px;
      margin-bottom: 40px;
      transition: .3s all;
      @media (max-width: 1150px){
        width: 83.65px;
        height: 72.35px;
      }
    }
    &__title {
      margin-bottom: 28px;
      padding: 0 41px;
      min-height: 44px;
      @media (max-width: 1150px){
        margin-bottom: 9px;
      }
    }
  }
`;
