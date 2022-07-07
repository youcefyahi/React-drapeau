import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () =>{
return(
<BrowserRouter>
<Routes>
  <Route path="/React-drapeau" element={<Home/>}/>
  <Route path="/React-drapeau/about" element={<About/>}/>
</Routes>
</BrowserRouter>
)
}

export default App;
 
