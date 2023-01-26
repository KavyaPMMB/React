import logo from "./logo.svg";
import "./App.css";
import Hello2 from "./Hello2";
import Hello3 from "./Hello3";
import Card1 from "./Card1";
import { Nav } from "react-bootstrap";
import Bootstrap3 from "./Bootstrap3";
import Map from "./Map";
import State from "./State";
import State2 from "./State2";
import StateCard from "./StateCard";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Icon1 from "./Icon1";
import Webpage1 from "./Webpage1";
import Product from "./Product";
import Flipcart from "./Flipcart";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav1 from "./Nav1";
import Ternary from "./Ternary";
import Ternary2 from "./Ternary2";
import Dummy from "./Dummy";
import Spread5 from "./Spread5";
import Spread4 from "./Spread4";
import Map3 from "./Map3";
import Dummy2 from "./Dummy2";
import Sample from "./Sample";


function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Nav1/>
      <Routes>
      <Route path="/StateCard" element={<StateCard/>}/>
      </Routes>
      <Flipcart/>
      <Hello2 />
      <Hello3 />
      <Map/>
      <bootstrap />
      <Card1 />
      <Bootstrap3 />
      <State />
      <State2/>
      <StateCard/>
      <Carousel1/>
      <Carousel2/>
      <Icon1/>
      <Webpage1/>
      <Product/>
  </BrowserRouter>
      <Ternary/>
      <Ternary2/>
      <Dummy/>
      <Spread5/>
      <Spread4/>
      <Map3/>
      <Dummy2/>
      <Sample/>
      
      

    </div>
  );
}

export default App;
