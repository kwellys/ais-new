import css from 'styled-jsx/css';
import { colors, setStyle, flexJustify } from 'utils/style-helper';

export default css`
    .personal {
        ${setStyle(flexJustify)}
        box-sizing: border-box;
        flex-basis: 25%;
        padding: 15px;
        width: 100%;
        &__container {
            align-items: center;
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
        }
        &__photo {
            background-color: ${colors.lightGray};
            border-radius: 4px;
            margin: 25px 25px 50px 25px;
            position: relative;
            &:before {
                display: block;
                content: ' ';
                width: 100%;
                height: 100%;
                background-color: ${colors.blue};
                transform: rotate(-15deg);
                z-index: -1;
                position: absolute;
            }
            @media (max-width: 1280px){
                width: 190px;
                height: 190px;
            }
            @media (max-width: 1150px){
                width: 116px;
                height: 116px;
            }
            @media (max-width: 768px){
                margin: 0px 0px 25px 0px;
            }
            @media (max-width: 550px){
                width: 95px;
                height: 95px;
                margin: 25px 0 0 0;
            }
        }
        &__info {
            font-family: 'Montserrat';
            font-size: 16px;
            line-height: 27px;
            padding-bottom: 8px;
            text-align: center;
            color: #525252;
            @media (max-width: 1024px){
                padding-top: 20px;
            }
            @media (max-width: 768px){
                padding-top: 20px;
            }
            @media (max-width: 600px){
                font-size: 12px;
                padding-bottom: 0;
            }
            @media (max-width: 390px){
                font-size: 12px;
                padding-top: 20px;
            }
        }
        &__image {
            border-radius: 4px;
            max-width: 100%;
        }
        &__role {
            font-family: 'Montserrat';
            font-size: 16px;
            line-height: 27px;
            text-align: center;
            color: #525252;
            @media (max-width: 1100px){
                width: 155px;
            &-image {
                border-radius: 4px;
                max-width: 100%;
                display: block;
            }
            @media (max-width: 600px){
                font-size: 12px;
            }
        }
    }
    @media (max-width: 1280px) {
        .personal {
            flex-basis: 25%;
            width: 25%;
        }
    }
    @media (max-width: 1100px) {
        .personal {
            flex-basis: 25%;
            width: 25%;
        }
    }
    @media (max-width: 690px) {
        .personal {
            flex-basis: 50%;
            width: 50%;
        }
    }
    @media (max-width: 550px) {
        .personal {
            padding: 0;
        }
    }
}
`;