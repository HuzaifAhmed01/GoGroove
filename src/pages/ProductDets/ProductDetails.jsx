import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../components/Axios/Axios";
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux";
import { AddCart } from "../../redux/action";


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
      setNewData(response.data);
      // console.log(response);
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
        <div className="flex items-center justify-around">
          <div className="w-[40%] h-[80vh] flex items-center justify-center">
            <img src={newData.image} alt="" className="w-[400px] h-[400px]" />
          </div>

          <div className="w-[50%] flex flex-col gap-4">
            <div className="text_Data flex flex-col gap-3">
              <h3 className="opacity-[.6] ">{newData.category}</h3>
              <h1>{newData.title}</h1>
              <h4>
                Rating {newData.rating.rate}
                <i class="ri-star-s-fill"></i>{" "}
              </h4>
              <p>{newData.description}</p>
            </div>
            <div className="btns flex gap-2">
              <Button variant="dark" onClick={()=>AddItem(newData)}>Add to Cart</Button>
              <Button variant="outline-dark" onClick={()=>NavigateToAnother('Cart')}>Go to Cart</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <div className="w-[60px] h-[60px] bg-zinc-900 rounded-[50%] flex items-center justify-center">
            <div className="w-[50px] h-[50px] bg-white rounded-[50%] animate-spin text-[30px] flex items-center justify-center"><i class="ri-openai-line"></i></div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
