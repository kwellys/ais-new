import css from 'styled-jsx/css';
import { colors, setStyle, fontFamily } from 'utils/style-helper';

export const InputStyle = css`
    .input-file {
        margin-top: -15px;
        &__field {
          display: none;
        }
    }
`;

export const ViewStyle = css`
    .file-view {
        ${setStyle(fontFamily)}
        background-color: ${colors.whiteBlue}; 
        border-radius: 4px;
        display: inline-block;
        font-size: 12px;
        padding: 5px 10px;
        &.invisible {
            opacity: 0;
            viability: hidden;
        }
        &__remove {
            cursor: pointer;
            margin-left: 5px;
            &-image {
                height: 12px;
                vertical-align: bottom;
                width: 12px;
            }
        }
    }
`;
