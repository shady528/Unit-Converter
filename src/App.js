import React,{useState} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {

  const DATA= {
    "length": ["nm","μm","mm","cm","m","km","in","yd","ft-us","ft","fathom","mi","nMi"],
    "area": ["nm2","μm2","mm2","cm2","m2","ha","km2","in2","yd2","ft2","ac","mi2"],
    "acceleration": ["g-force","m/s2"],
    "angle": ["rad","deg","grad","arcmin","arcsec"],
    "charge": ["c","mC","μC","nC","pC"],
    "current": ["A","mA","kA"],
    "energy": ["Wh","mWh","kWh","MWh","GWh","J","kJ"],
    "force": ["N","kN","lbf"],
    "mass": ["mcg","mg","g","kg","mt","oz","lb","t"],
    "pressure": ["Pa","kPa","MPa","hPa","bar","torr","psi","ksi","inHg"],
    "speed": ["m/s","km/h","mph","knot","ft/s","ft/min"],
    "temperature": ["C","K","F","R"],
    "time": ["ns","mu","ms","s","min","h","d","week","month","year"]
}

  let [index, setIndex]=React.useState("length");

  let [data,setData]=React.useState(DATA.length);

  
  let [fromType,setFromType]=useState("nm");
  let [toType,setToType]=useState("m");

  return (
    <>
      <Navbar setIndex={setIndex} setData={setData} DATA={DATA} setFromType={setFromType} setToType={setToType}/>
      <Home data={data} index={index} setFromType={setFromType} setToType={setToType} fromType={fromType} toType={toType}/>
    </>
  );
}

export default App;
