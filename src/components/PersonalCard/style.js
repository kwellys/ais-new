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
                    transform: scale(0.86);
                }
                @media (max-width: 1100px){
                    transform: scale(0.60);
                    margin: 25px 25px -21px 25px;
                }
                @media (max-width: 890px){
                    transform: scale(0.56);
                    margin: 25px 25px -21px 25px;
                }
                @media (max-width: 768px){
                    transform: scale(0.76);
                    margin: 0px 0px -21px 0px;
                }
                @media (max-width: 550px){
                    transform: scale(0.54);
                    margin: 0 0 -41px 0;
                }
            }
            &-square {
                background-color: ${colors.blue};
                border-radius: 4px;
                width: 222px;
                height: 222px;
                top: 27px;
                left: 34px;
                position: absolute;
                transform: rotate(-15deg);
                z-index: -1;
                @media (max-width: 1280px){
                    width: 190px;
                    height: 190px;
                    top: 44px;
                    left: 40px;
                }
                @media (max-width: 1100px){
                    width: 114px;
                    height: 117px;
                    top: 66px;
                    left: 64px;
                }
                @media (max-width: 1024px){
                    width: 108px;
                    height: 108px;
                    top: 62px;
                    left: 58px;
                }
                @media (max-width: 768px){
                    width: 116px;
                    height: 117px;
                    top: 23px;
                    left: 21px;
                }
                @media (max-width: 638px){
                    width: 168px;
                    height: 170px;
                    top: 28px;
                    left: 55px;
                }
                @media (max-width: 550px){
                    width: 119px;
                    height: 122px;
                    top: 52px;
                    left: 73px;
                }
                @media (max-width: 490px){
                    left: 60px;
                }
                @media (max-width: 436px){
                    top: 50px;
                    left: 44px;
                }
                @media (max-width: 414px){
                    width: 111px;
                    height: 112px;
                    top: 50px;
                    left: 47px;
                }
                @media (max-width: 400px){
                    width: 103px;
                    height: 104px;
                    top: 50px;
                    left: 44px;
                }
                @media (max-width: 375px){
                    width: 95px;
                    height: 95px;
                    top: 49px;
                    left: 46px;
                }
                @media (max-width: 348px){
                    width: 95px;
                    height: 95px;
                    top: 44px;
                    left: 42px;
                }
                @media (max-width: 333px){
                    width: 85px;
                    height: 85px;
                    top: 40px;
                    left: 38px;
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
                }
                @media (max-width: 390px){
                    font-size: 12px;
                    padding-bottom: 0;
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
