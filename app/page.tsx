import HomePage, { Joke } from './HomePage';

async function getJokes(): Promise<Joke[]> {
  const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
  const jokes: Joke[] = await res.json();
  return jokes;
}

export default async function Home() {
  const jokes = await getJokes();
  return <HomePage jokes={jokes} />;
}
