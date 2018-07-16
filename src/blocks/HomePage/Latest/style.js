import css from 'styled-jsx/css';
import {
  setStyle,
  flexJustify,
  colors,
  flexAlign,
} from '../../../utils/style-helper';

export default css`
  .l-wrapper {
    ${setStyle(flexJustify)} width: 100%;
    padding-bottom: 133px;
    &__container {
      ${setStyle(flexJustify)} 
        &-left {
        ${setStyle(flexJustify)} width: 100%;
        margin-right: 25px;
        position: relative;
        &:hover > .overlayer {
          opacity: 1;
          transition: opacity 0.2s ease-in;
        }
      }
      &-right {
        width: 100%;
        &-upper {
          ${setStyle(flexJustify)} width: 100%;
          margin-bottom: 20px;
          position: relative;
          &:hover > .overlayer {
            opacity: 1;
            transition: opacity 0.2s ease-in;
          }
        }
        &-bottom {
          ${setStyle(flexJustify)} width: 100%;
          .i1 {
            margin-right: 20px;
            position: relative;
            &:hover > .overlayer {
              opacity: 1;
              transition: opacity 0.2s ease-in;
            }
          }
          .i2 {
            margin-right: 20px;
            position: relative;
            &:hover > .overlayer {
              opacity: 1;
              transition: opacity 0.2s ease-in;
            }
          }
        }
      }
    }
    .overlayer {
        ${setStyle(flexJustify)} 
        ${setStyle(flexAlign)}
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: rgba(138, 185, 245, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        &__title {
          margin-bottom: 8px;
          color: ${colors.white};
          font-family: 'Montserrat';
          font-weight: 600;
          font-size: 18px;
          text-align: center;
          line-height: normal;
        }
        &__link {
          color: ${colors.white};
          font-family: Montserrat;
          font-size: 16px;
        }
      }
  }
`;
