import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './page/Home'
import Product from './page/Product'
import Karir from './page/Karir'
import './App.css';
import Upload from './page/Upload';
import Download from './page/Download'

function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
        <Route path="/" exact component={()=><Home/>}/>
        <Route path="/produk" exact component={()=><Product/>}/>
        <Route path="/karir" exact component={()=><Karir/>}/>
        <Route path="/upload" exact component={()=><Upload/>}/>
        <Route path="/download" exact component={()=><Download/>}/>
      </BrowserRouter>


    </div>
  );
}

export default App;
