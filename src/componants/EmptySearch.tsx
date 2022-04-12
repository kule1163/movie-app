import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  width: calc(100% - 100px);
 margin-left: auto;
 @media (max-width: 1000px) {
      width: 100vw;
    };
`
const EmptySearch = () => {

  return (
    <div style={{ display: "flex" }}>
      <ContentContainer >


      </ContentContainer>
    </div>


  )
}

export default EmptySearch