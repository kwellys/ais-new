import RocketImage from 'assets/img/rocket.png';
import css from 'styled-jsx/css';
import { colors, fontFamily, setStyle } from 'utils/style-helper';

export const BlockStyle = css`
    .feedback {
        background-color: ${colors.lightBlue};
        &__container {
            display: flex;
            margin: 0 auto;
            max-width: 1600px;
            @media (max-width: 768px){

            }
            &-left {
                background: url(${RocketImage}) no-repeat bottom right;
                flex: 1 0 0;
            }
            &-right {
                flex: 1 0 0;
                padding: 30px 45px 30px 0;
            }
        }
        &__content {
            max-width: 540px;
        }
    }
    @media (max-width: 768px) {
        .feedback {
            &__container {
                &-left {
                    display: none;
                }
                &-right {
                    padding-left: 20px;
                    padding-right: 20px;
                }
            }
            &__content {
                max-width: 97%;
            }
        }
    }
`;

export const FormStyle = css`
    .feedback-form {
        &__form {
            margin-top: 30px;
        }
    }
`;

export const SentStyle = css`
    .feedback-sent {
        background: url(${RocketImage}) no-repeat bottom center;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        &__content {
            padding: 60px;
        }
        &__text {
            ${setStyle(fontFamily)}
            color: ${colors.white};
            font-size: 30px;
            font-weight: 600;
            line-height: 40px;
            margin-top: 90px;
            max-width: 220px;
        }
    }
    @media (max-width: 768px) {
        .feedback-sent {
            background: none;
        }
    }
`;
