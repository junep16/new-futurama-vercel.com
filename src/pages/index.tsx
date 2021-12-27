import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from "@emotion/styled"; 
import styles from '../styles/Home.module.css'; 
  

const Home: NextPage = () => {
  return (
  <div className={styles.container}>
      <Head>
        <title>Next Js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyle> 
            <ImgStyle>
              <a href="https://new-futurama-vercel-com-mbcedkdct-junep16.vercel.app/info">
                <img src="images/futurama_logo.png"  alt="futurama logo" width={500} />
              </a>
            </ImgStyle>  
      </MainStyle>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

const MainStyle = styled.main`
background: #0C0032;
height: 100vh; 
margin: 0; 
`
 

const ImgStyle = styled.div`
width: 300px; 
margin: 0 auto;
display: flex; 
flex-direction: row; 
justify-content: center; 
align-item: center;
cursor: pointer;  

&:hover {
  transform: translateY(10px); 
  transition: 1s ease all; 
}
`

