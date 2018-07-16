import css from 'styled-jsx/css';
import { setStyle, flexJustify, flexAlign } from '../../utils/style-helper';

export default css`
.ser-wrapper {
    ${setStyle(flexAlign)}
    flex-direction: column;
    &__imageWrapper {
        ${setStyle(flexJustify)}
        margin-bottom: 48px;
    }
    &__textmedium {
        margin-bottom: 22px;
    }
    &__descr {
        padding: 0 38px;
        margin-bottom: 28px;
    }
    .renderedTWrapper {
    ${setStyle(flexAlign)}
        .chevron {
            position: relative;
            text-align: center;
            padding: 0 8px;
            margin-bottom: 6px;
            height: 18px;
            width: 16px;
        }
        
        .chevron:before {
            content: '';
            position: absolute;
            top: 12px;
            left: 11px;
            height: 15%;
            width: 13%;
            background: blue;
            transform: skew(0deg, 30deg);
        }
        .chevron:after {
            content: '';
            position: absolute;
            top: 10px;
            right: 9px;
            height: 17%;
            width: 26%;
            background: blue;
            transform: skew(0deg, -45deg);
            }
    }
    .overWrapper {
        dislay: flex;
        flex-direction: colomn;
        max-width: max-content;
        padding-bottom: 137px;
        overflow: hidden;
    }
}
`;
