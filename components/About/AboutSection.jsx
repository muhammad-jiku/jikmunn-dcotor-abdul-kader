'use client';

import React from 'react';
import bgImg from '../../assets/images/bg1.jpeg';
import { CustomBanner } from '..';
import AboutDetails from './AboutDetails';
import AboutTimeline from './AboutTimeline';
import AboutCertificates from './AboutCertificates';

function AboutSection() {
  const bannerData = {
    heading: 'About Me',
    subHeading1: 'About Me',
    subHeading2: '',
    image: `${bgImg?.src}`,
  };

  return (
    <>
      <CustomBanner data={bannerData} />
      <div className='mt-2 min-h-screen'>
        <div className='container mx-auto my-2 p-4 lg:p-8 flex flex-col justify-center items-center'>
          <AboutDetails />
          <AboutTimeline />
          <AboutCertificates />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
