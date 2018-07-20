import css from 'styled-jsx/css';
import { colors, setStyle, flexJustify } from 'utils/style-helper';

export default css`
    .personal {
        ${setStyle(flexJustify)}
        box-sizing: border-box;
        flex-basis: 25%;
        padding: 15px;
        width: 100%;
        &__container {
            align-items: center;
            display: flex;
            flex-direction: column;
            position: relative;
            &-photo {
                background-color: ${colors.lightGray};
                border-radius: 4px;
                margin: 25px 25px 50px 25px;
                height: 222px;
                width: 222px;
            }
            &-square {
                background-color: ${colors.blue};
                border-radius: 4px;
                height: 222px;
                left: 26px;
                position: absolute;
                top: 25px;
                transform: rotate(-15deg);
                width: 222px;
                z-index: -1;
            }
            &-info {
                font-family: Montserrat;
                font-size: 16px;
                line-height: 27px;
                padding-bottom: 8px;
                text-align: center;
            }
            &-image {
                border-radius: 4px;
                max-width: 100%;
            }
            &-role {
                font-family: Montserrat;
                font-size: 16px;
                line-height: 27px;
                text-align: center;
            }
        }
    }
    @media (max-width: 1280px) {
        .personal {
            flex-basis: 50%;
            width: 50%;
        }
    }
    @media (max-width: 768px) {
        .personal {
            &__container {
                &-photo,
                &-square {
                    height: 166px;
                    width: 166px;
                }
            }
        }
    }
    @media (max-width: 576px) {
        .personal {
            &__container {
                &-photo {
                    margin: 25px;
                }
                &-photo,
                &-square {
                    height: 100px;
                    width: 100px;
                }
                &-role {
                    max-width: 100px;
                }
            }
        }
    }
`;
