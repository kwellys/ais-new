import css from 'styled-jsx/css';

export default css`
  .home-cards {
    display: flex;
    justify-content: center;
    padding-bottom: 119px;
    @media (max-width: 1200px){
      padding-bottom: 57px;
    }
    &__content {
      display: flex;
      justify-content: center;
      max-width: 1080px;
      padding: 30px;
      width: 100%;
      @media (max-width: 1150px) {
        max-width: 710px;
      }
      @media (max-width: 800px) {
        max-width: 600px;
      }
      @media (max-width: 680px){
        max-width: 300px;
      }
      @media (max-width: 375px){
        max-width: 280px;
      }
      @media (max-width: 359px){
        max-width: 260px;
      }
      @media (max-width: 340px){
        max-width: 100%;
        box-sizing: border-box;

      }
      @media (max-width: 335px){
        // max-width: 200px;
        // box-sizing: border-box;
      }
    }
    &__wrapper {
      margin-top: -170px;
    }
  }
  .swiper-slide {
    width: auto;
    @media (max-width: 680px) {
      display: flex;
      justify-content: center;
    }
  }
`;
