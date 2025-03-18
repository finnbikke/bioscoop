import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";

import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);

  useUpdateTitle(title)


    return (
      <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex flex-wrap justify-center gap-2 other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}           
          </div>
        </section>
      </main>
    )
  }