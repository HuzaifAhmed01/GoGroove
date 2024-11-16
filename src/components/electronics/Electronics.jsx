import React from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../Axios/Axios';


const Electronics = () => {

  const {id} = useParams();
  console.log(id);



  return (
    <div>
      <H3>Hello world</H3>
      
    </div>
  )
}

export default Electronics
