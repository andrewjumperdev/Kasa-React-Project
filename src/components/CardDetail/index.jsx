import React, { useState } from 'react'
import { useCallApiHook } from '../../hooks/API';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/index';

function CardDetail() {

  const { id } = useParams();
  const data = useCallApiHook();
  const item = data.find((item) => item.id === id);
  console.log(item)

  return (
    <div>
      <Carousel images={item} />
    </div>
  )
}

export default CardDetail