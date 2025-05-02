import Card from "./Card.js";


function Tours({ tours ,removeTour}) {
  return (
    <div className="container ml-[10rem] ">

      <h2 className="heading">Plan With Me</h2>

      <div className="cards">
        {tours.map((tour,index) => {
            return <Card {...tour} removeTour={ removeTour} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Tours;
