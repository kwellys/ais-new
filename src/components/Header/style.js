import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexAlign } from '../../utils/style-helper';

export default css`
    .b-header {
        ${setStyle(flexJustify)}
        position: absolute;
        width: 100%;
        &__content {
            ${setStyle(flexAlign)}
            @media screen and (max-width: 2254px) {
                max-width: 2220px;
            }
            @media screen and (max-width: 2200px) {
                max-width: 2100px;
            }
            @media screen and (max-width: 2100px) {
                max-width: 2000px;
            }
            @media screen and (max-width: 2000px) {
                max-width: 1900px;
            }
            @media screen and (max-width: 1900px) {
                max-width: 1800px;
            }
            @media screen and (max-width: 1800px) {
                max-width: 1700px;
            }
            @media screen and (max-width: 1700px) {
                max-width: 1600px;
            }
            width: 100%;
            justify-content: space-between;
        }
        &__links {
            margin-top: 18px;
            // margin-left: 220px;
            padding-left: 180px;
        }
    }
`;
