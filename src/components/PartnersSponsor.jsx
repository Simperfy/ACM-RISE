import React from 'react';

function PartnerCard({ partnerName, partnerImageUrl, partnerUrl = '#'}) {
  return (
    <div>
      <a href={partnerUrl} rel="noopener noreferrer">
        <img className="object-contain rounded h-48 w-48 m-auto" src={partnerImageUrl} alt={partnerName} />
        <p className="w-56 text-center mt-4 text-gray-300 text-lg">{partnerName}</p>
      </a>
    </div>
  );
}

function PartnersSponsor({ title, partners, titleClass = "" }) {
  return (
    <div className="flex flex-col text-center 2xl:text-left gap-4">
      <h3 className={`${titleClass} text-3xl font-semibold`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className='flex flex-col 2xl:flex-row flex-wrap gap-16'>
        {images.map((image) => <img className="object-contain rounded" src={image.src} alt={image.alt} key={image.src} />)}
      </div>
    </div>
  );
}

export default PartnersSponsor;
