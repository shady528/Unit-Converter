import React from "react";

function Navbar(props) {
  return (
    <div className="sidebar">
      <i className="fa-solid fa-scale-unbalanced-flip outer-icon"></i>
      <nav>
        <ul>
          <li>
            <button onClick={()=>{props.setIndex('length'); props.setData(props.DATA.length); props.setToType(props.DATA.length[0]); props.setFromType(props.DATA.length[0]) }}>
              <i className="fa-solid fa-ruler"></i>
              <p>Length</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('area'); props.setData(props.DATA.area); props.setToType(props.DATA.area[0]); props.setFromType(props.DATA.area[0]) }}>
              <i className="fa-solid fa-chart-area"></i>
              <p>Area</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('acceleration'); props.setData(props.DATA.acceleration); props.setToType(props.DATA.acceleration[0]); props.setFromType(props.DATA.acceleration[0]) }}>
              <i className="fa-solid fa-truck-fast"></i>
              <p>Acceleration</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('angle'); props.setData(props.DATA.angle); props.setToType(props.DATA.angle[0]); props.setFromType(props.DATA.angle[0]) }}>
              <i className="fa-solid fa-ruler-combined"></i>
              <p>Angle</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('charge'); props.setData(props.DATA.charge); props.setToType(props.DATA.charge[0]); props.setFromType(props.DATA.charge[0]) }}>
              <i className="fa-solid fa-battery-three-quarters"></i>
              <p> Charge</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('current'); props.setData(props.DATA.current); props.setToType(props.DATA.current[0]); props.setFromType(props.DATA.current[0]) }}>
              <i className="fa-solid fa-bolt"></i>
              <p> Current</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('energy'); props.setData(props.DATA.energy); props.setToType(props.DATA.energy[0]); props.setFromType(props.DATA.energy[0]) }}>
              <i className="fa-solid fa-solar-panel"></i>
              <p> Energy</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('force'); props.setData(props.DATA.force); props.setToType(props.DATA.force[0]); props.setFromType(props.DATA.force[0]) }}>
              <i className="fa-solid fa-people-pulling"></i>
              <p> Force</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('mass'); props.setData(props.DATA.mass); props.setToType(props.DATA.mass[0]); props.setFromType(props.DATA.mass[0]) }}>
              <i className="fa-solid fa-m"></i>
              <p> Mass</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('pressure'); props.setData(props.DATA.pressure); props.setToType(props.DATA.pressure[0]); props.setFromType(props.DATA.pressure[0]) }}>
              <i className="fa-solid fa-p"></i>
              <p> Pressure</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('speed'); props.setData(props.DATA.speed); props.setToType(props.DATA.speed[0]); props.setFromType(props.DATA.speed[0]) }}>
              <i className="fa-solid fa-person-running"></i>
              <p> Speed</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('temperature'); props.setData(props.DATA.temperature); props.setToType(props.DATA.temperature[0]); props.setFromType(props.DATA.temperature[0]) }}>
              <i className="fa-solid fa-temperature-high"></i>
              <p> Temperature</p>
            </button>
          </li>
          <li>
            <button onClick={()=>{props.setIndex('time'); props.setData(props.DATA.time); props.setToType(props.DATA.time[0]); props.setFromType(props.DATA.time[0]) }}>
              <i className="fa-solid fa-clock"></i>
              <p> Time</p>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
