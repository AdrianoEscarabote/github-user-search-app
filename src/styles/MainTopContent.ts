import styled from "styled-components";
import { darkBlue, darkGray, nameColor } from "./color";
import iconMoon from "../assets/icon-moon.svg";

export const TopStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;

    .top-content {
      display: flex;
      justify-content: space-between;
      
      h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
        color: ${nameColor};
      }

      .changeTheme {
        background-color: white;
        background: url(${iconMoon}) no-repeat;
        width: 100%;
        max-width: 90px;
        background-position: right;
        color:#000;
      }
    }

    .form {
      background: #FEFEFE;
      box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
      border-radius: 15px;
      position: relative;
      height: 69px;
      display: flex; 
      align-items: center;
      
      fieldset {
        border: transparent;
      }


      input {
        background-color: transparent;
        border: transparent;
        width: 256px;
        height: 25px;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: ${darkBlue};
      }

      button {
        width: 100%;
        max-width: 106px; 
        height: 50px;
        background-color: ${darkGray};
        display: grid;
        place-content: center;
        position: absolute;
        right: 10px;
        top: 10px;
        border-radius: 10px;
      }
    }
  }
`