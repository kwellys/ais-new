import css from "styled-jsx/css";
import {
  colors,
  boxShadow,
  setStyle,
  flexAllAlign
} from "../../utils/style-helper";

import successIcon from "@/assets/img/success-icon.svg";
import errorIcon from "@/assets/img/error-icon.png";

export default css`
  .btn {
    padding: 0 52px;
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
    border: none;
    box-shadow: 0px 2px 44px rgba(23, 128, 224, 0.271031);
    ${flexAllAlign} 
    @media (max-width: 1300px) {
      padding: 0 14px;
      height: 27px;
      font-size: 12px;
    }
    @media (max-width: 880px) {
      font-size: 10px;
      height: 24px;
    }
    @media screen and (max-width: 600px) {
      height: 40px;
      line-height: 14px;
      font-size: 12px;
      margin: 0;
      border: none;
    }
    @media screen and (max-width: 500px) {
      height: 36px;
      line-height: 12px;
      font-size: 10px;
      margin: 0;
      border: none;
    }
    @media screen and (max-width: 350px) {
      padding: 0 8px;
    }
    @media screen and (max-width: 320px) {
      height: 33px;
      margin: 0;
      border: none;
    }
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
      cursor: not-allowed;
    }
    &__small {
      padding: 13px 25px;
      width: auto;
      height: auto;
    }
    &:active {
      color: ${colors.darkBlueForButton};
    }
    &__message-box {
      ${setStyle(flexAllAlign)} width: 100%;
    }
    &__message {
      &_success {
        color: ${colors.aqua};
      }
      &_error {
        color: ${colors.red};
      }
    }
    &__success-icon {
      width: 12.4px;
      height: 10.23px;
      margin-left: 15px;
      background-repeat: no-repeat;
      background-image: url(${successIcon});
    }
    &__error-icon {
      width: 15.4px;
      height: 16.23px;
      margin-left: 15px;
      background-repeat: no-repeat;
      background-image: url(${errorIcon});
    }
    &__dots {
      display: flex;
      margin-left: 10px;
    }
    &__dot {
      width: 5.85px;
      height: 6px;

      background: #62a9fc;
      margin-right: 6px;
      border-radius: 5px;

      animation-name: blink;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__tranparency {
      color: #ffffff;
      border: 2px solid white;
      background: rgba(105, 210, 236, 0.16);
    }
  }
  @keyframes blink {
    0% {
      transform: scale(0.6);
    }
    20% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.4);
    }
  }

  .scrolled {
    margin-top: 0;
    transition: all 0.2s;
  }

  .mobile {
    width: 149px;
    height: 33px;
    line-height: 12px;
    color: #3588f9;
    background-color: #ffffff;
    font-size: 10px;
    border-radius: 25px;
    outline: none;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 15px;
    border: none;
    margin-left: 80px;
  }
`;
