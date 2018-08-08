import css from 'styled-jsx/css';
import {
  setStyle,
  flexJustify,
  colors,
  flexAlign,
} from 'utils/style-helper';

export default css`
  .l-wrapper {
    ${setStyle(flexJustify)} width: 100%;
    padding-bottom: 155px;
    transition: all 0.5s;
    @media (max-width: 1200px) {
      padding-bottom: 89px;
    }
    @media (max-width: 900px) {
      padding-bottom: 87px;
      }
    @media (max-width: 768px) {
      padding-bottom: 80px;
      }
    @media (max-width: 756px) {
      padding-bottom: 339px;
      }
    @media (max-width: 660px) {
      padding-bottom: 312px;
      }

    &__container {
      ${setStyle(flexJustify)}
      @media screen and(max-width: 755px) {
        flex-direction: column;
        align-items: center;
      }
        &-left {
        ${setStyle(flexJustify)} width: 100%;
        margin-right: 25px;
        position: relative;
        @media screen and(max-width: 1400px) {
          margin-right: 15px;
          height: 491px;
        }
        @media screen and(max-width: 1200px) {
          margin-right: 15px;
          height: 491px;
        }
        @media screen and(max-width: 1000px) {
          height: 457px;
          margin-right: 5px;
        }
        @media screen and(max-width: 998px) {
          height: 379px;
        }
        @media screen and(max-width: 768px) {
          height: 359px;
        }
        @media screen and(max-width: 755px) {
          margin-right: 0;
          margin-bottom: 10px;
          height: 262px;
        }
        @media screen and(max-width: 540px) {
          margin-right: 0;
          margin-bottom: 10px;
          height: 218px;
        }
        .project1 {
          @media screen and(max-width: 1400px) {
            width: 580px;
            height: 491px;
            align-items: center;
          }
          @media screen and(max-width: 1200px) {
            width: 468px;
            height: 491px;
          }
          @media screen and(max-width: 1024px) {
            width: 468px;
            height: 456px;
          }
          @media screen and(max-width: 998px) {
            width: 390px;
            height: 379px;
          }
          @media screen and(max-width: 840px) {
            width: 353px;
            height: 359px;
          }
          @media screen and(max-width: 768px) {
            width: 353px;
            height: 359px;
          }
          @media screen and(max-width: 755px) {
            width: 358px;
            height: 262px;
          }
          @media screen and(max-width: 540px) {
            width: 315px;
            height: 218px;
          }
          @media screen and(max-width: 470px) {
            width: 280px;
            height: 218px;
          }
        }
        &:hover > .overlayer {
          opacity: 1;
          transition: opacity 0.2s ease-in;
        }
      }
      &-right {
        width: 100%;
        transition: all 0.5s;
        &-upper {
          display: flex;
          width: 100%;
          margin-bottom: 20px;
          position: relative;
          @media screen and(max-width: 1400px) {
            margin-bottom: 10px;
            width: 100%;
          }
          @media screen and(max-width: 1000px) {
            margin-bottom: 5px;
          }
          @media screen and(max-width: 755px) {
            margin-bottom: 10px;
          }
          .project2 {
            width: 655px;
            height: 318px;
            @media screen and(max-width: 1400px) {
              width: 485px;
              height: 256px;
            }
            @media screen and(max-width: 1024px) {
              width: 455px;
              height: 226px;
            }
            @media screen and(max-width: 998px) {
              width: 380px;
              height: 200px;
            }
            @media screen and(max-width: 840px) {
              width: 329px;
              height: 183px;
            }
            @media screen and(max-width: 768px) {
              width: 329px;
              height: 183px;
            }
            @media screen and(max-width: 755px) {
              width: 358px;
              height: 160px;
            }
            @media screen and(max-width: 540px) {
              width: 315px;
              height: 199px;
            }
            @media screen and(max-width: 470px) {
              width: 280px;
              height: 199px;
            }
          }
          &:hover > .overlayer {
            opacity: 1;
            transition: opacity 0.2s ease-in;
          }
        }
        &-bottom {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 338px;
          @media screen and(max-width: 1400px) {
            height: 225px;
          }
          @media screen and(max-width: 998px) {
            height: 174px;
          }
          @media screen and(max-width: 755px) {
            flex-direction: column;
          }
          .i1 {
            position: relative;
            @media screen and(max-width: 755px) {
              margin-right: 0;
              margin-bottom: 10px;
            }
            .project3 {
              width: 320px;
              height: 338px;
              @media screen and(max-width: 1400px) {
                width: 235px;
                height: 225px;
              }
              @media screen and(max-width: 1024px) {
                width: 225px;
                height: 225px;
              }
              @media screen and(max-width: 998px) {
                width: 186px;
                height: 173px;
              }
              @media screen and(max-width: 840px) {
                width: 159px;
                height: 171px;
              }
              @media screen and(max-width: 768px) {
                width: 159px;
                height: 171px;
              }
              @media screen and(max-width: 755px) {
                width: 357px;
                height: 200px;
              }
              @media screen and(max-width: 540px) {
                width: 315px;
                height: 199px;
              }
              @media screen and(max-width: 470px) {
                width: 280px;
                height: 199px;
              }
            }
            &:hover > .overlayer {
              opacity: 1;
              transition: opacity 0.2s ease-in;
            }
          }
          .i2 {
            position: relative;
            @media screen and(max-width: 755px) {
              margin-right: 0;
            }
            .project4 {
              width: 320px;
              height: 338px;
              @media screen and(max-width: 1400px) {
                width: 235px;
                height: 225px;
              }
              @media screen and(max-width: 1024px) {
                width: 225px;
                height: 225px;
              }
              @media screen and(max-width: 998px) {
                width: 186px;
                height: 173px;
              }
              @media screen and(max-width: 840px) {
                width: 159px;
                height: 171px;
              }
              @media screen and(max-width: 768px) {
                width: 159px;
                height: 171px;
              }
              @media screen and(max-width: 755px) {
                width: 357px;
                height: 216px;
              }
              @media screen and(max-width: 540px) {
                width: 315px;
                height: 193px;
              }
              @media screen and(max-width: 470px) {
                width: 280px;
                height: 193px;
              }
            }
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
