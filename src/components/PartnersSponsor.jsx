import React from 'react';

function PartnerCard({ partnerName, partnerImageUrl, partnerUrl = '#'}) {
  return (
    <div>
      <a href={partnerUrl} rel="noopener noreferrer">
        <img className="object-contain rounded h-48 w-48 m-auto" src={partnerImageUrl} alt={partnerName} />
        <p className="text-center mt-4 text-gray-300 text-lg">{partnerName}</p>
      </a>
    </div>
  );
}

function PartnersSponsor({ title, description, images, titleClass = "" }) {
  return (
    <div className="flex flex-col text-center lg:text-left gap-4">
      <h3 className={`${titleClass} text-3xl font-semibold`}>{title}</h3>
      <div className='flex flex-col lg:flex-row lg:justify-center flex-wrap gap-16'>
        {images.map((image) => <PartnerCard partnerName={image.alt} partnerImageUrl={image.src} key={image.src}/>)}
      </div>
    </div>
  );
}

export default PartnersSponsor;
