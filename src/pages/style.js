import css from 'styled-jsx/css';
import BG from '../assets/img/bg.svg';
import { colors, fontFamily, setStyle, flexJustify, flexAlign } from '../utils/style-helper';

export default css`
.not-found {
    height: 100vh;
    width: 100%;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    &__header {
        padding-top: 49px;
        @media screen and(max-width: 700px){
            padding-top: 0;
        }
    }
    &__code {
        position: absolute;
        top: 24%;
        left: 48%;
        transition: all 0.3s;
        @media screen and(max-width: 1280px){
            left: 46%;
        }
        @media screen and(max-width: 1200px){
            top: 21%;
            left: 43%;
        }
        @media screen and(max-width: 500px){
            top: 21%;
        }
        @media screen and(max-width: 470px){
            top: 19%;
        }
        @media screen and(max-width: 440px){
            top: 26%;
        }
        @media screen and(max-width: 375px){
            top: 25%;
            left: 36%;
        }
        &-error {
            @media screen and(max-width: 1140px){
                width: 94%;
            }
            @media screen and(max-width: 375px){
                width: 92%;
            }
            @media screen and(max-width: 1024px){
            }
        }
    }
    &__text {
        position: absolute;
        top: 45%;
        left: 50%;
        max-width: max-content;
        ${setStyle(flexAlign)}
        flex-direction: column;
        @media screen and(max-width: 1280px){
            left: 47%;
        }
        @media screen and(max-width: 1200px){
            top: 41%;
            left: 45%;
        }
        @media screen and(max-width: 1140px){
            top: 38%;
            left: 42%;
        }
        @media screen and(max-width: 1024px){
            top: 37%;
            left: 42%;
        }
        @media screen and(max-width: 768px){
            left: 36%;
        }
        @media screen and(max-width: 600px){
            left: 8%;
        }
        @media screen and(max-width: 540px){
            top: 33%;
            left: 5%;
        }
        @media screen and(max-width: 440px){
            top: 37%;
            left: 0;
        }
        @media screen and(max-width: 375px){
            top: 33%;
        }
        @media screen and(max-width: 320px){
            top: 36%;
            left: 2%;
        }
        &-title {
            padding: 68px 0 80px 0;
            max-width: max-content;
            text-align: center;
            .inscription {
                color: ${colors.white};
                font-size: 30px;
                text-transform: uppercase;
                font-family: Montserrat;
                font-weight: bold;
                line-height: 30px;
                @media screen and(max-width: 990px) {
                    font-size: 27px;
                }
                @media screen and(max-width: 768px) {
                    font-size: 25px;
                }
                @media screen and(max-width: 320px) {
                    font-size: 25px;
                }
            }
            @media screen and(max-width: 414px) {
                padding: 68px 0 46px 0;
            }
        }
        &-button {
            display: flex;
            justify-content: center;
        }
    }
    
    &__astro {
        position: absolute;
        top: 0;
        left: 10%;
        transition: all 0.3s;
        @media screen and(max-width: 1280px) {
            left: 5%;
        }
        &-img {
            @media screen and(max-width: 1140px){
                width: 90%;
            }
            @media screen and(max-width: 996px){
                width: 85%;
            }
            @media screen and(max-width: 875px){
                width: 75%;
            }
            @media screen and(max-width: 768px){
                width: 70%;
            }
            @media screen and(max-width: 700px){
                width: 68%;
            }
            @media screen and(max-width: 600px){
                width: 60%;
            }
            @media screen and(max-width: 440px){
                width: 47%;
            }
        }
        @media screen and(max-width: 1200px){
            top: -5%;
            left: 2%;
        }
        @media screen and(max-width: 996px){
            left: 1%;
        }
        @media screen and(max-width: 440px){
            top: 2%;
            left: 4%;
        }
    }
}
`;