import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-3xl font-bold">Hello About!</div>
      </main>
    </div>
  );
};

export default Home;
