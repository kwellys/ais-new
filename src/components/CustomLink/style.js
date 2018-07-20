import css from 'styled-jsx/css';
import { colors } from '../../utils/style-helper';

export default css`
.link {
    color: ${colors.white};
    border-bottom: 1px solid transparent;
    margin-right: 49px;
    text-decoration: none;
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 1px;
    font-family: "Montserrat";
    @media (max-width: 1300px){
        font-size: 8px;
        margin-right: 25px;
    }
    &:hover {
        border-bottom: 1px solid #fff;
        transition: all 0.5s;
    }
    &:last-child {
        margin-right: 0;
    }
    &-inverted {
        color: ${colors.lightBlue};
        &:hover {
            border-bottom-color: ${colors.lightBlue};
        }
    }
    &-uppercase {
        text-transform: uppercase;
    }
}
`;
