import css from 'styled-jsx/css';
import {
  colors,
  setStyle,
  flexJustify,
} from 'utils/style-helper';

export default css`
.get-in-touch {
  &__wrapper {
    ${setStyle(flexJustify)}
    width: 100%;
    background-color: ${colors.lightBlue};
    height: 366px;
    margin-bottom: 146px;
    @media (max-width: 1200px){
      margin-bottom: 86px;
    }
    @media (max-width: 768px){
      margin-bottom: 78px;
    }
    @media (max-width: 326px){
      margin-bottom: 65px;
    }

  }
  &__container {
    display: flex;
    height: 100%;
    max-width: 1300px;
    width: 100%;
    overflow: hidden;
  }
  &__description-box {
    ${setStyle(flexJustify)}
    flex-direction: column;
    flex-basis: 27%;
    padding-left: 10%;
    height: 100%;
    width: 100%;
    padding-top: 8px;
  }
  &__image {
    &-box {
      align-items: center;
      display: flex;
      padding-left: 14%;
    }
    &-item {
      max-width: 100%; 
    }
  }
  &__title{
    margin-bottom: 18px;
  }
  &__text{
    margin-bottom: 30px;
  }
}
@media (max-width: 992px) {
  .get-in-touch {
    &__description-box {
      box-sizing: border-box;
      flex-basis: 40%;
    }
    &__image-box {
      box-sizing: border-box;
      flex-basis: 60%;
      padding-left: 7%;
    }
  }
}
@media (max-width: 800px) {
  .get-in-touch {
    &__wrapper {
      height: auto;
    }
    &__container {
      flex-direction: column;
    }
    &__description-box {
      padding: 20px 20px 0;
    }
    &__image-box {
      padding: 20px;
    }
  }
}
`;
