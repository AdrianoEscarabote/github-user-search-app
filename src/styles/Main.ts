import styled from "styled-components";
import { blue, darkBlue, gray, lightGray, profileNameColor, white } from "./color";

export const MainStyled = styled.main`
  background-color: ${white}; 
  height: 419px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  
  .details {
    display: grid;
    grid-template-columns: 127px 490px;
    place-content: center;
    gap: 10px;
    padding: 48px;

    .image-profile img {
      border-radius: 50%;
      margin-top: -4px;
    }

    .container {
      padding: 10px;
      .infos {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
        .info {
          display: flex;
          flex-direction: column;
          h2 {
            font-weight: 700;
            font-size: 26px;
            line-height: 39px;
            color: ${profileNameColor};
          }
          .user {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: ${blue};
          }
        }
        .joined {
          font-weight: 400;
          font-size: 15px;
          line-height: 22px;
          color: ${gray}; 
        }
      }
  
      .description {
        width: 100%;
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        color: ${darkBlue}; 
        padding-bottom: 20px;
      }
  
      .statistic {
        background: ${lightGray};
        width: 100%;
        height: 85px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        p {
          display: flex;
          flex-direction: column;
          font-weight: 400;
          font-size: 13px;
          line-height: 19px;
          color: ${darkBlue};
  
          span {
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            color: ${profileNameColor};
          }
        }
      }

      .about {
        display: grid;
        grid-template-columns: 50% 50%;
        flex-wrap: wrap;
        margin-top: 37px;
        gap: 30px 37px;
        div {
          display: flex;
          align-items: center;
          gap: 20px;
          p {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            color: ${darkBlue};
          }
          a {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            text-decoration-line: underline;
            color: ${darkBlue};
          }
        }
      }
    }
  }
`