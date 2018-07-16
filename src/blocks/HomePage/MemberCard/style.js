import css from 'styled-jsx/css';
import { setStyle, flexJustify } from '../../../utils/style-helper';

export default css`
.members {
    ${setStyle(flexJustify)}
    width: 100%;
    padding-bottom: 70px;
}
`;
