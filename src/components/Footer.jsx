/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import Link from "./Link";
import theme from "../config/theme";
import {fonts} from "../lib/typography";
import { jsx, css } from '@emotion/react'
import {bpMaxSM} from "../lib/breakpoints";
import {GitHub, LinkedIn} from "./Socials";

import Container from "./Container";
import ContactForm from "./ContactForm";

const Footer = ({contactForm = <ContactForm/>, maxWidth}) => {
    return (
        <footer
            css={css`
              position: relative;
              background: ${theme.colors.purple_dark};
              color: white;
              margin-top: 70px;
              z-index: 0;

              .particles {
                position: absolute;
                inset: 0px;
              }
            `}
        >
            <Container
                id="contact"
                maxWidth={maxWidth}
                css={css`
                  position: relative;
                  z-index: 10;
                  padding-top: 0;
                  padding-bottom: 0;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  ${bpMaxSM} {
                    padding-top: 0;
                    flex-direction: column;
                  }
                `}
            >

                {contactForm ? (
                    <div css={{marginTop: -40}}>
                        {contactForm}
                        <br/>
                        <br/>
                    </div>
                ) : null}
                <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: flex-end;

                      div {
                        margin: 50px 0;

                        ${bpMaxSM} {
                          margin: 20px 0;
                        }
                      }

                      ${bpMaxSM} {
                        align-items: center;
                      }

                      h4 {
                         font-family: ${fonts.light};
                        font-size: 16px;
                        color: white;
                      }
                    `}
                >
                    <div>
                        <GitHub />
                        <LinkedIn/>
                    </div>

                    <Link to="/" aria-label="Return to homepage">
                        <div>
                            <h4>by Giga Mania</h4>
                        </div>
                    </Link>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;