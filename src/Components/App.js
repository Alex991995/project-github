import Header from "../Components/Header" 
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import User from "./User";
import Repositories from "./Repositories";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user)
  return (
    <div className="App">
      <Header/>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path=":login/" element={<User user={user}/>}/>
          <Route path=":login/repos" element={<Repositories/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
