/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import styled from '@emotion/styled'
import Layout from "./components/Layout"
import Container from './components/Container'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {bpMaxSM, bpMaxXS} from './lib/breakpoints'
import theme from "./config/theme";
import Markdown from "react-markdown"
import Projects from "./components/Projects";
import Hero from "./components/Hero";

const PostTitle = styled.h3`
  margin-bottom: 30px;
  transition: ${theme.transition.ease};
  font-size: 22px;
  font-family: sans-serif;

  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.div`
  width: 100%;

  p {
    margin-bottom: 4px;
    font-size: 18px;

    ${bpMaxXS} {
      text-align: justify;
    }
  }
`

const codeString = `
    if(like) {
        getInTouch()
    }
`



function App() {
    return (
        <Layout headerColor="#fff" hero={<Hero/>}>
            <Container id="about" css={css`
              margin-top: -30px;
              position: relative;
              background: white;
              border-radius: 5px;
              padding: 40px 80px 60px 80px;
              margin-bottom: 140px;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
              z-index: 10;

              ${bpMaxSM} {
                padding: 40px;
                border-radius: 0;
              }

              h2 {
                text-align: center;
              }
            `}>

                <h2>ABOUT ME</h2>

                <div
                    css={css`
                      margin-bottom: 40px;
                    `}
                >
                    <PostTitle></PostTitle>

                    <Description>
                        <Markdown>
                            {`Hiyo, I'm Giga, a self-taught programmer from the Land of Kartvelians living in the UK.
                             I started my tech journey back in 2021 by logging **Hello World** to the console. 
                             Before writing any computer code I used to read and write Legal Code for several years. 
                             Now, my world revolves around *JavaScript* universe.
                             `}
                        </Markdown>
                        <br/>
                        <Markdown>
                            {`Below you can find some projects I've developed that showcase my skills and general background in developing software.                
                            `}
                        </Markdown>
                        <br/>
                        <SyntaxHighlighter language="javascript" >
                            {codeString}
                        </SyntaxHighlighter>
                    </Description>
                </div>

            </Container>
            <Projects/>
        </Layout>);
}

export default App;


