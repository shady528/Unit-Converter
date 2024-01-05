import React,{useState} from "react";
// const axios = require('axios')
function Home(props) {
  let [text,setText]=useState(0);
  let [ans,setAns]=useState(0);
  let [conv,setConv]=useState(false);

  const options = {
    method: 'GET',
    url: 'https://measurement-unit-converter.p.rapidapi.com/measurements',
    headers: {
      'X-RapidAPI-Key': 'adc93c04cdmshf8fe06b32b79c86p14c8a3jsn659dca024323',
      'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com'
    }
  };


  const handleConvert=(()=>{
    fetch(`https://measurement-unit-converter.p.rapidapi.com/${props.index}?value=${text}&from=${props.fromType}&to=${props.toType}`, options)
	.then(response => response.json())
	.then(response => {setAns(response.result); setConv(false);})
	.catch(err => console.error(err));
  
  })

  const handlingConvert=()=>{
    setConv(true);
    handleConvert();
  }

  const handleClick1=(e)=>{
    props.setFromType(e.target.value);
    setText(0);
    setAns(0);
  }

  const handleClick2=(e)=>{
    props.setToType(e.target.value);
    setText(0);
    setAns(0);
  }

  return (
    <div className="home">
      <p className="title">
        {props.index.charAt(0).toUpperCase() + props.index.slice(1)} Conversion
      </p>
      <div className="convert">
        <div className="from">
          <input type="number" style={{ height: "26px" }} value={text} onChange={(e)=>setText(e.target.value)}/>
          <button className="btnFrom">
            {props.fromType}
            <i className="fa-solid fa-angle-up"></i>
          </button>
          <div className="dropdownFrom">
            {props.data.map((item, index) => (
              <button key={index} style={{ borderRadius: "5px"  }} value={item} onClick={handleClick1}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
        <button className="btn" onClick={handlingConvert} style={{margin:"15px",padding:"10px"}} disabled={conv}>CONVERT</button>
      </div>
        <div className="to" style={{ display: "flex"}}>
          <div className="ans"style={{height: "28px" }}>{ans}</div>
          <button className="btnTo">
            {props.toType}
            <i className="fa-solid fa-angle-up"></i>
          </button>
          <div className="dropdownTo">
            {props.data.map((item, index) => (
              <button key={index} style={{ borderRadius: "5px"}} value={item} onClick={handleClick2}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="about">
        <p>Are you facing some issues with inter-conversions??</p>
        <p>Now you don't need on searching google for each conversion!!</p>
        <p>Here's what you get from this web-app.</p>
        <p>Convert any unit into another!...</p>
        <p>Unit Convertor is very glad to help you out...</p>
        <div className="buttons">
        <button>Length</button>
        <button>Area</button>
        <button>Acceleration</button>
        <button>Angle</button>
        <button>Charge</button>
        <button>Current</button>
        <button>Energy</button>
        <button>Force</button>
        <button>Mass</button>
        <button>Pressure</button>
        <button>Speed</button>
        <button>Temperature</button>
        <button>Time"</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
