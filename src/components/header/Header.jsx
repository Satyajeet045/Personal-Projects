import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faMuseum, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Header = ({ type }) => {
  const[destination, setDestination] =useState("")
  const[openDate, setOpenDate] =useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]); 
  const [openOptions,setopenOptions] =useState(false) 
  const[options,setoptions]=useState({
    adult:1,
    children:0,
    room:1
  })
  const navigate = useNavigate()
  const handleOptions = (name,operations) =>{
    setoptions((prev)=>{return {
      ...prev , [name]: operations=== "i" ? options[name] + 1 : options[name]-1
    }})
  }
  const handleSearch = ()=>{
    navigate("/hotels", {state:{destination,date,options}})
  }
  return (
    <div className="header ">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car RenTal</span>
                </div>
                <div className="headerListItem">
                     <FontAwesomeIcon icon={faMuseum} />
                     <span>Attractions </span> 
                </div>
                <div className="headerListItem">
                     <FontAwesomeIcon icon={faTaxi} />
                     <span>Airport Taxi</span>
                </div>
            </div>
            { type!=="list" && (
              <>
                <h1 className="headerTitle">To the world of an incredible vacation</h1>
                <p className="headerDesc">
                  Get rewarded for your travels - unlock instant savings of 10% or more on your first booking.
                </p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed}  className="headerIcon" />
                    <input type="text" placeholder="where are you going" className="headerSearchInput" onChange={e => setDestination(e.target.value)} />
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                      <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(
                          date[0].endDate,
                          "MM/dd/yyyy"
                        )}`}
                      </span>
                     {openDate && <DateRange
                       editableDateInputs={true}
                       onChange={item => setDate([item.selection])}
                       moveRangeOnFirstSelection={false}
                       ranges={date}
                       className="date"
                       minDate={new Date()}
                      />}
                  </div>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span onClick={()=>setopenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult, ${options.children} children , ${options.room} room`} </span>
                    {openOptions && <div className="options">
                      <div className="optionsItem">
                        <span className="optionText">Adult</span>
                        <div className="optionsCounter">
                          <button disabled={options.adult<=1} className="optionsCounterButton" onClick={()=>handleOptions("adult","d")}>-</button>
                          <span className="optionsCounterNumber">{options.adult}</span>
                          <button className="optionsCounterButton"onClick={()=>handleOptions("adult","i")}>+</button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Children</span>
                        <div className="optionsCounter">
                          <button  disabled={options.children<=0} className="optionsCounterButton" onClick={()=>handleOptions("children","d")}>-</button>
                          <span className="optionsCounterNumber">{options.children}</span>
                          <button className="optionsCounterButton" onClick={()=>handleOptions("children","i")}>+</button>
                        </div>
                      </div>
                      <div className="optionsItem">
                        <span className="optionText">Room</span>
                        <div className="optionsCounter">
                          <button disabled={options.room<=1} className="optionsCounterButton" onClick={()=>handleOptions("room","d")}>-</button>
                          <span className="optionsCounterNumber">{options.room}</span>
                          <button className="optionsCounterButton"onClick={()=>handleOptions("room","i")}>+</button>
                        </div>
                      </div>
                    </div>}
                  </div>
                  <div className="headerSearchItem">
                   <button className="headerBtn" onClick={handleSearch}>Search</button>
                  </div>
                </div>
              </>
            )}
        </div>
    </div>
  )
}

export default Header