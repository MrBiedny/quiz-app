import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/img.jpg";

export const GlobalStyle = createGlobalStyle`
html{
  height: 100%
}

body{
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 4.5rem;
    font-weight: 400;
    text-align: center;
    margin: 1.25rem;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 2.5rem;
    margin: 1.5rem 0;
    padding: 0 2.5rem;
  }

  .start {
    max-width: 200px;
  }
`;
