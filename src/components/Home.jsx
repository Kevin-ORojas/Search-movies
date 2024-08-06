import { useFetch } from "../hook/useFetch";

export const Home = ({ categories }) => {
  const { data, hasError, isLoading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${categories}&api_key=fa8e38cf0b9f357169b6389692856535`
  );

  // Desestructuración de data
  const movies = data?.results || [];
  return (
    <div>
      <div className="grid grid-cols-2 mt-12 py-4 px-4">
        <h2>Mos complete movie information search engine</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos,
          nesciunt quidem aperiam nemo ipsum alias natus accusamus
          exercitationem minus quis aliquid voluptas vero molestias, pariatur
          suscipit adipisci. Necessitatibus, fugit. Assumenda praesentium
          doloremque, ullam voluptates cum adipisci, minus possimus, asperiores
          velit fugit eaque optio quaerat ex deserunt dignissimos fugiat
          veritatis maxime. Dicta, aliquam nulla. Sit deleniti quis quod
          consequuntur. Recusandae. Doloremque, iste! Nostrum sunt expedita
          perspiciatis quaerat aspernatur cum quisquam natus optio labore
          possimus debitis magnam, accusantium ducimus aliquid perferendis
          dignissimos temporibus earum ratione consequuntur alias voluptatibus.
          Doloremque, ad similique. Nisi velit minima asperiores mollitia
          reprehenderit cupiditate corporis, dolor beatae? Ullam excepturi, iure
          numquam ex, exercitationem, assumenda explicabo asperiores doloremque
          dolor aliquid at expedita! Labore odit quo placeat ut molestiae.
          Obcaecati, rerum! Asperiores quibusdam exercitationem nobis soluta
          quidem iure, inventore numquam similique error minus veritatis sed
          repellat ipsum, eum alias id optio cum? Aut, molestias? Tempore
          maiores facilis voluptatum ex.
        </p>
      </div>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-wrap justify-center items-center w-full gap-4 mt-6">
        {movies.map(({ id, title, release_date, poster_path }) => (
          <div
            className="w-48 flex flex-col items-center p-2 border-2"
            key={id}
          >
            <img
              className="hover:cursor-pointer hover:animate-pulse w-full h-72 object-cover transition-transform duration-300"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />

            <div className="flex flex-col items-center w-full">
              <h3 className="text-center text-lg font-semibold mb-1 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                {title}
              </h3>
              <p className="text-gray-400 text-center text-sm w-full text-ellipsis overflow-hidden whitespace-nowrap">
                {release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
