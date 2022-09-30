import Dropdown from './Dropdown'

import olx from '../images/olx.png'
import olx1 from '../images/olx1.png'
import button from '../images/button.svg'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

let value = ["mobile", "bike", "shoes", "car"]

const Navbar = () => {
  let [inp, setinp] = useState(null)
  // let [list, setList] = useState([]);

  const addvalue = (e) => {
    setinp(e.target.value)

  }
 
  let searchValue = value.filter((e, i) => {
    if(e.includes(inp) && inp!=="") {
      return {e}
    } 
  })


  return (
    <>
    <nav className="navbar navbar-expand-lg bg fi">
  <div className="container-fluid d-block">
    <div className='container-fluid'> 
    <a className="navbar-brand" href="#"><img className='size' src={olx}/></a>
    <span className='mx-4 change'> <DirectionsCarIcon /> Motors  </span>     
    <span className='mx-4 change'> <BusinessIcon /> Property  </span>   </div>
    <div className=' mt-4 mx-4'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <img className='size1' src={olx1} />
        </li>
        <li className="input-group mb-3 mx-4 nav-item dropdown">
          <div className='d-flex'>
        <span className="transparent pt-2 px-1" id="basic-addon1"><SearchIcon /></span>
          <input placeholder='Pakistan'  className="form-control bord nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
          
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>
        </li>
      </ul>
     
      <div class="input-group mb-3">
        <div className='d-block'>
          <div className='d-flex'>
  <input onChange={addvalue} type="text" className="form-control bord1 py-2" placeholder="Find Cars, Mobile Phone and More" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="transparent1 pt-2 px-3 text-light" id="basic-addon1"><SearchIcon /></span>
  </div>
  <div className='d-block'>
  <ul className='but dropdown-menu'> {searchValue.map((e, i) => <li key={i}> {e} </li>)} </ul>
  </div>
</div>
</div>
        <button className="bt fw-bold border-0 bord2 mb-3 mx-3" type="submit">Login</button>
        <button className='border-0'>
        <img className='size2 mb-2' src={button}/>
        <div className='pos'>
        <span className='fw-bold bt'> + Sell </span>
        </div>
        </button>
      </div>
    </div>
  </div>
</nav>

<nav className="navbar bg-light">
  <div className="container-fluid just">
    <Dropdown />

   <div className=''> <a href='#' className='px-1 lis' > Mobile Phones </a>
   <a href='#' className='px-1 lis' > Cars </a>
   <a href='#' className='px-1 lis' > MoterCycle </a>
   <a href='#' className='px-1 lis' > Houses </a>
   <a href='#' className='px-1 lis' > TV-Video-Audio </a>
   <a href='#' className='px-1 lis' > Tablet </a>
   <a href='#' className='px-1 lis' > Land & Plots </a> </div>

  </div>
</nav>
    </>
)
}

export default Navbar