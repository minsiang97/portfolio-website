"use client";
import { styled } from "styled-components";

const NavbarStyled = styled.div`
  .nav-name {
    background: linear-gradient(#80ffdb, #64dfdf, #48bfe3, #5390d9, #5e60ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .link::after {
    animation: slideIn 1s ease-in forwards;
  }

  @keyframes slideIn {
    0% {
      width: 0px;
    }
    100% {
      width: 100%;
    }
  }
`;

export default NavbarStyled;
