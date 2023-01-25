/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import {css, jsx} from "@emotion/react";
import styled from "@emotion/styled";
import Tilt from "react-tilt/dist/tilt";

import {fonts} from "../lib/typography";
import {ReactComponent as NodeJs} from "../icons/nodejs.svg"
import {ReactComponent as Sass} from "../icons/sass.svg"
import {ReactComponent as MongoDB} from "../icons/mongodb.svg"
import {ReactComponent as Express} from "../icons/express-color.svg"
import {ReactComponent as ReactRouter} from "../icons/react-router.svg"
import {ReactComponent as ReactIcon} from "../icons/react.svg"
import {ReactComponent as Graphql} from "../icons/graphql.svg";
import {ReactComponent as Redux} from "../icons/redux.svg";
import {ReactComponent as Css} from "../icons/css.svg"
import {ReactComponent as SocketIO} from "../icons/socket.svg"
import {ReactComponent as MaterialUI} from "../icons/materialUI.svg";
import {ReactComponent as Firebase} from "../icons/firebase.svg";


import "../styles/Projects.styles.scss"
import {bpMaxMD} from "../lib/breakpoints";
import Container from "./Container";


const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}


const projectContainerStyles = css`
  background: #231c42EE;
  border-radius: 10px;
  padding: 40px 80px 60px 80px;
  margin-bottom: 40px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${bpMaxMD} {
    padding: 40px;
    border-radius: 0;
  }

  h2 {
    text-align: center;
  }
`

