import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../components/Axios/Axios";
import Button from 'react-bootstrap/Button';
import {useDispatch } from "react-redux";
import { AddCart } from "../../redux/action";
import Loader from "../../components/Loader/Loader";


const ProductDetails = () => {
  let { id } = useParams();
  let [newData, setNewData] = useState(null);

  let navigate = useNavigate();

  let NavigateToAnother = (endPoint)=>{
    navigate(`/${endPoint}`)
    
      }

      let Dispach = useDispatch();

      let AddItem = (productInfo)=>{

        Dispach(AddCart(productInfo));

      }


  let fetchData = async () => {
    try {
      let response = await api.getDataById(id);
      setNewData(response.data.product);
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
      {newData?(
        <div className="flex items-center justify-around p-8" >
          <div className="w-[40%] h-[90vh] flex items-center justify-center">
            <img src={newData.image} alt="" className="w-[400px] h-[400px]" />
          </div>

          <div className="w-[50%] flex flex-col gap-4">
            <div className="text_Data flex flex-col gap-3">
              <h3 className="opacity-[.6] ">{newData.category}</h3>
              <h1>{newData.productName}</h1>
              <h4 className="flex gap-3">
                <img src="../../../public/images/Stars.jpg" className='w-5 object-contain' alt="" />
                Rating {newData.ratings}
                {" "}
              </h4>
              <h3>$ {' '}{Math.ceil(newData.offerPrice)}</h3>
              <div className="btns flex gap-2">
              <Button variant="dark" onClick={()=>AddItem(newData)}>Add to Cart</Button>
              <Button variant="outline-dark" onClick={()=>NavigateToAnother('Cart')}>Buy Now</Button>
            </div>
              <p>{newData.productDescription}</p>
            </div>
           
          </div>
        </div>
      ) : (
    <Loader/>
      )}
    </div>
  );
};

export default ProductDetails;
