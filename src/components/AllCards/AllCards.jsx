import { useEffect, useState } from "react";
import * as api from "../Axios/Axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Loader from "../Loader/Loader"; // Import the Loader component

const AllCards = () => {
  let [cards, setCards] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [addClass, setAddClass] = useState(false);
  let [loader, setLoader] = useState(false); // Add loader state

  let navigate = useNavigate();

  let handleClickNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  let handleClick = (x) => {
    setAddClass(x);
  };

  const fetchData = async () => {
    setLoader(true); // Set loader to true while fetching data
    try {
      let response = await api.getData();
      setCards(response.data.allProducts);
      setFilterData(response.data.allProducts);
      console.log(response.data.allProducts)

      
      
      setLoader(false); // Hide loader once data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoader(false); // Hide loader if there's an error
    }
  };

  let filterProducts = (ele) => {
    let updatedList = cards.filter((x) => x.category === ele);
    setFilterData(updatedList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="w-full py-5 text-center flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Latest Products
        </h1>
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
            filterProducts("Men’s Clothing");
            handleClick("Men’s Clothing");
          }}
          className={addClass === "mens" ? "bg-black text-white" : ""}
        >
          Men's Clothing
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("Tools");
            handleClick("Tools");
          }}
          className={addClass === "womens" ? "bg-black text-white" : ""}
        >
          Hardware & Tools
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("Jewelry");
            handleClick("Jewelry");
          }}
          className={addClass === "jewelery" ? "bg-black text-white" : ""}
        >
          Jewelry
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("Electronics");
            handleClick("Electronics");
          }}
          className={addClass === "electronics" ? "bg-black text-white" : ""}
        >
          Electronics
        </Button>
      </div>

      {/* Responsive Cards Grid */}
      <div className="w-full py-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4">
        {loader ? (
          <Loader />
        ) : filterData.length ? (
          filterData.map((obj) => (
            <Card
              key={obj._id}
              className="w-full h-auto p-2 flex flex-col items-center justify-between text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-full h-48 rounded-lg overflow-hidden relative">
                <Card.Img
                  variant="top"
                  src={obj.images[0].url}
                  className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
              <Card.Body className="flex flex-col justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {obj.productName.slice(0,15)}...
                </h2>
                <div className="w-full h-8 flex justify-between items-baseline">
                  <h3 className="text-xl font-bold text-gray-900">
                  <i class="fa fa-inr" aria-hidden="true"></i>{Math.ceil(obj.offerPrice
)}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <img
                      src="../../../public/images/Stars.jpg"
                      alt=""
                      className="w-4"
                    />
                    <span>{obj.ratings}</span>
                  </div>
                </div>
                <Button
                  variant="outline-dark"
                  className="mt-1 w-full rounded-lg text-sm font-medium bg-red-500"
                  onClick={() => handleClickNavigate(obj._id)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default AllCards;
