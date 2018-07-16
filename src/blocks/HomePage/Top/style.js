import css from 'styled-jsx/css';
import BG from '../../../assets/img/bg.svg';
import {
  colors,
  setStyle,
  fontFamily,
} from '../../../utils/style-helper';

export default css`
  .home-page {
    height: 753px;
    width: 100%;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    &__content {
      padding-top: 200px;
      padding-bottom: 250px;
      max-width: 753px;
      overflow: hidden;
    }

    &__title {
      ${setStyle(fontFamily)} 
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 82px;
      text-align: center;
      letter-spacing: 0.01em;
      text-transform: uppercase;

      color: ${colors.white};

      margin-bottom: 37px;
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
    }
  }
`;
