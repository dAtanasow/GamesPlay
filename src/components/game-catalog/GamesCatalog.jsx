import { useEffect, useState } from "react";
import * as gamesAPI from "../../api/games-api";
import GameCatalogItem from "./game-catalog-item/GameCatalogItem";

export default function GamesCatalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await gamesAPI.getAll();

      setGames(result);
    })();
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0 ? (
        games.map((game) => <GameCatalogItem key={game._id} {...game} />)
      ) : (
        <h3 className="no-articles">No games yet</h3>
      )}
    </section>
  );
}
