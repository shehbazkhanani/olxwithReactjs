import foot from '../images/footer.webp'
import foot1 from '../images/foot1.svg'
import foot2 from '../images/foot2.svg'
import foot3 from '../images/foot3.svg'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer () {
    return (
   <div>

<nav className="navbar mt-5 bgc">
  <div className="container-fluid">
    <div className="col-12 d-flex">
        <div className="col-4">
      <img src={foot} />
        </div>
        <div className="col-4">
            <p className='fs-2 fw-bold color mt-3'> TRY THE OLX APP </p>
            <p className='fs-4 color'> Buy, sell and find just about anything using the app on your mobile. </p>
        </div>
        <div className="col-4 d-flex ">

          <div className=''> 
          <p className='color fw-bold mt-5'> GET YOUR APP TODAY </p>
            <img className="si" src={foot1} />
            <img className="si mx-2" src={foot2} />
            <img className="si" src={foot3} />
            </div>
        </div>
        </div>
  </div>
</nav>

<div className="container-fluid bg border-top">
<div className="col-12 d-flex">
    
    <div className="col-2">
      <div className='fw-bold fo color px-4 pt-4'> POPULAR CATEGORIES </div>
      <ul className='py-3 font1'>
        <li>Cars</li>
        <li>Flats for rent </li>
        <li>Mobile Phones </li>
        <li>Jobs</li>
      </ul>
    </div>
    <div className="col-2">
    <div className='fw-bold fo color px-4 pt-4'> TRAINDING SEARCHES </div>
      <ul className='py-3 font1'>
        <li>Bikes</li>
        <li>Watches </li>
        <li>Books </li>
        <li>Dogs</li>
      </ul>
    </div>
    <div className="col-2">
    <div className='fw-bold fo color px-4 pt-4'> ABOUT US </div>
      <ul className='py-3 font1'>
        <li>About EMPG</li>
        <li>OLX Blog </li>
        <li>Contact Us </li>
        <li>OLX for Businesses</li>
      </ul>
    </div>
    <div className="col-2">
    <div className='fw-bold color fo px-4 pt-4'> OLX </div>
      <ul className='py-3 font1'>
        <li>Help</li>
        <li>Sitemap </li>
        <li>Terms of uses </li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className="col-4"> 
    <div className='fw-bold color px-4 pt-4'> FOLLOW US </div>
    <div className='px-4'> < FacebookIcon /> <TwitterIcon /> <YouTubeIcon/> <InstagramIcon/> </div>
    <div className='px-4 py-3'> <img className="ci" src={foot1} />
            <img className="ci mx-2" src={foot2} />
            <img className="ci" src={foot3} />  </div>
    </div>
        </div>  
</div>

  <div className="col-12 bgc1 d-flex justify-content-end">
    <p className='text-light pt-2 px-4 lastfo'> Free Classified in Pakistan .&#169; 2006-2002 OLX </p>
  </div>


   </div> 



    )
}

export default Footer;