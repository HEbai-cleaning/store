import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.item1}
          <br />
          {data.item2}
          <br />
          {data.item3}
          <br />
          {data.item4}
          <br />
          {data.item5}
          <br />
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;