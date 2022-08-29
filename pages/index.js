import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Fragment } from 'react';
import Nav from '../components/lazuli-nav';
import Container from '../components/lazuli-container';
import Copyright from '../components/lazuli-copyright';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="hsl(259, 100%, 9%)"></meta>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="hsl(259, 100%, 9%)"></meta>
      </Head>
      <Nav></Nav>
      <Container></Container>
      <Copyright></Copyright>
    </Fragment>
  )
}
