import css from 'styled-jsx/css';
import {
  colors, flexAlign, flexColumn, flexSpaceBetween, fontFamily, setStyle,
} from '../../utils/style-helper';

export default css`
    .b-footer {
        &__contacts {
            ${setStyle(flexAlign)}
            line-height: 1.5;
            padding: 5px 0 0;
            @media (max-width: 500px) {
                width: 100%;
            }
        }
        &__contact {
            ${setStyle(flexColumn)}
            color: ${colors.lightBlue};
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 1px;
            min-width: 300px;
            flex-basis: 50%;
            transition: min-width 0.3s;
            @media (max-width: 1190px) {
                min-width: 270px;
            }
            @media (max-width: 1078px) {
                min-width: 258px;
                font-size: 10px;
            }
            @media (max-width: 996px) {
                min-width: 238px;
            }
            @media (max-width: 900px) {
                min-width: 228px;
                font-size: 8px;
            }
            @media (max-width: 800px) {
                min-width: 202px;
            }
            @media (max-width: 768px) {
                min-width: 184px;
            }
            & + & {
                margin-left: 10px;
            }
            &-phone {
                color: ${colors.lightBlue};
                text-decoration: none;
                &:hover {
                    border-bottom: 1px solid ${colors.lightBlue};
                    transition: all 0.5s;
                }
                
            }
        }
        &__content {
            ${setStyle(flexAlign, fontFamily)}
            padding: 40px 0 45px;
            width: 100%;
            @media screen and(max-width: 500px) {
                flex-direction: column;
                align-items: flex-start;
            }
            &-logo-wrapper {
                width: 49%;
            }
        }
        &__links {
            padding-top: 5px;
            padding-right: 50px;
        }
    }
    @media (max-width: 1440px) {
        .b-footer {
            &__content {
                justify-content: flex-start;
            }
            &__links {
                display: none;
            }
        }
    }
    @media (max-width: 1300px) {
        .b-footer {
            &__contacts {
                align-items: flex-start;
            }
            &__contact {
            }
        }
    }
    @media (max-width: 768px) {
        .b-footer {
            &__contacts {
            }
        }
    }
    @media (max-width: 550px) {
        .b-footer {
            &__contact {
                min-width: 0;
                padding-left: 28px;
            }
        }
    }
`;
