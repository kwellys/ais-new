import css from 'styled-jsx/css';
import BG from 'assets/img/bg.svg';
import {
  colors,
  setStyle,
  fontFamily, flexJustify,
} from 'utils/style-helper';

export default css`
  .home-page {
    width: 100%;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 800px) {
      background-position: 84% 50%;
    }
    @media screen and (max-width: 700px) {
      background-position: 70% 50%;
    }
    &__content {
      padding-top: 180px;
      padding-bottom: 236px;
      max-width: 753px;
      overflow: hidden;
      @media (max-width: 640px){
        padding-bottom: 188px;
      }

      .m-button {
        display: none;
        @media screen and (max-width: 600px) {
          ${setStyle(flexJustify)}
        }
      }
    }

    &__title {
      ${setStyle(fontFamily)} 
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 82px;
      text-align: center;
      text-transform: uppercase;

      color: ${colors.white};

      margin-bottom: 8px;
      
      @media screen and (max-width: 1440px) {
        margin-bottom: 33px;
      }
      @media screen and (max-width: 1240px) {
        font-size: 76px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 70px;
        padding: 0 40px;
      }
      @media screen and (max-width: 1100px) {
        font-size: 64px;
        padding: 0 40px;
      }
      @media screen and (max-width: 1070px) {
        font-size: 58px;
        padding: 0 72px;
      }
      @media screen and (max-width: 1024px) {
        font-size: 52px;
        padding: 0 104px;
      }
      @media screen and (max-width: 670px) {
        font-size: 40px;
        padding: 0 118px;
      }
      @media screen and (max-width: 598px) {
        font-size: 30px;
        padding: 0 135px;
      }
      @media screen and (max-width: 545px) {
        font-size: 25px;
        padding: 0 145px;
      }
      @media screen and (max-width: 522px) {
        font-size: 25px;
        padding: 0 130px;
      }
      @media screen and (max-width: 491px) {
        font-size: 25px;
        padding: 0 113px;
      }
      @media screen and (max-width: 460px) {
        font-size: 25px;
        padding: 0 94px;
      }
      @media screen and (max-width: 420px) {
        font-size: 25px;
        padding: 0 80px;
      }
      @media screen and (max-width: 392px) {
        font-size: 25px;
        padding: 0 58px;
      }
      @media screen and (max-width: 350px) {
        font-size: 25px;
        padding: 0 44px;
      }
    }
    &__description {
      ${setStyle(fontFamily)} 
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 24px;
      text-align: center;
      letter-spacing: 0.01e;
      color: #ffffff;
      @media screen and (max-width: 1240px) {
        font-size: 22px;
        padding: 0 10px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 20px;
        padding: 0 46px;
      }
      @media screen and (max-width: 1100px) {
        font-size: 18px;
        padding: 0 100px;
      }
      @media screen and (max-width: 600px) {
        font-size: 18px;
        padding: 0 98px;
        margin-bottom: 47px;
      }
      @media screen and (max-width: 498px) {
        font-size: 16px;
        padding: 0 96px;
        margin-bottom: 47px;
      }
      @media screen and (max-width: 456px) {
        font-size: 16px;
        padding: 0 70px;
        margin-bottom: 47px;
      }
      @media screen and (max-width: 402px) {
        font-size: 16px;
        padding: 0 28px;
        margin-bottom: 47px;
      }
    }
  }
`;
