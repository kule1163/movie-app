import styled from "styled-components"

export const ContentContainer = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  width: calc(100% - 100px);
 margin-left: auto;
 @media (max-width: 1000px) {
      width: 100vw;
    };
`
export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
`