const sourceLinkStyles = css`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: #b5aae1 !important;
  font-family: Caveat, cursive;;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const arrowRight = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="9"
    viewBox="0 0 6 9"
>
    <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points="57 18 60.5 21.5 57 25"
        transform="translate(-56 -17)"
    />
</svg>

const Button = styled.a({
    cursor: 'pointer',
    padding: '6px 12px',
    color: '#573EDE !important',
    backgroundColor: 'white',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: fonts.semibold,
    transition: 'all 300ms ease',
    ':hover': {
        transition: 'all 300ms ease',
        color: 'white !important',
        backgroundImage:
            'linear-gradient(180deg, #4A60DE 0%, #2F43C2 100%) !important',
    },
})

const PB = ""

const Projects = () => {
    return (
        <div id="all-projects" className="projects-list">

            <Container maxWidth={1260} css={projectContainerStyles}>
                <div className="project-container">
                    <div className="project-info">
                        <h1>Radish Garden</h1>
                        <p> Social networking platform for plants on digital garden. </p>
                        <p> The frontend of the application is written in React whereas backend is built with ExpressJS
                            in NodeJS. Express server provides RESTful services that is built with MVC architectural
                            pattern.</p>
                        <p> For user session recordings and sending/receiving instant
                            messages uses socket.io. For file uploading uses single API call and stores data in GridFs
                            storage.</p>

                        <div className="button-links">
                            <a
                                css={sourceLinkStyles}
                                href="https://github.com/giga-mania/redish_garden_media_corp."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code{' '}
                                {arrowRight}
                            </a>
                            <div className="buttons-icons">
                                <Button href="https://client-zk8et.ondigitalocean.app/login" target="_blank"
                                        rel="noopener noreferrer">Project live</Button>
                                <div>
                                    <ReactIcon style={{width: "30px", height: "30px"}}/>
                                    <NodeJs style={{width: "30px", height: "30px"}}/>
                                    <Express style={{width: "30px", height: "30px"}}/>
                                    <MongoDB style={{width: "30px", height: "30px"}}/>
                                    <SocketIO style={{width: "25px", height: "25px"}}/>
                                    <Sass style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-image-wrapper">
                        <Tilt options={tiltOptions}>
                            <img src={`${PB}/assets/radish_garden.png`} alt="" className="project-image"/>
                        </Tilt>
                    </div>
                </div>
            </Container>

            <Container maxWidth={1260} css={projectContainerStyles}>
                <div className="project-container">
                    <div className="project-info">
                        <h1>Demo Shop</h1>
                        <p>E-commerce React Application built with class components. The
                            application retrieves data from GraphQL based server. For state management uses Redux
                            alongside with RTK Query for data fetching.</p>
                        <p>The application was built as an assessment project for Scadiweb. UI was created from Figma
                            desgin.</p>


                        <div className="button-links">
                            <a
                                css={sourceLinkStyles}
                                href="https://github.com/giga-mania/demo-shop"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code{' '}
                                {arrowRight}
                            </a>
                            <div className="buttons-icons">
                                <Button href="https://demo-shop-storefront.netlify.app/" target="_blank"
                                        rel="noopener noreferrer">Project live</Button>
                                <div>
                                    <ReactIcon style={{width: "30px", height: "30px"}}/>
                                    <Graphql style={{width: "30px", height: "30px"}}/>
                                    <Redux style={{width: "30px", height: "30px"}}/>
                                    <Css style={{width: "30px", height: "30px"}}/>
                                    <ReactRouter style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-image-wrapper">
                        <Tilt options={tiltOptions}>
                            <img src={`${PB}/assets/demo_shop.png`} alt="" className="project-image"/>
                        </Tilt>
                    </div>
                </div>
            </Container>

            <Container maxWidth={1260} css={projectContainerStyles}>
                <div className="project-container">
                    <div className="project-info">
                        <h1>Roomer Chat</h1>

                        <p>Roomer Chat is a socket based secret chatting application. This app lets you create rooms and
                            chat with friend safely.</p>
                        <p>UI is built with React and MaterialUI. </p>
                        <p>A low-overhead instant communication channel between the server and the client is designed
                            using socket.io.</p>

                        <div className="button-links">
                            <a
                                css={sourceLinkStyles}
                                href="https://github.com/giga-mania/roomer-hackchat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code{' '}
                                {arrowRight}
                            </a>
                            <div className="buttons-icons">
                                <Button href="https://roomer-chat-8xhzn.ondigitalocean.app/" target="_blank"
                                        rel="noopener noreferrer">Project live</Button>
                                <div>
                                    <ReactIcon style={{width: "30px", height: "30px"}}/>
                                    <MaterialUI style={{width: "30px", height: "30px"}}/>
                                    <Sass style={{width: "30px", height: "30px"}}/>
                                    <NodeJs style={{width: "25px", height: "25px"}}/>
                                    <SocketIO style={{width: "25px", height: "25px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-image-wrapper">
                        <Tilt options={tiltOptions}>
                            <img src={`${PB}/assets/roomer_dark.png`} alt="" className="project-image"/>
                        </Tilt>
                    </div>
                </div>
            </Container>


            <Container maxWidth={1260} css={projectContainerStyles}>
                <div className="project-container">
                    <div className="project-info">
                        <h1>Sound Store</h1>
                        <p>The Sound Store is an E-commerce React application built with functional components.
                            The application for state management uses React context API. For authentication and
                            database management uses Firebase services.</p>
                        <p></p>
                        <p></p>

                        <div className="button-links">
                            <a
                                css={sourceLinkStyles}
                                href="https://github.com/giga-mania/sound_store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code{' '}
                                {arrowRight}
                            </a>
                            <div className="buttons-icons">
                                <Button href="https://sound-store.netlify.app/" target="_blank"
                                        rel="noopener noreferrer">Project live</Button>
                                <div>
                                    <ReactIcon style={{width: "30px", height: "30px"}}/>
                                    <Redux style={{width: "30px", height: "30px"}}/>
                                    <Css style={{width: "30px", height: "30px"}}/>
                                    <ReactRouter style={{width: "30px", height: "30px"}}/>
                                    <Firebase style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-image-wrapper">
                        <Tilt options={tiltOptions}>
                            <img src={`${PB}/assets/sound_store.png`} alt="" className="project-image"/>
                        </Tilt>
                    </div>
                </div>
            </Container>

        </div>
    );
};


export default Projects;