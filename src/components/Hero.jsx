/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import theme from "../config/theme";
import {bpMaxMD, bpMaxSM} from '../lib/breakpoints'
import {fonts} from '../lib/typography'
import Container from "./Container";

import heroPathLeft from "../icons/left-path.svg"
import heroPathRight from "../icons/right-path.svg"
import particlesOptions from '../config/particles.config.json'
import Particles from 'react-tsparticles'
import styled from "@emotion/styled";

const Button = styled.a({
    cursor: 'pointer',
    marginTop: "12px",
    padding: '6px 12px',
    color: 'white',
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: "Raleway, sans-serif",
    boxShadow: "inset 0 0 0 0 white",
    webkitTransition: "ease-out 0.4s",
    mozTransition: "ease-out 0.4s",
    transition: "ease-out 0.7s",
    ':hover': {
        boxShadow: "inset 0 100px 0 0 white",
        color: "black",
    },
})

function Hero({
                  children,
                  title = `Giga Mania`,
                  subTitle = `Full-stack Developer`,
                  headerColor,
                  ...props
              }) {
    return (
        <section
            css={css`
              * {
                color: ${theme.colors.white};
              }
              width: 100%;
              // background: linear-gradient(-213deg,
              // ${theme.colors.background_light} 0%,
              // ${theme.colors.background_dark} 100%);
              border-radius: 5px;
              position: relative;
              align-items: center;
              display: flex;
              padding-top: 40px;

              .particles {
                position: absolute;
                inset: 0px;
                z-index: -10;
              }

              // .images {
              //     //background-image: url(${heroPathRight}), url(${heroPathLeft});
              //   background-position: center right, center left;
              //   background-repeat: no-repeat;
              //   background-size: contain;
              //   position: absolute;
              //   inset: 0px;
              //   z-index: 10;
              //
              //   ${bpMaxMD} {
              //     background-size: cover;
              //   }
              // }

              ${bpMaxSM} {
                padding-top: 60px;
              }
            `}
            {...props}
        >
            {/*<div className="images"/>*/}
            <Particles className="particles" options={particlesOptions}/>
            <Container
                css={css`
                  height: 336px;
                  position: relative;
                  z-index: 10;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding-bottom: 0;
                `}
            >
                <div
                    css={css`
                      //font-family: "Raleway", sans-serif;
                      margin-top: -40px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      text-align: center;
                    `}
                >
                    <h1
                        css={css`
                          position: relative;
                          z-index: 100;
                          line-height: 1;
                          letter-spacing: 1px;
                          margin: 0;
                          font-size: 60px;
                          font-family: "Raleway", sans-serif;
                          height: 100%;
                          display: flex;
                          padding-bottom: 0;

                          ${bpMaxMD} {
                            font-size: 50px;
                          }
                        `}
                    >
                        {title.toUpperCase()}
                    </h1>
                    <p
                        css={css`
                          color: hsla(255, 100%, 100%, 0.9);
                          font-family: "Raleway", sans-serif;
                          font-size: 25px;
                          margin-bottom: 0;

                          ${bpMaxMD} {
                            font-size: 20px;
                          }
                        `}
                    >
                        {subTitle.toUpperCase()}
                    </p>
                    <Button href="../assets/giga_mania_resume.pdf" download="giga_mania_resume.pdf"
                            rel="noopener noreferrer">Resume</Button>
                </div>
            </Container>
        </section>
    )
}

export default Hero
