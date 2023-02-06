import styled from "styled-components";
import { darkGray, white } from "./color";
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
        color: ${({ theme }) => theme.logoColor};
      }

      .changeTheme {
        background-color: white;
        background: url(${({ theme }) => theme.imgIconChangeTheme}) no-repeat;
        width: 100%;
        max-width: 90px;
        background-position: right;
        &:focus {
          outline: 2.5px dotted ${({ theme }) => theme.outline};
        }
      }
    }

    .form {
      background-color: ${({ theme }) => theme.backgroundMain}; 
      box-shadow: ${({ theme }) => theme.boxShadowTop};
      border-radius: 15px;
      position: relative;
      height: 69px;
      display: flex; 
      width: 100%;
      align-items: center;
      
      fieldset {
        border: transparent;
        display: flex;
        align-items: center;
        padding: 16px 0px 10px 28px;
        gap: 20px;

        label {
          cursor: pointer;
        }

        input {
          background-color: transparent;
          border: transparent;
          width: 456px;
          height: 25px;
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          color: ${({theme}) => theme.text}; 
          outline: transparent;
          cursor: pointer;
        }
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
        color: ${white};
        border-radius: 10px;
        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.buttonHover};
          outline: 2.5px dotted ${({ theme }) => theme.outline};
        }
      }
    }
  }

  @media (max-width: 750px) {
    form {
      fieldset {
        gap: 10px !Important;
        padding: 16px 0px 10px 20px !Important;

        input {
          width: 100% !Important;
          max-width: 150px;
        }
      }
    }
  }
`