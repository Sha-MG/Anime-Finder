// == Import
import TableAnime from "../TableAnime";
import DetailsAnime from "../DetailsAnime"
import Favorites from "../Favorites";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";

// == Composant
function App() {

  const [favorites, setFavorites] = useState([]);

// Fonction qui toggle l'Anime en question dans les favoris. 
// l'id de l'anime est link au bouton sur lequel l'utilisateur à cliquer,
// C'est à partir de ça qu'on interroge l'API sur la page favorite.
// Si l'id n'est pas dans le tableau on le push dedans, s'il y est on l'enlève.
  const toggleFavorites = (event, anime) => {
    
    let newFavorites = favorites ;

    if(!newFavorites.find(a => a.data.attributes.canonicalTitle === anime.data.attributes.canonicalTitle)){
      newFavorites.push(anime)
      setFavorites(newFavorites)
    }else{
      let newFav = newFavorites.filter(a => a.data.attributes.canonicalTitle != anime.data.attributes.canonicalTitle)
      setFavorites(newFav)
    }
  };

  return (
      <Routes>
        <Route path="/" element={<TableAnime toggleFavorites={toggleFavorites} favorites={favorites}/>} />
        <Route path="/anime/:id" element={<DetailsAnime toggleFavorites={toggleFavorites} favorites={favorites}/>}/>
        <Route path="/favorites" element={<Favorites toggleFavorites={toggleFavorites} favorites={favorites}/>}/>
      </Routes>
  );
}

// == Export
export default App;
