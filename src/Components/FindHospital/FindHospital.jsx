import React from 'react';
import "../FindHospital/FindHospital.css"

function FindHospital() {
  return (
      <div className='row'>
        <div className='col-12'>
          <div className='search-btns'>
            <div className='input-btn'>
            <input className='input-btn1' type="text" placeholder='Search by location'/>
            <button className='search-btn'>Search</button>
            </div>

            <select className='option-btn'>
                <option>Filters</option>
            </select>

            <div className='export-btn'>
              <button>Export</button>
            </div>
          </div>

          <div className='text'>Oops! No hospitals found.</div>
        </div>
      </div>
  )
}

export default FindHospital;














