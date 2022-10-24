
import styled, { createGlobalStyle } from 'styled-components';
// import Background from "../src/images/bg16.jpg";


export const AllStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color: #171717;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 30%;
    top: 20%;
    // border: 2px solid orange;
  }
  * {
    box-sizing: border-box; 
  }
`;

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
    color: white;
    font-weight: 600;
    font-size: 60px;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    
    display: inline-block;
    margin-top: 30px;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    color: #000021;
    background: #1de9b6;
    line-height: 1.15;
    font-size: 16px;
  }

  .start {
    max-width: 200px;
  }
`;