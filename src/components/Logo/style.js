import css from 'styled-jsx/css';

export default css`
.image__logo {
    cursor: pointer;
    margin-bottom: 0;
    width: 174px;
    height: 30px;
    padding: 0 0 10px 20px;
    margin-left: 30px;
    @media (max-width: 1024px){
        width: 85px;
        height: 28px;
        padding: 0 0 2px 20px;
    }
    @media (max-width: 700px){
        padding: 0;
        margin-left: 20px;
        width: 112px;
        height: 16px;
    }
}

`;
