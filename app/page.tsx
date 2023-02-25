import type { Metadata } from 'next';
import HomePage, { Joke } from './HomePage';

const title = 'Home | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

async function getJokes(): Promise<Joke[]> {
  const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
  const jokes: Joke[] = await res.json();
  return jokes;
}

export default async function Home() {
  const jokes = await getJokes();
  return <HomePage jokes={jokes} />;
}
