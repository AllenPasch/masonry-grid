import Head from "next/head";
import MasonryGridContainer from "../layout/MasonryGrid.container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Masonry Grid</title>
        <meta name="description" content="Responsive masonry grid, with performance optimizations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MasonryGridContainer />
    </>
  );
}
