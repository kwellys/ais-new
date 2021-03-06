import css from 'styled-jsx/css';
import { colors, fontFamily, setStyle } from 'utils/style-helper';

export const ErrorStyle = css`
    .input-error {
        background-color: ${colors.red};
        border-radius: 0 0 4px 4px;
        color: ${colors.white};
        left: 50%;
        min-width: 240px;
        padding: 5px;
        position: absolute;
        text-align: center;
        top: 100%;
        transform: translate(-50%, 0);
        @media (max-width: 800px){
            font-size: 12px;
        }
    }
`;

export const FieldStyle = css`
    .input-field {
        ${setStyle(fontFamily)}
        margin-bottom: 30px;
        @media (max-width: 800px){
            margin-bottom: 17px;
        }
        &__label {
            color: ${colors.white};
            display: block;
            line-height: 24px;
            margin-bottom: 5px;
            @media (max-width: 800px){
                font-size: 12px;
            }
        }
    }
`;

export const ViewStyle = css`
    .input-view {
        position: relative;
        &__field {
            /* Remove First */
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            border: 2px solid ${colors.white};
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
            padding: 15px;
            width: 100%;
            ${setStyle(fontFamily)}
            color: ${colors.textColor};
            @media (max-width: 800px){
                padding: 10px;
                font-size: 12px;
            }
            &:focus {
                outline: none;
            }
            &-invalid {
                color: ${colors.red};
                border-color: ${colors.red};
            }
        }
        &__textarea {
            resize: none;
        }
    }
    input:-webkit-autofill {
        -webkit-text-fill-color: ${colors.textColor} !important;
    }
`;

export const UploadStyle = css`
    .label-upload {
        bottom: 15px;  
        position: absolute;
        right: 15px;
        &__button {
            cursor: pointer;
            display: block;
        }
    }
`;
