/** @jsx jsx */
import React from "react"
import { jsx } from 'theme-ui'

const Burger = () => {
  <StyledBurger>
    <div>

    </div>
  </StyledBurger>
}

const StyledBurger = jsx.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default Burger
