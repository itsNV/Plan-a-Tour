import { useState } from "react";

function Card({ id,name,info,price,image,removeTour}) {
  const [readmore, setReadmore] = useState(false);

  const discription = readmore
    ? `${info}....`
    : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
    
    function removeHandler2() {
       
        removeTour(id);
    }
  return (
    
      <div className="card bg-slate-900">
        <img src={image} className="image" />

        <div className="tour-details">
          <h4>₹ {price}</h4>
          <h4>{name}</h4>
        </div>

        <div className="tour-info">
          <div className="discription">
            {discription}
            <span onClick={readmoreHandler} className="readmoreless">
              {readmore ? `Show Less` : `Read More`}
            </span>
          </div>
        </div>

          <button className="card-btn" onClick={removeHandler2}>Not Interested</button>
      </div>
   
  );
}

export default Card;
