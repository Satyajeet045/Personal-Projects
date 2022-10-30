import { useNavigate } from "react-router-dom"
import "./searchItem.css"


const SearchItem = () => {
  const navigate =useNavigate()
  const checkavail= ()=>{
     navigate("/hotels/id",{})
  }
  return (
    <div className="searchItem">
        <img src="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo=" 
        alt="" 
        className="siImg" />
        <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m form center</span>
          <span className="siTaxiOp">Free from Airport </span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio || 1 bathroom || 21 Squarefoot || 1 full bed 
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock on this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxi">Include taxes and fees</span>
            <button className="sicheckButton" onClick={checkavail}>See availabilty</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem