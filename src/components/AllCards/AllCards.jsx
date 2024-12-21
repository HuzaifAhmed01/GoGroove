import { useEffect, useState } from "react";
import * as api from "../Axios/Axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/Loader";

const AllCards = () => {
  let [cards, setCards] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [addClass, setAddClass] = useState(false);

  let navigate = useNavigate();

  let handleClickNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  let handleClick = (x) => {
    setAddClass(x);
    console.log(addClass);
  };

  const DataFetching = async () => {
    try {
      let response = await api.getData();
      setCards(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let filterProducts = (ele) => {
    let updatedList = cards.filter((x) => x.category === ele);
    console.log(updatedList);
    setFilterData(updatedList);
  };

  useEffect(() => {
    DataFetching();
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="w-full py-5 text-center flex flex-col justify-center items-center gap-3">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Latest Products</h1>
  <div className="w-10/12 sm:w-8/12 md:w-6/12 h-px bg-black/30 mx-auto"></div>
</div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center pb-24">
  <Button
    variant="outline-dark"
    onClick={() => {
      setFilterData(cards);
      handleClick("All");
    }}
    className={addClass === "All" ? "bg-black text-white" : ""}
  >
    All
  </Button>
  <Button
    variant="outline-dark"
    onClick={() => {
      filterProducts("men's clothing");
      handleClick("mens");
    }}
    className={addClass === "mens" ? "bg-black text-white" : ""}
  >
    Men's Clothing
  </Button>
  <Button
    variant="outline-dark"
    onClick={() => {
      filterProducts("women's clothing");
      handleClick("womens");
    }}
    className={addClass === "womens" ? "bg-black text-white" : ""}
  >
    Women's Clothing
  </Button>
  <Button
    variant="outline-dark"
    onClick={() => {
      filterProducts("jewelery");
      handleClick("jewelery");
    }}
    className={addClass === "jewelery" ? "bg-black text-white" : ""}
  >
    Jewelry
  </Button>
  <Button
    variant="outline-dark"
    onClick={() => {
      filterProducts("electronics");
      handleClick("electronics");
    }}
    className={addClass === "electronics" ? "bg-black text-white" : ""}
  >
    Electronics
  </Button>
</div>


      {/* Responsive Cards Grid */}
      <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
  {filterData?(
    filterData.map((obj) => {
      return (
        <Card
          key={obj.id}
          className="w-full h-auto p-2 flex flex-col items-center justify-between text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="w-full h-48  rounded-lg overflow-hidden relative">
            <Card.Img
              variant="top"
              src={obj.image}
              className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            {/* Add a badge to highlight discounts or new arrivals */}
            {/* <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-lg">
              New
            </div> */}
          </div>
          <Card.Body className="flex flex-col justify-between ">
            <h2 className="text-lg font-semibold text-gray-800">{obj.title.slice(0, 12)}</h2>
            <div className="w-full h-8 flex justify-between items-baseline ">
              <h3 className="text-xl font-bold text-gray-900">${Math.ceil(obj.price)}</h3>
              <div className="flex items-center space-x-1 text-yellow-500">
                {/* Add star rating */}
                <img src={'../../../public/images/Stars.jpg'} alt="" className="w-4"/><span>{obj.rating.rate}</span>
              </div>
            </div>
            <Button
              variant="outline-dark"
              className="mt-1 w-full  rounded-lg text-sm font-medium bg-red-500 "
              onClick={() => handleClickNavigate(obj.id)}
            >Buy Now</Button>
          </Card.Body>
        </Card>
      );
    })
  ):(
<Loader/>
  )}
</div>

    </>
  );
};

export default AllCards;
