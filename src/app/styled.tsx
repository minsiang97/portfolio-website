"use client";
import { styled } from "styled-components";

const HomeStyled = styled.div`
  background-image: url("home_background.jpeg");
  background-size: cover;
  min-height: 100vh;
  width: 100vw;

  .typewriter {
    color: #fff;
  }

  .name {
    background: linear-gradient(#80ffdb, #64dfdf, #48bfe3, #5390d9, #5e60ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default HomeStyled;
