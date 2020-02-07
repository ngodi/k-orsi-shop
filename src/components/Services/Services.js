/* eslint-disable no-unused-vars */
import React from 'react';

import './Services.scss';

import Service from '../Service/Service';

import servicesData from './servicesData';

function Services() {
    const servicesList = servicesData.map(service => (
      <Service icon={service.icon} title={service.title} description={service.description} />
    ))
  return (
    <div className="services">
    
      <div className="services-container">
          <div className="services-header">
              <div className="services-heading">
                 <p>The Service <br /> We Provide</p>
              </div>
              <div className="services-info">
                <p>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English.
                </p>
              </div>
          </div>
          <div className="services-list">
             {servicesList}
          </div>
      </div>
    </div>
  );
}

export default Services;
