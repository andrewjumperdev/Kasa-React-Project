import React from 'react'
import { useCallApiHook } from '../../hooks/API'
import Carousel from '../Carousel'
import { useParams } from 'react-router-dom'


const CardDetail = () => {
  const {id} = useParams();
  const {data} = useCallApiHook()
  console.log(data)
  return (
    <>
      <Carousel data={data} id={id} />
    </>
  )
}

export default CardDetail