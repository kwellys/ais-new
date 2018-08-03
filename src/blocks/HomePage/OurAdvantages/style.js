import css from "styled-jsx/css";
import { setStyle, flexJustify, flexSpaceBetween } from "utils/style-helper";

export default css`
  .our-arvantaches {
    &__wrapper {
      ${setStyle(flexJustify)} width: 100%;
      margin-bottom: 42px;
      @media (max-width: 1200px) {
        margin-bottom: 0;
      }
      @media (max-width: 1024px) {
        margin-bottom: 18px;
      }
      @media (max-width: 900px) {
        margin-bottom: 37px;
      }
      @media (max-width: 768px) {
        margin-top: -8px;
      }
      @media (max-width: 326px) {
        margin-top: 0;
        margin-bottom: 24px;
      }
      @media screen and(max-width: 610px) {
        flex-direction: column;
      }
    }
    &__container {
      ${setStyle(flexSpaceBetween)} max-width: 1238px;
      width: 100%;
      flex-wrap: wrap;
      @media screen and(max-width: 610px) {
        flex-direction: column;
        align-items: center;
      }
    }
    &__card {
      flex-basis: 33%;
      margin-bottom: 98px;
      transition: all 0.3s ease-in-out;
      display: flex;
      justify-content: center;
      @media screen and(max-width: 1024px) {
        margin-bottom: 36px;
      }
      @media screen and(max-width: 410px) {
        margin-bottom: 36px;
        padding-left: 22px;
        padding-right: 11px;
      }
    }
  }
`;
