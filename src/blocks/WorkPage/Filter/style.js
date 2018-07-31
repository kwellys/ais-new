import css from "styled-jsx/css";
import { setStyle, flexAllAlign } from "@/utils/style-helper";

export default css`
  .filter {
    padding: 25px;
    &__button {
      margin-bottom: 20px;
      @media (max-width: 600px){
        margin-right: 10px;
      }
    }
    ${setStyle(flexAllAlign)} &__container {
      max-width: 1440px;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 1040px) {
        max-width: 825px;
      }
      @media (max-width: 450px){
        /* justify-content: center; */
      }
    }
  }
`;
