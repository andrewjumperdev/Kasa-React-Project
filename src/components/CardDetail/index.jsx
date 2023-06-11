import React from 'react'
import './CardDetail.scss'
import { useCallApiHook } from '../../hooks/API'
import Carousel from '../Carousel'
import { useParams } from 'react-router-dom'
import Dropdown from '../Dropdowns'
import Rating from '../Rating'
import UserProfile from '../HostUser'
import TagBubbles from '../TagBubbles'


const CardDetail = () => {
  const {id} = useParams();
  const {data} = useCallApiHook()

  if (!data) {
    return <div>Cargando...</div>;
  }

  const items = { ...data };
  const objectToArray = (obj) => {
    return Object.keys(obj).map((key) => ({ key, value: obj[key] }));
  };
  const dataArray = objectToArray(items);
  const logement = dataArray.find((item) => item.value.id === id);
  console.log(logement)

  return (
    <div className='card-container'>
      <Carousel images={logement.value.pictures}/>
      <h2 className='title'>{logement.value.title}</h2>
      <p className='location'>{logement.value.location}</p> 
      <TagBubbles tags={logement.value.tags}/>
      <div className="rating-host-container">
      <Rating  value={logement.value.rating}/>
      <UserProfile name={logement.value.host.name} picture={logement.value.host.picture} />
      </div> 
      <Dropdown className='dropdown-description' title='Description' description={logement.value.description}/>
      <Dropdown title='Équipements' description={logement.value.description}/>
    </div>
  )
}

export default CardDetail