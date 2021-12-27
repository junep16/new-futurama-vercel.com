import Link from "next/link" 
import styled from "@emotion/styled"; 

export const Navigation = () => {
  return (
    <HeadStyle>
          <TitleStyle><h1><a href="http://localhost:3000">Futurama</a></h1></TitleStyle>
          <NavWrap> 
                <NavList>
                    <a href="http://localhost:3000/info"><li>Info</li></a>
                    <a href="http://localhost:3000/character"><li>Characters</li></a>
                    <a href="http://localhost:3000/cast"><li>Casts</li></a>
                    <a href="http://localhost:3000/episode"><li>Episodes</li></a>
                    <a href="http://localhost:3000/question"> <li>Questions</li></a>
                    <a href="http://localhost:3000/inventory"><li>Inventory</li></a>  
                </NavList> 
          </NavWrap>
    </HeadStyle>
  )
}

const HeadStyle = styled.header`
display: flex; 
flex-direction: row; 
align-content: center;
background: #0C0032;  
padding: 20px; 
`

const TitleStyle = styled.h1`
font-size: 18px; 
color: #FFF;  
margin: 0; 
`

const NavWrap = styled.nav`
display: flex; 
justify-content: center;
align-items: center;
`

const NavList = styled.ul`
display: flex; 
list-style: none; 
color: #FFF; 
&>a {
    margin: 0 20px; 
}
&>a:hover {
    color: #FB6222; 
}
`