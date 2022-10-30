import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://i.pinimg.com/originals/98/9d/fb/989dfbb168b61c8c77273094e6c07578.jpg" alt="" className="fpImg" />
            <span className="fpName">Grand Paradise</span>
            <span className="fpCity">Puri</span>
            <span className="fpPrice">Starting from $100</span>
            <div className="fpRating">
               <button>4.0</button>
               <span>Excellent</span>
            </div>
        </div>        
        <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbRL4YRUD2IgKMesiTvTpCOjM2FKPzeuOEEdaJSP4VJT_0pUVm1KtpVLIg4B26-0puGw&usqp=CAU" alt="" className="fpImg" />
            <span className="fpName">MayFair Resort</span>
            <span className="fpCity">Puri</span>
            <span className="fpPrice">Starting from $150</span>
            <div className="fpRating">
               <button>4.8</button>
               <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://pix10.agoda.net/hotelImages/983/983014/983014_15072112270032678661.jpg?ca=4&ce=1&s=1024x768" alt="" className="fpImg" />
            <span className="fpName">Pramod Coventions</span>
            <span className="fpCity">Puri</span>
            <span className="fpPrice">Starting from $150</span>
            <div className="fpRating">
               <button>4.2</button>
               <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/80/a7/49/sulusunset-bungalw.jpg" alt="" className="fpImg" />
            <span className="fpName">Konark Resort</span>
            <span className="fpCity">konark</span>
            <span className="fpPrice">Starting from $100</span>
            <div className="fpRating">
               <button>4.4</button>
               <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties