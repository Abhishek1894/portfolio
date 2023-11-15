import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import './App.css';
import Root from "./Components/Root";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="home" element={<Home/>}/>
    <Route path="skills" element={<Skills/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="contacts" element={<Contacts/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
