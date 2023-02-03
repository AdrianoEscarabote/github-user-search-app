import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: red;
  
  .container {
    .top-content {
      display: flex;
      justify-content: space-between;
      h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
      }

      button {
        background-color: white;
        color:#000;
      }
    }
  }
`