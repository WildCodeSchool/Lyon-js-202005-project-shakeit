import styled from "styled-components";

const Search = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  flex-direction: column;
  hr {
    width: 100%;
    margin-top: 20px;
  }

  button {
    margin-top: 10px;
    margin-right: 2px;
  }

  .button-secondary {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: #009ce7;
  }

  .searchBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    color:black;
    background-color:grey;
  }

  .searchTags {
    display: flex;
    justify-content: flex-start;
    align-self: center;
    margin-left: -30px;
  }

  .search {
    &__title {
      font-size: 22px;
      font-weight: 900;
    }

    &__input {
      padding: 12px 24px;
      margin-right: 15px;
      /* background-color: transparent; */
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;
      color: #575756;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid black;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(black a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid black;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }
`;

export default Search;
