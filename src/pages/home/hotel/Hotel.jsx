import "./hotel.css"
import Header from '../../../components/header/Header'
import Navbar from '../../../components/navbar/Navbar'
import MailList from '../../../components/mailList/MailList'
import Footer from '../../../components/footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
const Hotel = () => {
  const[slideNumber , setSlideNumber] =useState(0)
  const[open , setOpen] =useState(false)

  const photos=[
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen =(i) =>{
    setSlideNumber(i);
    setOpen(true)
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")}/>
          <div className="sliderWrapper">
            <img  src ={photos[slideNumber].src} alt="" className="sliderImg"></img>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />

        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Paradise Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
          </div>  
          <span>Golden Beach,Puri,753001</span>
          <span className="hotelDistance">Excellent Location,500m from Beach</span>
          <span className="hotelPriceHighlight">Book a Stay over $100 at this property and get a free ride to Banda Danda,Jagannath Mandir</span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper" key={i}>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay close to the beach</h1>
                <p className="hotelDesc">
                Enveloped in the lap of nature's breath-taking marvels, your stay with us is one of peace and unmatched privacy and plush comfort. Rooms are appointed keeping in mind the needs of the modern day traveller and luxury that our guests have always been accustomed to.Mayfair is located on the famous Puri Beach, overlooking the Bay of Bengal. This resort offers an outdoor pool and a fitness centre. Free parking and Wi-Fi are provided.
                </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night Stay</h1>
                <span>Located on the famous Puri Beach, overlooking the Bay of Bengal. This resort offers an outdoor pool and a fitness centre. </span>
                <h2>
                  <b>$700</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel