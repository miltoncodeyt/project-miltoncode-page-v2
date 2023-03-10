import React from "react";
import NetworksData from "../../data/NetworksData";

const Footer = () => {
  return (
    <footer className="sticky -bottom-0 bg-c-accent-darker text-c-accent-lighter flex items-center justify-between h-12 lg:h-8">
      <div className="l-container flex items-center justify-between">
        {/* <Logotipo mStyles="hidden md:block" version="positivo" /> */}
        <div className="flex flex-wrap">
          <small className="f-first text-fp-small uppercase">
            &#169; miltoncodeyt {new Date().getFullYear()}
          </small>
        </div>
        <div className="flex items-center gap-4">
          {NetworksData.map((network, index) => (
            <a
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="inline-block animation-transform hover:text-c-second-main"
            >
              <span className="text-fp-base">{network.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
