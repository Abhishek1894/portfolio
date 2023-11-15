import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import './App.css';
import Root from "./Components/Root";
import Home from "./Components/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route path="home" element={<Home/>}/>
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
