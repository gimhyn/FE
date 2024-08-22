// "use client";
import { useEffect, useState } from "react";

export const metadata = {
  title: "영화 홈",
  description: "짱 영화",
};

const URL = "https://nomad-movies.nomadcoder.workers.dev/movies";

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
export default async function Page() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState();
//   const getMovies = async () => {
//     const response = await fetch(
//       "https://nomad-movies.nomadcoder.workers.dev/movies"
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
// }
