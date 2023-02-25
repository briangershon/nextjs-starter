export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function HomePage({ jokes }: { jokes: Joke[] }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Jokes</h1>

      <ul>
        {jokes.map((joke) => (
          <li className="ml-5 mt-5" key={joke.id}>
            <span className="text-xl">{joke.setup}</span>
            <br />
            {joke.punchline}
          </li>
        ))}
      </ul>
    </div>
  );
}
