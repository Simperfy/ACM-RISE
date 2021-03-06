import React from 'react';

function Footer() {
  return (
    <footer className="bg-black py-12 text-center flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <a href="https://www.facebook.com/feutechACM">
          <img
            className="w-9"
            src="/R15E/images/facebook-logo.png"
            alt="facebook logo"
          />
        </a>
        <a href="https://www.instagram.com/feutechacm">
          <img
            className="w-9"
            src="/R15E/images/instagram-logo.png"
            alt="instagram logo"
          />
        </a>
        <a href="https://www.twitter.com/feutechACM">
          <img
            className="w-9"
            src="/R15E/images/twitter-logo.png"
            alt="twitter logo"
          />
        </a>
      </div>

      <div>
        <p>Copyright 2022 – FEUTECH ACM.</p>
        <p>
          Designed & Developed by{' '}
          <a href="https://github.com/Simperfy" className="underline">
            Simperfy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
