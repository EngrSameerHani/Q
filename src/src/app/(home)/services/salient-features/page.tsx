import React from 'react';

const Page = () => {
  const features = [
    '400 Bed Hospital',
    'Most well Planned Hospital',
    'Ideal location',
    'Design according to US Hospital Code',
    'Panoramic view of Faisal Mosque and Margalla Hills',
    'State of the art technology',
    'All medical facilities under one roof',
    'Architectural land mark',
    'On site hotel and housing facilities for staff and Patient families',
    'Earth Quake resistance according to New Building Code',
    'All Partners US and UK trained doctors',
    'Off site out patient clinics in sector F-11 and F-8 Islamabad and Rawalpindi',
    'Promising future plans for quality medical college, post graduate training and nursing school',
    'A unique financial model with public-private partnership to keep the hospital interest free',
    'Operating rooms and intensive care unit on the same floor',
    'Intensive care unit on almost each floor',
    'Imaging center, Operating rooms and ICU close to Emergency department',
    'Ample parking',
    'Easy access to outpatient department, pharmacy, laboratory and dialysis center',
    'Large waiting areas',
    'Spacious rooms',
    'Labour and Delivery rooms close to Nursery and Neonatal ICU',
    'Mosque',
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Salient Features</h3>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="mb-0">{feature}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
