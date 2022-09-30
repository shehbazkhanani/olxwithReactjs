import Card from './Card'


function List() {
    return (
        <>
        <div className="container mt-5">
            <div className="col-12 fs-3 color mb-4"> Fresh recommendations </div>
            <div className="col-12 d-flex">
                <div className="col-sm-3 mx-1">
                <Card  img={require("../images/car.jpg")}  addValue={"Vintage Car"} addPrice={"Rs 260,0000"} addlocation={"Bahria Town Phase 8 - 2 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/bike.webp")}  addValue={"Sport Bike"} addPrice={"Rs 160,000"} addlocation={"DHA Phase 3 - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/iphone.jpg")}  addValue={"Iphone 13"} addPrice={"Rs 260,000"} addlocation={"Gulshan 13D - 3 days ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/boots.jpg")}  addValue={"Sports Shoes"} addPrice={"Rs 60,000"} addlocation={"Badurabad - 1 weeks ago"} />
                </div>
                
            </div>


            <div className="col-12 d-flex mt-1">
                <div className="col-3 mx-1">
                <Card  img={require("../images/bike.webp")}  addValue={"Sport Bike"} addPrice={"Rs 160,000"} addlocation={"DHA Phase 3 - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/car.jpg")}  addValue={"Vintage Car"} addPrice={"Rs 260,000"} addlocation={"Bahria Town Phase 8 - 2 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/boots.jpg")}  addValue={"Sports Shoes"} addPrice={"Rs 60,000"} addlocation={"Badurabad - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/iphone.jpg")}  addValue={"Iphone 13"} addPrice={"Rs 260,000"} addlocation={"Gulshan 13D - 3 days ago"} />
                </div>
         </div>

         <div className="col-12 d-flex mt-1">
                <div className="col-3 mx-1">
                <Card  img={require("../images/boots.jpg")}  addValue={"Sports Shoes"} addPrice={"Rs 60,000"} addlocation={"Badurabad - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/iphone.jpg")}  addValue={"Iphone 13"} addPrice={"Rs 260,000"} addlocation={"Gulshan 13D - 3 days ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/bike.webp")}  addValue={"Sport Bike"} addPrice={"Rs 160,000"} addlocation={"DHA Phase 3 - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/car.jpg")}  addValue={"Vintage Car"} addPrice={"Rs 260,000"} addlocation={"Bahria Town Phase 8 - 2 weeks ago"} />
                </div>
         </div>

         <div className="col-12 d-flex mt-1">
                <div className="col-3 mx-1">
                <Card  img={require("../images/iphone.jpg")}  addValue={"Iphone 13"} addPrice={"Rs 260,000"} addlocation={"Gulshan 13D - 3 days ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/boots.jpg")}  addValue={"Sports Shoes"} addPrice={"Rs 60,000"} addlocation={"Badurabad - 1 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/car.jpg")}  addValue={"Vintage Car"} addPrice={"Rs 260,000"} addlocation={"Bahria Town Phase 8 - 2 weeks ago"} />
                </div>
                <div className="col-3 mx-1">
                <Card  img={require("../images/bike.webp")}  addValue={"Sport Bike"} addPrice={"Rs 160,000"} addlocation={"DHA Phase 3 - 1 weeks ago"} />
                </div>
         </div>

         
        </div>

        </>
    )
}

export default List;