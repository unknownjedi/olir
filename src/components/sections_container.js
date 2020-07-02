import React from "react"
import styled from "@emotion/styled"

const StyledContainer = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`

const SectionsContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default SectionsContainer
