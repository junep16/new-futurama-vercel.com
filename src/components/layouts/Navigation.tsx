import Link from "next/link"  
import styled from "@emotion/styled"; 

export const Navigation = () => {
  return (
    <HeadStyle>
          <TitleStyle>
            <Link href= "/">
              Futurama
            </Link>
          </TitleStyle>
          <NavWrap> 
                <NavList>
                    <Link href ="/info">
                      Info
                    </Link>
                    <Link href ="/character">
                      Characters
                    </Link>
                    <Link href ="/cast">
                      Casts
                    </Link>
                    <Link href ="/episode">
                      Episodes
                    </Link>
                    <Link href ="/question"> 
                      Questions
                    </Link>
                    <Link href ="/inventory">
                      Inventory
                    </Link>  
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

const NavList = styled.li`
display: flex;  
color: #FFF; 
&>a {
    margin: 0 20px; 
}
&>a:hover {
    color: #FB6222; 
}
`