/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import styled from '@emotion/styled'
import Layout from "./components/Layout"
import Container from './components/Container'
import {bpMaxSM, bpMaxXS, bpMaxMD} from './lib/breakpoints'
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

    ${bpMaxXS} {
      text-align: justify;
    }
  }
`


function App() {
    return (
        <Layout headerColor="#fff" hero={<Hero/>}>
            <Container id="about" css={css`
              margin-top: -40px;
              position: relative;
              background: white;
              border-radius: 5px;
              padding: 40px 80px 60px 80px;
              margin-bottom: 40px;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

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
                    <PostTitle>Who am I?</PostTitle>
                    <Description>
                        <Markdown>
                            {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque doloribus esse id, 
                         iure labore maiores minus nesciunt perspiciatis quisquam recusandae saepe suscipit temporibus, 
                         tenetur totam voluptate voluptates voluptatibus!`}
                        </Markdown>
                    </Description>
                </div>

                <div>
                    <PostTitle>What do I do?</PostTitle>
                    <Description>
                        <Markdown>
                            {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque doloribus esse id, 
                         iure labore maiores minus nesciunt perspiciatis quisquam recusandae saepe suscipit temporibus, 
                         tenetur totam voluptate voluptates voluptatibus!`}
                        </Markdown>
                    </Description>
                </div>
            </Container>
                <Projects/>
        </Layout>);
}

export default App;


