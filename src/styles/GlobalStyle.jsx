import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SEBANG_Gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SEBANG_Gothic_Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: small;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyLotteBold';
    src:url('/fonts/MyLotteBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyLotteLight';
    src:url('/fonts/MyLotteLight.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyLotteMedium';
    src:url('/fonts/MyLotteMedium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MyLotteRegular';
    src:url('/fonts/MyLotteRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'SEBANG_Gothic', 'Do Hyeon', sans-serif;
    text-decoration: none;
    font-size: 0.625rem;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  body {
    background: url('./images/backgrounds/pattern-7271947.png') no-repeat fixed 50% 50%;
    background-size: cover;
    background-repeat: repeat;
    height: 100%;
    overflow-x: hidden;
    animation: moveBackground 36.5s linear infinite;
    color: white;
    font-family: 'MyLotteMedium';
  }

  @keyframes moveBackground {
    0% {
      background-position: 0% 0%;
    }

    50% {
      background-position: 100% 100%;
    }

    100% {
      background-position: 0% 0%;
    }
  }

  a {
    color: gray;
  }

  a:hover, a:visited, a:link, a:active {
      text-decoration: none;
  }
  a:hover{
      color: #a00;
  }

  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export default GlobalStyle;
