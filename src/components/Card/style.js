import css from 'styled-jsx/css';

import { setStyle, flexAllAlign } from '../../utils/style-helper';

export default css`
  .b-card {
    background-color: white;
    box-shadow: 0px 2px 44px rgba(23, 128, 224, 0.25);
    border-radius: 3px;
    width: 315px;
    height: 461px;
    padding-top: 40px;
    padding: 42px 40px 10px 40px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 68px;
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__image {
      ${setStyle(flexAllAlign)} width: 156.94px;
      height: 136.32px;
      border-radius: 5px;
      margin-bottom: 40px;
    }
    &__title {
      margin-bottom: 45px;
      padding: 0 41px;
    }
  }
`;
