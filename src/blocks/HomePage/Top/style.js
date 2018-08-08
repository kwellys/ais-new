import BG from '../../../assets/img/bg.svg';
import css from 'styled-jsx/css';
import { colors, flexJustify, fontFamily, setStyle } from 'utils/style-helper';

export const ImageStyle = css`
  .home-page {
    &__image {
      box-sizing: border-box;
      padding: 75px 30px 75px 0;
      &_img {
        max-width: 100%;
      }
      @media (max-width: 1440px) {
        width: 50%;
      }
      @media (max-width: 640px) {
        padding: 75px 20px 30px;
      }
      @media (max-width: 600px) {
          width: 100%;
      }
    }
  }
`;

export const PageStyle = css`
  .home-page {
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    &_image {
      align-items: center;
      @media (max-width: 600px) {
        flex-direction: column;
      }
    }
    @media screen and (max-width: 800px) {
      background-position: 84% 50%;
    }
    @media screen and (max-width: 700px) {
      background-position: 70% 50%;
    }
    &__content {
      max-width: 753px;
      overflow: hidden;
      .m-button {
        display: none;
        @media screen and (max-width: 600px) {
          ${setStyle(flexJustify)}
        }
      }
      &_image {
        @media (max-width: 1440px) {
          width: 50%;
        }
        @media (max-width: 640px){
          padding-bottom: 0 !important;
        }
        @media (max-width: 600px){
          padding-bottom: 30px !important;
          width: 100%;
        }
      }
      &_indent {
        padding-bottom: 236px;
        padding-top: 180px;
      }
      @media (max-width: 640px){
        padding-bottom: 188px;
      }
    }
    &__description {
      ${setStyle(fontFamily)} 
      color: #ffffff;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.01e;
      line-height: normal;
      text-align: center;
      &_left {
        max-width: 60%;
        padding: 0 !important;
        text-align: left;
        @media (max-width: 886px) {
          max-width: 75%;
        }
        @media (max-width: 740px) {
          max-width: 75%;
        }
        @media (max-width: 660px) {
          max-width: 78%;
        }
        @media (max-width: 600px) {
          max-width: none;
          padding: 0 20px !important;
        }
      }
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
      @media screen and (max-width: 740px) {
        font-size: 16px;
        padding: 0 100px;
      }
      @media screen and (max-width: 640px) {
        font-size: 15px;
        padding: 0 100px;
      }
      @media screen and (max-width: 600px) {
        font-size: 18px;
        margin-bottom: 47px;
        padding: 0 98px;
      }
      @media screen and (max-width: 498px) {
        font-size: 16px;
        margin-bottom: 47px;
        padding: 0 96px;
      }
      @media screen and (max-width: 456px) {
        font-size: 16px;
        margin-bottom: 47px;
        padding: 0 70px;
      }
      @media screen and (max-width: 402px) {
        font-size: 16px;
        margin-bottom: 47px;
        padding: 0 28px;
      }
    }
    &__title {
      ${setStyle(fontFamily)} 
      color: ${colors.white};
      font-size: 82px;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      margin-bottom: 8px;
      text-align: center;
      text-transform: uppercase;
      &_left {
        max-width: 70%;
        padding: 0 !important;
        text-align: left;
        @media (max-width: 640px) {
          max-width: 75%;
        }
        @media (max-width: 600px) {
          max-width: none;
          padding: 0 20px !important;
        }
      }
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
  }
`;