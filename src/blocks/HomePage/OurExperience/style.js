import css from 'styled-jsx/css';

export default css`
  .our-experience {
    &__wrapper {
      padding-bottom: 150px;
      @media (max-width: 1024px){
        padding-bottom: 87px;
      }
      @media (max-width: 768px){
        padding-bottom: 82px;
      }
      &-divided {
        margin-bottom: 133px;
        @media (max-width: 1200px) {
          margin-bottom: 89px;
        }
        @media (max-width: 900px) {
          margin-bottom: 85px;
        }
      }
      &-homepage {
        padding-bottom: 0;
      }
    }
  }
`;
