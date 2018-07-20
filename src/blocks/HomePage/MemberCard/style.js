import css from 'styled-jsx/css';
import { setStyle, flexJustify } from 'utils/style-helper';

export default css`
    .members {
        ${setStyle(flexJustify)}
        padding-bottom: 150px;
        width: 100%;
        @media (max-width: 1200px){
            padding-bottom: 85px;
        }
        &__wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: -15px;
          max-width: 1300px;
          width: 100%;
        }
    }
`;
