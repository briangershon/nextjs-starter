import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-3xl font-bold">About</div>
    </div>
  );
};

export default About;
