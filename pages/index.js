import { Fragment } from 'react';
import Head from 'next/head'
import Nav from '../components/LazuliNav';
import Container from '../components/LazuliContainer';
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
