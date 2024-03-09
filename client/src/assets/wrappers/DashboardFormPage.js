import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-sort {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  .link-font-size {
    font-size: var(--small-text);
  }
  /* .select-style {
    z-index: -10;
    color: red;

    margin: 1rem 0; */
  /* line-height: 1.5;
    font-size: var(--small-text);
    color: var(--grey-900);
    width: 100%;
    border-radius: var(--border-radius); */
  /* background: red;
    border: 1px solid var(--grey-300);
  } */
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .form-sort {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
