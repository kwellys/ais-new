import css from 'styled-jsx/css';
import { colors } from '../../utils/style-helper';

export default css`
.link {
    color: ${colors.white};
    margin-right: 49px;
    text-decoration: none;
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Montserrat";
    &:hover {
        border-bottom: 1px solid #fff;
        transition: all 0.5s;
    }
    &:last-child {
        margin-right: 0;
    }
}
`;
