import styled from "styled-components";
import { darkGray, white } from "./color";

export const TopStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    margin-bottom: 1.5625rem;

    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      a {
        font-weight: 700;
        font-size: 1.625rem;
        line-height: 2.4375rem;
        color: ${({ theme }) => theme.logoColor};
        text-decoration: none;
      }

      .changeTheme {
        background-color: white;
        background: url(${({ theme }) => theme.imgIconChangeTheme}) no-repeat;
        width: 100%;
        max-width: 5.625rem;
        background-position: right;
        &:focus {
          outline: 0.1563rem dotted ${({ theme }) => theme.outline};
        }
      }
    }

    .form {
      background-color: ${({ theme }) => theme.backgroundMain}; 
      box-shadow: ${({ theme }) => theme.boxShadowTop};
      border-radius: 0.9375rem;
      position: relative;
      height: 4.5rem;
      display: flex; 
      width: 100%;
      align-items: center;
      
      fieldset {
        border: transparent;
        display: flex;
        align-items: center;
        padding: 1rem 0rem 0.625rem 1.75rem;
        gap: 1.25rem;

        label {
          cursor: pointer;
        }

        input {
          background-color: transparent !Important;
          border: transparent;
          width: 28.5rem;
          height: 1.5625rem;
          font-weight: 400;
          font-size: 1.125rem;
          line-height: 1.5625rem;
          color: ${({theme}) => theme.text}; 
          outline: transparent;
          cursor: pointer;
          &::-webkit-input-placeholder {
            color: ${({theme}) => theme.text}; 
          }
        }
      }

      button {
        width: 100%;
        max-width: 6.625rem; 
        height: 3.125rem;
        background-color: ${darkGray};
        display: grid;
        place-content: center;
        position: absolute;
        right: 0.625rem;
        top: 0.625rem;
        color: ${white};
        border-radius: 0.625rem;
        &:hover,
        &:focus {
          background-color: ${({ theme }) => theme.buttonHover};
          outline: 0.1563rem dotted ${({ theme }) => theme.outline};
        }
      }
    }
  }

  #err {
    position: absolute;
    right: 8.125rem;
    color: red;
    display: none;
  }

  .active {
    display: flex !Important;
  }

  @media (max-width: 30rem) {
    #err {
      top: -1.875rem; 
      right: 0.5rem;
    }
  }

  @media (max-width: 46.875rem) {
    form {
      fieldset {
        gap: 0.625rem !Important;
        padding: 1rem 0rem 0.625rem 1.25rem !Important;

        input {
          width: 100% !Important;
          max-width: 9.375rem;
        }
      }
    }
  }
`