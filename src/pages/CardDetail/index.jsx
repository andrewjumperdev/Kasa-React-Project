import React from "react";
import "./styles.scss";
import { useCallApiHook } from "../../hooks/API";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/Dropdowns";
import Rating from "../../components/Rating";
import UserProfile from "../../components/HostUser";
import TagBubbles from "../../components/TagBubbles";

const CardDetail = () => {
  const { id } = useParams();
  const { data } = useCallApiHook();

  if (!data) {
    return (
      <div>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const items = { ...data };
  const objectToArray = (obj) => {
    return Object.keys(obj).map((key) => ({ key, value: obj[key] }));
  };
  const dataArray = objectToArray(items);
  const logement = dataArray.find((item) => item.value.id === id);

  return (
    <div className="card-container">
      <Carousel images={logement.value.pictures} />
      <div className="info">
        <h2 className="title">{logement.value.title}</h2>
        <p className="location">{logement.value.location}</p>
      </div>
      <TagBubbles tags={logement.value.tags} />
      <div className="rating-host-container">
        <Rating value={logement.value.rating} />
        <UserProfile
          name={logement.value.host.name}
          picture={logement.value.host.picture}
        />
      </div>
      <div className="dropdowns-container">
        <Dropdown
          className="dropdown-description"
          title="Description"
          description={logement.value.description}
        />
        <Dropdown title="Équipements" equipments={logement.value.equipments} />
      </div>
    </div>
  );
};

export default CardDetail;
