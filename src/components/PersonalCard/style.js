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
            &-photo {
                background-color: ${colors.lightGray};
                border-radius: 4px;
                margin: 25px 25px 50px 25px;
                @media (max-width: 1280px){
                    // transform: scale(0.86);
                    width: 190px;
                    height: 190px;
                }
                @media (max-width: 1150px){
                    // transform: scale(0.68);
                    // margin: 25px 25px -21px 25px;
                    width: 116px;
                    height: 116px;
                }
                @media (max-width: 890px){
                    // transform: scale(0.56);
                    // margin: 25px 25px -21px 25px;
                }
                @media (max-width: 768px){
                    // transform: scale(0.76);
                    margin: 0px 0px 25px 0px;
                }
                @media (max-width: 550px){
                    // transform: scale(0.54);
                    width: 95px;
                    height: 95px;
                    margin: 25px 0 0 0;
                }
            }
            &-square {
                background-color: ${colors.blue};
                border-radius: 4px;
                min-width: 222px;
                min-height: 222px;
                top: 27px;
                left: 34px;
                position: absolute;
                transform: rotate(-15deg);
                z-index: -1;
                @media (max-width: 1280px){
                    min-width: 190px;
                    min-height: 198px;
                    top: 22px;
                    left: 46px;
                }
                @media (max-width: 1200px){
                    top: 23px;
                    left: 37px;
                }
                @media (max-width: 1150px){
                    min-width: 116px;
                    min-height: 116px;
                    top: 28px;
                    left: 68px;
                }
                @media (max-width: 1100px){
                    top: 28px;
                    left: 60px;
                }
                @media (max-width: 1050px){
                    left: 53px;
                }
                @media (max-width: 1000px){
                    left: 48px;
                }
                @media (max-width: 928px){
                    left: 40px;
                }
                @media (max-width: 890px){
                    left: 36px;
                }
                @media (max-width: 860px){
                    left: 33px;
                }
                @media (max-width: 840px){
                    left: 29px;
                }
                @media (max-width: 800px){
                    left: 25px;
                }
                @media (max-width: 768px){
                    top: 3px;
                    left: 21px;
                }
                @media (max-width: 720px){
                    left: 14px;
                }
                @media (max-width: 690px){
                    left: 95px;
                }
                @media (max-width: 640px){
                    left: 82px;
                }
                @media (max-width: 600px){
                    left: 72px;
                }
                @media (max-width: 570px){
                    left: 66px;
                }
                @media (max-width: 550px){
                    min-width: 95px;
                    min-height: 95px;
                    top: 26px;
                    left: 84px;
                }
                @media (max-width: 520px){
                    left: 78px;
                }
                @media (max-width: 500px){
                    left: 73px;
                }
                @media (max-width: 480px){
                    left: 68px;
                }
                @media (max-width: 455px){
                    left: 63px;
                }
                @media (max-width: 435px){
                    left: 57px;
                }
                @media (max-width: 410px){
                    left: 50px;
                }
                @media (max-width: 380px){
                    left: 43px;
                }
                @media (max-width: 356px){
                    left: 37px;
                }
                @media (max-width: 338px){
                    left: 32px;
                }
            }
            &-info {
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
            &-image {
                border-radius: 4px;
                max-width: 100%;
            }
            &-role {
                font-family: 'Montserrat';
                font-size: 16px;
                line-height: 27px;
                text-align: center;
                color: #525252;
                @media (max-width: 1100px){
                    width: 155px;
                }
                @media (max-width: 600px){
                    font-size: 12px;
                }
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
`;
