'use client';

import React from 'react';
import ServicesCard from './ServicesCard';
import medicalTreatmentImg from '../../../assets/images/treatment.png';
import emergencyHelpImg from '../../../assets/images/emergency.png';
import regularExaminationImg from '../../../assets/images/examination.png';

function Services() {
  const data = [
    {
      name: 'Medical Treatment',
      description:
        'Management and care of a patient to combat disease or disorder.',
      image: `${medicalTreatmentImg?.src}`,
    },
    {
      name: 'Emergency Help',
      description:
        'We have special equipment to give emergency help if/when necessary.',
      image: `${emergencyHelpImg?.src}`,
    },
    {
      name: 'Regular Examination',
      description: 'Make online appointments for regular health examinations.',
      image: `${regularExaminationImg?.src}`,
    },
  ];

  return (
    <div className='container mx-auto p-3 my-4'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around my-6'>
        {data.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
