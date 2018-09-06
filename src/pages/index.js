import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

import logo from './logo.svg'

injectGlobal`
  html, body {
    background-color: #F7F7F7;
    min-height: 100vh;
    position: relative;

    > div {
      min-height: 100vh;
    }
  }
`

const PageWrap = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  > section {
    max-width: 640px;
    padding: 0 1rem;
    width: 100%;
  }

  a {
    color: inherit;
  }
`

const LogoWrap = styled.section`
  margin: 2rem 0;
  text-align: center;

  @media only screen and (max-width: 480px) {
    margin: 0;
  }

  img {
    max-width: 320px;

    @media only screen and (max-width: 480px) {
      max-width: 160px;
    }
  }
`

const AboutWrap = styled.section`
  h1 {
    line-height: 1.5em;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`

const SocialIcons = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  margin-bottom: 2rem;
`

const IndexPage = () => (
  <PageWrap>
    <LogoWrap>
      <img src={logo} alt="Toledo Bicycle Coalition Logo" />
    </LogoWrap>

    <AboutWrap>
      <h1>The Toledo Bicycle Coalition inspires people to bicycle and advocates for a city where everyone feels comfortable&nbsp;riding.</h1>

      <hr />

      <p style={{ textAlign: "center" }}><a href="mailto:info@toledobikeco.com"><i className="fa fa-envelope-o"></i><FontAwesomeIcon icon={faEnvelope} /> Contact Us</a></p>

      <hr />

      <SocialIcons>
        <a href="https://www.facebook.com/Toledo-Bicycle-Coalition-586526118177321/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="https://www.instagram.com/toledobikeco/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href="https://twitter.com/toledobikeco" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      </SocialIcons>
    </AboutWrap>
  </PageWrap>
)

export default IndexPage
