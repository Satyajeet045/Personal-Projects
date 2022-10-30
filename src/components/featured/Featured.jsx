import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Puri-Odisha_7th-november.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Puri</h1>
                <h2>500 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://ebhubaneswar.com/wp-content/uploads/2021/04/Must-visit-places-in-Daringbadi-Odisha.jpg" alt="" />
            <div className="featuredTitles">
                <h1>Daringbadi</h1>
                <h2>200 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img  className="featuredImg" src="https://i0.wp.com/ebhubaneswar.com/wp-content/uploads/2021/04/main-qimg-5bedc8613071d37546f61d76d359805d.jpg?ssl=1" alt="" />
            <div className="featuredTitles">
                <h1>Koraput</h1>
                <h2>100 Properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured