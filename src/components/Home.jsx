import { useFetch } from "../hook/useFetch";

export const Home = ({ categories }) => {
  useFetch();
  return (
    <div className="grid grid-cols-2 mt-12">
      <h2>Mos complete movie information search engine</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos,
        nesciunt quidem aperiam nemo ipsum alias natus accusamus exercitationem
        minus quis aliquid voluptas vero molestias, pariatur suscipit adipisci.
        Necessitatibus, fugit. Assumenda praesentium doloremque, ullam
        voluptates cum adipisci, minus possimus, asperiores velit fugit eaque
        optio quaerat ex deserunt dignissimos fugiat veritatis maxime. Dicta,
        aliquam nulla. Sit deleniti quis quod consequuntur. Recusandae.
        Doloremque, iste! Nostrum sunt expedita perspiciatis quaerat aspernatur
        cum quisquam natus optio labore possimus debitis magnam, accusantium
        ducimus aliquid perferendis dignissimos temporibus earum ratione
        consequuntur alias voluptatibus. Doloremque, ad similique. Nisi velit
        minima asperiores mollitia reprehenderit cupiditate corporis, dolor
        beatae? Ullam excepturi, iure numquam ex, exercitationem, assumenda
        explicabo asperiores doloremque dolor aliquid at expedita! Labore odit
        quo placeat ut molestiae. Obcaecati, rerum! Asperiores quibusdam
        exercitationem nobis soluta quidem iure, inventore numquam similique
        error minus veritatis sed repellat ipsum, eum alias id optio cum? Aut,
        molestias? Tempore maiores facilis voluptatum ex.
      </p>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
