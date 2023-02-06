import styled from "styled-components";
import { blue } from "./color";

export const MainStyled = styled.div`
  background-color: ${({ theme }) => theme.backgroundMain}; 
  height: 419px;
  box-shadow: ${({ theme }) => theme.boxShadowMain};
  border-radius: 15px;
  
  .details {
    display: grid;
    grid-template-columns: 127px 490px;
    place-content: center;
    gap: 10px;
    padding: 48px;

    .image-profile {
      display: grid;
      grid-column: 1;
      .img {
        border-radius: 50%;
        margin: -4px 10px 0px 0px;
        width: 117px;
      }
    }

    .infos {
      display: grod;
      position: relative;
      width: 100%;
      padding-bottom: 20px;
      .info {
        display: flex;
        flex-direction: column;
        h2 {
          font-weight: 700;
          font-size: 26px;
          line-height: 39px;
          color: ${({ theme }) => theme.nameColor};
        }
        .user {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: ${blue};
        }
      }
      .joined {
        position: absolute;
        right: 0px;
        top: 10px; 
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: ${({theme}) => theme.joinedColor}; 
      }
    }

    .container {
      padding: 0px 0px 10px 10px;
      margin-top: -8px;
      grid-column: 2;
      
      .description {
        width: 100%;
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        padding-bottom: 20px;
      }
  
      .statistic {
        background: ${({ theme }) => theme.statistic};
        width: 100%;
        height: 85px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20%;
        /* margin-left: 34px;
        margin-top: 14px; */
        p {
          display: flex;
          flex-direction: column;
          font-weight: 400;
          font-size: 13px;
          line-height: 19px;
  
          span {
            font-weight: 700;
            font-size: 22px;
            line-height: 33px;
            color:  ${({ theme }) => theme.nameColor};
          }
        }
      }

      .about {
        display: grid;
        grid-template-columns: 50% 50%;
        flex-wrap: wrap;
        margin-top: 37px;
        gap: 20px 37px;
        div {
          display: flex;
          align-items: center;
          gap: 20px;

          img {
            filter: ${({ theme }) => theme.filterIcons};
          }

          p {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
          }
          a {
            font-weight: 400;
            font-size: 15px;
            line-height: 22px;
            text-decoration-line: none;
            color: unset;
            &:hover,
            &:focus {
              text-decoration: underline;
              background-color: ${({ theme }) => theme.buttonHover};
              outline: 2.5px dotted ${({ theme }) => theme.outline};
            }
          }
        }
      }
    }
  }

  @media (max-width: 750px) {
    height: auto;

    .details {
      grid-template-columns: 100%;
      place-content: center;
      padding: 28px;


      .image-profile {
        position: absolute;
        width: 70px;
        height: 70px;
        margin: 10px 0px 0px 10px;
      }

      .container1 {
        display: flex;
        gap: 20px;
      }
      .infos {
        position: relative;
        left: 100px;
        width: 180px;
        flex-direction: column;
        align-items: flex-start;

        h2 {
          word-break: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
        }
        .joined {
          position: initial;
        }
      }
    }

    .container {
      position: relative;
      overflow: hidden;
      padding: 0px !Important;
      .description {
        margin-top: 30px;
      }
      grid-column: 1 !important;
      .statistic {
        margin: 0px !Important;
        justify-content: center !Important;
        gap: 8% !Important;
      }
      .about {
        display: flex !Important;
        flex-wrap: wrap:
      }
    }
  }

  @media (max-width: 420px) {
    .details {
      padding: 12px;
    }
  }
`