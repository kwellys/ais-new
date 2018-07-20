import css from 'styled-jsx/css';
import { setStyle, flexAllAlign } from '../../utils/style-helper';

export default css`
  .b-adv {
    &__wrapper {
      ${setStyle(flexAllAlign)} 
      flex-direction: column;
      max-width: 308px;
      padding: 0 45px;
      box-sizing: border-box;
      @media screen and(max-width: 1101px) {
        padding: 0 14px 0 90px;
      }
      @media screen and(max-width: 940px) {
        padding: 0 14px 0 70px;
      }
      @media screen and(max-width: 610px) {
        flex-direction: row;
        padding: 0;
      }
    }
    &__card {
      margin-bottom: 38px;
      &-textcontainer {
        @media screen and(max-width: 610px) {
          display: flex;
          flex-direction: column;
          align-items: start;
        }
      }
      @media screen and(max-width: 1024px){
        margin-bottom: 23px;
      }
      @media screen and(max-width: 610px){
        margin-bottom: 9px;
        margin-right: 20px;
      }
    }
    &__title {
      margin-bottom: 23px;
      @media screen and(max-width: 1024px){
        margin-bottom: 14px;
      }
    }
    &__text {
    }
  }
`;
