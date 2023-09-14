import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderMain>
      <span>MZ-AR-AR</span>
    </HeaderMain>
  );
};

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 60px;
  width: 100vw;
  background-color: white;

  span {
    color: #ff6262;
    font-size: 25px;
    font-family: "MyLotteBold";
  }
`;

export default Header;
