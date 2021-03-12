import Head from "next/head";
import { StyleStructure } from "../components/StyleStructure";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Style | Structure</title>
      </Head>
      <StyleStructure />
    </div>
  );
}
