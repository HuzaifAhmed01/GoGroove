import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../components/Axios/Axios";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/action";
import Loader from "../../components/Loader/Loader";
import Carousel from "react-bootstrap/Carousel";

const ProductDetails = () => {
  let { id } = useParams();
  let [newData, setNewData] = useState(null);

  let navigate = useNavigate();

  let NavigateToAnother = (endPoint) => {
    navigate(`/${endPoint}`);
  };

  let Dispach = useDispatch();

  let AddItem = (productInfo) => {
    Dispach(AddCart(productInfo));
  };

  let fetchData = async () => {
    try {
      let response = await api.getDataById(id);
      setNewData(response.data.product);
      console.log(newData);
    } catch (error) {
      console.log(
        "error occured while fetching data at Product Details component"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {newData ? (
        <div className="flex gap-10  justify-around">
          <div className="w-[27%] h-[60vh] mt-20 flex overflow-hidden">
            <Carousel variant="dark" className="border-black">
              {newData.images.map((slide, index) => (
                <Carousel.Item key={index} className="w-full h-full border-zinc-700">
                  <img
                    src={slide.url}
                    alt={`Slide ${index}`}
                    className="w-full h-[100%] object-cover " // Use 'object-cover' to ensure the image covers the container
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="w-[50%] flex flex-col gap-4 p-4">
            <div className="text_Data flex flex-col gap-3">
              <h3 className="opacity-[.6] ">{newData.category}</h3>
              <h1>{newData.productName}</h1>
              <h3>Brand: {newData.brand}</h3>

              <h3>
                {" "}
                <i
                  class="fa fa-inr !text-[25px] text-zinc-500"
                  aria-hidden="true"
                ></i>{" "}
                {Math.ceil(newData.offerPrice)}
              </h3>
              <div className="btns flex gap-2">
                <Button variant="dark" onClick={() => AddItem(newData)}>
                  Add to Cart
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={() => NavigateToAnother("Cart")}
                >
                  Buy Now
                </Button>
              </div>
              <h4 className="flex gap-3 ">
                <span className="text-zinc-500">Rating</span> :
                <img
                  src="../../../public/images/Stars.jpg"
                  className="w-5 object-contain"
                  alt=""
                />
                {newData.ratings}
              </h4>
              <p>{newData.productDescription}</p>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductDetails;
