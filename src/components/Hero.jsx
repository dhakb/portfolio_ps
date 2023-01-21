/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import * as React from 'react'
import theme from "../config/theme";
import {bpMaxMD, bpMaxSM} from '../lib/breakpoints'
import {fonts} from '../lib/typography'
import Container from "./Container";


import particlesOptions from '../config/particles.config.json'
import Particles from 'react-tsparticles'

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
              background: linear-gradient(-213deg,
              ${theme.colors.background_light} 0%,
              ${theme.colors.background_dark} 100%);
              
              position: relative;
              align-items: center;
              display: flex;
              padding-top: 40px;

              .particles {
                position: absolute;
                inset: 0px;
                z-index: -10;

              }

              .images {
                background-position: center right, center left;
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                inset: 0px;
                z-index: 10;

                ${bpMaxMD} {
                  background-size: cover;
                }
              }

              ${bpMaxSM} {
                padding-top: 60px;
              }
            `}
            {...props}
        >
            <Particles className="particles" options={particlesOptions}/>
            <div className="images"/>
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
                          z-index: 5;
                          line-height: 1;
                          letter-spacing: 1px;
                          margin: 0;
                          font-size: 60px;
                          font-family: ${fonts.thin};
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
                          font-family: ${fonts.regular};
                          font-size: 25px;
                          margin-bottom: 0;

                          ${bpMaxMD} {
                            font-size: 20px;
                          }
                        `}
                    >
                        {subTitle.toUpperCase()}
                    </p>
                </div>
            </Container>
        </section>
    )
}


// function Hero({
//                   children,
//                   headerColor, // pluk this out of the props so it's not applied to the section
//                   ...props
//               }) {
//     return (
//         <section
//             css={css`
//         * {
//           color: ${theme.colors.white};
//         }
//         height: 100px;
//         width: 100%;
//         background: linear-gradient(
//           -213deg,
//           ${theme.colors.background_light} 0%,
//           ${theme.colors.background_dark} 100%
//         );
//         z-index: 0;
//         position: relative;
//         align-items: center;
//         display: flex;
//         padding-top: 40px;
//         .particles {
//           position: absolute;
//           inset: 0px;
//         }
//         ${bpMaxSM} {
//           padding-top: 60px;
//         }
//       `}
//             {...props}
//         >
//             <Particles className="particles" options={particlesOptions} />
//         </section>
//     )
// }


export default Hero
