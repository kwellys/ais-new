import css from "styled-jsx/css";
import {
  colors,
  setStyle,
  flexColumn,
  flexAlign
} from "../../utils/style-helper";

export default css`
  .cursor {
    position: absolute;
    z-index: 2;
    width: 43px;
    height: 63px;
    overflow: hidden;
    &:hover {
      z-index: 10;
      overflow: visible;
      width: initial;
      height: initial;
      .mapMaker {
        filter: brightness(75%);
      }
      .company {
        opacity: 1;
        transition: opasity 0.3s ease-in;
      }
    }
    .mapMaker {
      z-index: -1;
    }
    .company {
      width: 364px;
      height: 118px;
      background-color: ${colors.white};
      display: flex;
      position: absolute;
      top: 64px;
      left: 13px;
      ${setStyle(flexAlign)} justify-content: space-around;
      box-shadow: 1px 1px 4px rgba(23, 128, 224, 0.271);
      border-radius: 15px;
      opacity: 0;
      opacity: 1;
      &__info {
        ${setStyle(flexColumn)} &-name {
          max-width: max-content;
          padding-bottom: 9px;
        }
        &-location {
          padding-bottom: 9px;
        }
        &-link {
          color: ${colors.blue};
        }
      }
      &__logo {
        .img-wrapper {
          background-color: #f5f5f5;
          border-radius: 36px;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
