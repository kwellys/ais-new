import css from 'styled-jsx/css';
import {
  colors, flexAlign, flexColumn, flexSpaceBetween, fontFamily, setStyle,
} from '../../utils/style-helper';

export default css`
    .b-footer {
        &__contacts {
            ${setStyle(flexAlign)}
            line-height: 1.5;
            padding: 5px 50px 0;
        }
        &__contact { 
            ${setStyle(flexColumn)}
            color: ${colors.lightBlue};
            flex: 1 0 50%;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            min-width: 240px;
            & + & {
                margin-left: 10px;
            }
        }
        &__content {
            ${setStyle(flexAlign, flexSpaceBetween, fontFamily)}
            padding: 40px 0 45px;
            @media screen and(max-width: 500px) {
                flex-direction: column;
                align-items: flex-start;
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
                font-size: 8px;
                min-width: 160px;
            }
        }
    }
    @media (max-width: 768px) {
        .b-footer {
            &__contacts {
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
    @media (max-width: 550px) {
        .b-footer {
            &__contact {
                min-width: 0;
            }
        }
    }
`;
