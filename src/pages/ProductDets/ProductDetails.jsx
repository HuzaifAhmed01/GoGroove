import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../components/Axios/Axios";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/action";
import Carousel from "react-bootstrap/Carousel";
import ProductDetailsSkeleton from "../../components/skeletonLoaderComponents/ProductDetailsSkeleton";

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
    } catch (error) {
      console.log(
        "Error occurred while fetching data at Product Details component"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="p-4">
      {newData ? (
        <div>
          {/* Product Data */}
          <div className="flex flex-col lg:flex-row gap-10 justify-around p-4 lg:p-8">
            {/* Carousel Section */}
            <div className="w-full lg:w-[50%] h-[40vh] lg:h-[60vh] mt-8 lg:mt-17 flex overflow-hidden">
              <Carousel
                variant="dark"
                className="w-full h-full flex justify-center items-center"
              >
                {newData.images.map((slide, index) => (
                  <Carousel.Item
                    key={index}
                    className="flex justify-center items-center w-full h-full"
                  >
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={slide.url}
                        alt={`Slide ${index}`}
                        className="w-[80%] lg:w-[60%] h-full object-contain rounded-lg"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* Product Details Section */}
            <div className="w-full lg:w-[50%] flex flex-col gap-4 p-2">
              <div className="text_Data flex flex-col gap-3">
                <h3 className="opacity-[.6] text-base">{newData.category}</h3>
                <h1 className="text-2xl">{newData.productName}</h1>
                <h3 className="text-lg">Brand: {newData.brand}</h3>
                <h3 className="text-lg flex items-center gap-1">
                  <i
                    className="fa fa-inr !text-[25px] text-zinc-500"
                    aria-hidden="true"
                  ></i>{" "}
                  {Math.ceil(newData.offerPrice)}
                </h3>
                <div className="btns flex flex-wrap gap-2">
                  <Button
                    variant="dark"
                    className="text-base"
                    onClick={() => AddItem(newData)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline-dark"
                    className="text-base"
                    onClick={() => NavigateToAnother("Cart")}
                  >
                    Buy Now
                  </Button>
                </div>
                <h4 className="flex gap-3 items-center text-base">
                  <span className="text-zinc-500">Rating</span>:
                  <img
                    src="../../../public/images/Stars.jpg"
                    className="w-5 object-contain"
                    alt=""
                  />
                  {newData.ratings}
                </h4>
                <p className="text-justify text-base">
                  {newData.productDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailsSkeleton />
      )}
    </div>
  );
};

export default ProductDetails;
