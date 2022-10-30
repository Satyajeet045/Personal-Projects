import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
         <h1 className="mailTitle">To know about More Offers</h1>
         <span className="mailDesc">Subscribe to get Updated on Best Deals!!!</span>
         <div className="mailInputContainer">
             <input type="text" placeholder="Your Email" />
             <button>Subscribe</button>
         </div>
    </div>
  )
}

export default MailList