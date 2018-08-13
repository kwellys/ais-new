import css from 'styled-jsx/css';
import { colors } from '../../utils/style-helper';

export default css`

.link {
    margin-right: 49px;
    :global(.active) {
        span {
            // text-decoration: underline;
            border-bottom: 1px solid #fff;
            // margin-bottom: 1px;
        }
    }
    span {
        color: ${colors.white};
        border-bottom: 1px solid transparent;
    
        text-decoration: none;
        font-style: normal;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 1px;
        font-family: "Montserrat";
        &:hover {
            border-bottom: 1px solid #fff;
        }
        @media (max-width: 1300px){
            font-size: 10px;
        }
        @media (max-width: 1000px){
            font-size: 8px;
        }
        @media (max-width: 890px){
            font-size: 8px;
        }
    }

    @media (max-width: 1300px){
        margin-right: 25px;
    }
    @media (max-width: 1024px){
        margin-right: 25px;
    }
    @media (max-width: 890px){
        margin-right: 16px;
    }
    &:last-child {
        margin-right: 0;
    }
    &-inverted {
        max-width: max-content;
        span {
            color: ${colors.lightBlue};
            font-weight: 400;
        &:hover {
            border-bottom-color: ${colors.lightBlue};
            text-decoration: none;
            }
            @media (max-width: 1078px) {
                font-size: 10px;
            }
            @media (max-width: 900px) {
                font-size: 8px;
            }
        }
    }
    &-uppercase {
        span {
            text-transform: uppercase;
        }
    }
}
`;
