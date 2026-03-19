import { GetStaticProps } from "next";

export default function About({ time }: { time: string }) {
  return (
    <div>
      <h1>About Page (SSG)</h1>
      <p>Generated at: {time}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};