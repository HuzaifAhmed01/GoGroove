import { useEffect, useState } from "react";
import * as api from "../Axios/Axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
      {/* ---------------------------------this div is for buttons only--------------- */}

      <div className="w-full py-12 h-30 text-center flex flex-col justify-center items-center gap-3">
        <h1>Latest Products</h1>
        <div className="w-10/12 h-px bg-black/30"></div>
      </div>

      <div className="flex gap-2 justify-center pb-24">
        <Button
          variant="outline-dark"
          onClick={() => {
            setFilterData(cards);
            handleClick("All");
          }}
          className={addClass == "All" ? "bg-black text-white" : "empty"}
        >
          All
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("men's clothing");
            handleClick("mens");
          }}
          className={addClass == "mens" ? "bg-black text-white" : "empty"}
        >
          Men's Clothing
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("women's clothing");
            handleClick("womens");
          }}
          className={addClass == "womens" ? "bg-black text-white" : "empty"}
        >
          Women's Clothing
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("jewelery");
            handleClick("jewelery");
          }}
          className={addClass == "jewelery" ? "bg-black text-white" : "empty"}
        >
          Jewelery
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            filterProducts("electronics");
            handleClick("electronics");
          }}
          className={
            addClass == "electronics" ? "bg-black text-white" : "empty"
          }
        >
          Electronics
        </Button>
      </div>
      {/* ---------------------------------this div is for buttons only--------------- */}

      {/* ================= ALL CARDS DIV============================= */}
      {/* ================= THIS DIV IS FOR CARDS ==================== */}

      <div className="w-full grid py-0 px-20 grid-cols-4 gap-4 justify-items-center   ">
        {filterData.map((obj) => {
          return (
            <Card
              key={obj.id}
              className="w-64 h-55 p-3  flex flex-col items-center justify-center text-center "
            >
              <div className="w-52 h-60">
                <Card.Img
                  variant="top"
                  src={obj.image}
                  className="w-full h-full"
                />
              </div>
              <Card.Body>
                <h2 className="text-lg">{obj.title.slice(0, 10)}</h2>
                <h2 className="text-xl font-[600] ">${obj.price}</h2>
                <Button
                  variant="outline-dark"
                  onClick={() => handleClickNavigate(obj.id)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {/* ================= THIS DIV IS FOR CARDS ==================== */}
    </>
  );
};

export default AllCards;