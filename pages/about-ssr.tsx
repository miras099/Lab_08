import { GetServerSideProps } from "next";

export default function AboutSSR({ time }: { time: string }) {
  return (
    <div>
      <h1>About Page (SSR)</h1>
      <p>Generated at: {time}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};