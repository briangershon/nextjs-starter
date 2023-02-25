import type { Metadata } from 'next';

const title = 'About | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

const About = () => {
  return (
    <div className="flex">
      <div className="text-3xl font-bold">About</div>
    </div>
  );
};

export default About;
