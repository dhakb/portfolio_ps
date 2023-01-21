/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from "react";
import {css, Global, ThemeProvider} from '@emotion/react'
import {MDXProvider} from "@mdx-js/react";
import mdxComponents from './mdx'
import Footer from "./Footer";
import Header from "./Header";
import styled from '@emotion/styled'
import {bpMaxMD, bpMaxSM} from "../lib/breakpoints"
import globalStyles from "../styles/GlobalStyles";
import theme from "../config/theme";




const DefaultHero = styled.section`
  * {
    color: ${theme.colors.white};
  }
  width: 100%;
  ${({headerColor}) =>
    headerColor
        ? css`
          background: ${theme.colors.background_dark};
          background-image: linear-gradient(
            -213deg,
            ${theme.colors.background_light} 0%,
            ${theme.colors.background_dark} 100%
          );
          background-position: center right, center left;
          background-repeat: no-repeat;
          background-size: contain;
        `
        : null} position: relative;
  z-index: 0;
  align-items: center;
  display: flex;
  height: 100px;
  ${bpMaxMD} {
    background-size: cover;
  }
  ${bpMaxSM} {
    padding-top: 60px;
  }
`

const Layout = ({maxWidth = 720, siteTitle = "Giga Mania", headerLink, headerBg, headerColor, subscribeForm, siteMetadata, children, hero}) => {


    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles}/>
            <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  min-height: 100vh;
                `}
            >
                <div css={{flex: '1 0 auto'}}>
                    {React.cloneElement(hero, {headerColor})}
                    <Header
                        maxWidth={maxWidth}
                        siteTitle={siteTitle}
                        headerLink={headerLink}
                        headerColor={headerColor}
                    />
                    <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                </div>
                <div css={{flexShrink: '0'}}>
                    <Footer
                        maxWidth={maxWidth}
                        author="Giga Mania"
                        subscribeForm={subscribeForm}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;