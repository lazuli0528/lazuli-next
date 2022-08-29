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
      <Head></Head>
      <Nav></Nav>
      <Container></Container>
      <Copyright></Copyright>
    </Fragment>
  )
}
