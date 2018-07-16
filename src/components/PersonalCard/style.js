import css from 'styled-jsx/css';
import { colors, setStyle, flexJustify } from '../../utils/style-helper';

export default css`
.personal {
    ${setStyle(flexJustify)}
    flex-basis: 22%;
    width: 100%;
    
    .personal__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
        &-photo {
            margin: 25px 25px 50px 25px;
            background-color: ${colors.lightGray};
        }
        &-square {
            background-color: ${colors.blue};
            width: 222px;
            height: 222px;
            transform: rotate(-15deg);
            position: absolute;
            z-index: -1;
            top: 25px;
            left: 26px;
        }
        &-info {
            font-family: Montserrat;
            font-size: 16px;
            line-height: 27px;
            text-align: center;
            padding-bottom: 8px;
        }
        &-role {
            font-family: Montserrat;
            font-size: 16px;
            line-height: 27px;
            text-align: center;
        }
    }
}

`;
