import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from '../style/index.css';
import Count from '../components/count';

const Home = () => {
  return (
    <div>
      <Head>
        <title>这是首页标题</title>
      </Head>
      <Count />
      <div className={css.title}>1233213</div>
      <Link href="/redux-example?id=123">
        <a>去 redux-example</a>
      </Link>
      <Link href="/styled-example?id=123">
        <a>去 styled-example</a>
      </Link>
    </div>
  );
};

export default Home;
