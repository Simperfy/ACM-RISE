import React from 'react';

function PartnersSponsor({ title, description, images, titleClass = "" }) {
  return (
    <div className="flex flex-col text-center lg:text-left gap-4">
      <h3 className={`${titleClass} text-3xl font-semibold`}>{title}</h3>
      <p>{description}</p>
      <div className='flex flex-col lg:flex-row flex-wrap gap-16'>
        {images.map((image) => <img className="object-contain" src={image.src} alt={image.alt} key={image.src} />)}
      </div>
    </div>
  );
}

export default PartnersSponsor;