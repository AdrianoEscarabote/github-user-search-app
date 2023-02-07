import styled from "styled-components";
import { blue } from "./color";

export const MainStyled = styled.div`
  background-color: ${({ theme }) => theme.backgroundMain}; 
  height: 26.1875rem;
  box-shadow: ${({ theme }) => theme.boxShadowMain};
  border-radius: 0.9375rem;
  
  .details {
    display: grid;
    grid-template-columns: 7.9375rem 30.625rem;
    place-content: center;
    gap: 0.875rem;
    padding: 3rem;

    .image-profile {
      display: grid;
      grid-column: 1;
      .img {
        border-radius: 50%;
        margin: -0.25rem 0.625rem 0rem -0.25rem;
        width: 7.3125rem;
      }
    }

    .infos {
      display: grod;
      position: relative;
      width: 100%;
      padding-bottom: 1.25rem;
      .info {
        display: flex;
        flex-direction: column;
        h2 {
          font-weight: 700;
          font-size: 1.625rem;
          line-height: 2.4375rem;
          color: ${({ theme }) => theme.nameColor};
        }
        .user {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5rem;
          color: ${blue};
        }
      }
      .joined {
        position: absolute;
        right: 0rem;
        top: 0.625rem; 
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.375rem;
        color: ${({theme}) => theme.joinedColor}; 
      }
    }

    .container {
      padding: 0rem 0rem 0.625rem 0.625rem;
      margin-top: -0.5rem;
      grid-column: 2;
      
      .description {
        width: 100%;
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        padding-bottom: 1.25rem;
      }
  
      .statistic {
        background: ${({ theme }) => theme.statistic};
        width: 100%;
        height: 5.3125rem;
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20%;
        margin-top: 0.75rem;

        .repos {
          padding-left: 2.125rem;
        }

        p {
          display: flex;
          flex-direction: column;
          font-weight: 400;
          font-size: 0.8125rem;
          line-height: 1.1875rem;
  
          span {
            font-weight: 700;
            font-size: 1.375rem;
            line-height: 2.0625rem;
            color: ${({ theme }) => theme.nameColor};
          }
        }
      }

      .about {
        display: grid;
        grid-template-columns: 50% 50%;
        flex-wrap: wrap;
        margin-top: 2.3125rem;
        gap: 1.25rem 2.3125rem;
        div {
          display: flex;
          align-items: center;
          gap: 1.25rem;

          img {
            filter: ${({ theme }) => theme.filterIcons};
          }

          p {
            font-weight: 400;
            font-size: 0.9375rem;
            line-height: 1.375rem;
          }
          a {
            font-weight: 400;
            font-size: 0.9375rem;
            line-height: 1.375rem;
            text-decoration-line: none;
            color: unset;
            &:hover,
            &:focus {
              text-decoration: underline;
              background-color: ${({ theme }) => theme.buttonHover};
              outline: 0.1563rem dotted ${({ theme }) => theme.outline};
            }
          }
        }
      }
    }
  }

  @media (max-width: 46.875rem) {
    height: auto;

    .details {
      grid-template-columns: 100%;
      place-content: center;
      padding: 1.75rem;


      .image-profile {
        position: absolute;
        width: 4.375rem;
        height: 4.375rem;
        margin: 0.625rem 0rem 0rem 0.625rem;
      }

      .container1 {
        display: flex;
        gap: 1.25rem;
      }
      .infos {
        position: relative;
        left: 6.25rem;
        width: 11.25rem;
        flex-direction: column;
        align-items: flex-start;

        h2 {
          word-break: normal;
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .joined {
          position: initial;
        }
      }
    }

    .container {
      position: relative;
      overflow: hidden;
      padding: 0rem !Important;
      .description {
        margin-top: 1.875rem;
      }
      grid-column: 1 !important;
      .statistic {
        margin: 0rem !Important;
        justify-content: center !Important;
        gap: 8% !Important;
      }
      .about {
        display: flex !Important;
        flex-wrap: wrap:
      }
    }
  }

  @media (max-width: 26.25rem) {
    .details {
      padding: 0.75rem;
    }
  }
`