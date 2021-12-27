import styled from "@emotion/styled"
import React from "react"
import { Navigation } from "."

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>
        { children }
      </Container>
    </div>
  )
}

const Container = styled.main`
  width: 100%; 
  height: 50%; 
  margin: auto;
  background: #0C0032; 
  color: #FFF;
`