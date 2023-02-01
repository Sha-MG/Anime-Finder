// == Import
import TableAnime from "../TableAnime";
import DetailsAnime from "../DetailsAnime"
import { Routes, Route} from "react-router-dom";


// == Composant
function App() {
  return (
      <Routes>
        <Route path="/" element={<TableAnime/>} />
        <Route path="/anime/:id" element={<DetailsAnime/>}/>
      </Routes>
  );
}

// == Export
export default App;
