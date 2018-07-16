import css from 'styled-jsx/css';
import {
  colors,
  boxShadow,
} from '../../utils/style-helper';

export default css`
  .btn {
    width: 239px;
    height: 45px;
    line-height: 17px;
    color: ${colors.blue};
    background-color: ${colors.white};
    font-size: 14px;
    border-radius: 25px;
    outline: none;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 30px;
    margin-top: 15px;
    border: none;
    &:hover {
      box-shadow: ${boxShadow};
      transition: all 0.5s;
    }
    &__long {
      width: 100%;
    }
    &__inverted {
      color: ${colors.white};
      background-color: ${colors.blue};
    }
    &__disable {
      background-color: rgba(255, 255, 255, 0.3);
      cursor: not-allowed
    }
    &:active {
      color: ${colors.darkBlue};
    }
  }
`;
