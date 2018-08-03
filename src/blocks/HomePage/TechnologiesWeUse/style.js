import css from 'styled-jsx/css';
import { setStyle, flexJustify } from 'utils/style-helper';

export default css`
  .tech-we-use {
    ${setStyle(flexJustify)} &__container {
      max-width: 1260px;
      width: 100%;
      overflow: hidden;
      margin-bottom: -86px;
      @media (max-width: 1440px){
        margin-bottom: -32px;
        margin-top: -12px;
      }
      @media (max-width: 1200px){
        margin-bottom: -38px;
      }
    }
    &__wrapper {
      transform: rotate(45deg);
      margin-left: -114px;
      margin-top: 47px;
    }
    &__row {
      display: flex;
      &_flex-end {
        align-items: flex-end;
      }
    }
    &__cube {
      margin-bottom: 120px;
      margin-right: 120px;
    }
  }
  @media (max-width: 1440px) {
    .tech-we-use {
      &__cube {
        margin-bottom: 60px;
        margin-right: 60px;
      }
      &__wrapper {
        margin-left: 34px;
        margin-top: 72px;
      }
    }
  }
  @media (max-width: 1280px) {
    .tech-we-use {
      &__cube {
        margin-bottom: 30px;
        margin-right: 30px;
      }
      &__container {
        max-width: 916px;
      }
    }
  }
  @media (max-width: 1100px) {
    .tech-we-use {
      margin-left: -19px;
      margin-top: -14px;
      &__wrapper {
        margin-left: -19px;
        margin-top: 4px;
      }
      &__cube {
        margin-bottom: 60px;
        margin-right: 60px;
      }
    }
  }
  @media (max-width: 768px){
    .tech-we-use {
      margin-left: -19px;
      margin-top: -21px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 320px){
    .tech-we-use {
      margin-top: -15px;
      margin-bottom: -14px;
    }
  }
  @media (max-width: 930px) {
    .tech-we-use {
      &__cube {
        margin-bottom: 40px;
        margin-right: 40px;
      }
      &__container{
        max-width: 813px;
      }
    }
  }
  @media (max-width: 820px) {
    .tech-we-use {
      &__wrapper {
        margin-left: 54px;
        margin-top: 20px;
      }
      &__cube {
        margin-bottom: 15px;
        margin-right: 15px;
      }
    }
  }
  @media (max-width: 768px){
    .tech-we-use {
      &__wrapper {
        margin-left: -28px;
        margin-top: 13px;

      }
      &__cube {
        margin-bottom: 40px;
        margin-right: 40px;
      }
      &__container{
        max-width: 592px;
      }
    }

  }
  @media (max-width: 579px){
    .tech-we-use {
      &__wrapper {
        margin-left: -12px;
        margin-top: 15px;

      }
      &__cube {
        margin-bottom: 13px;
        margin-right: 13px;

      }
      &__container{
        max-width: 308px;
        margin-bottom: 50px;
      } 
    }

  }
`;
