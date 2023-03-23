import React from 'react'
import '../styles/Sidebar.css'
import {cities, Icity} from "../utils/Cities"

const Sidebar = () => {
  return (
    <div className='sidebar-con'>
      {
        cities.map((city:Icity)=>(
          <div key={city.id} className="city-div">
            <p>{city.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar