import React from "react";
import "./services.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className="dgl__services">
      <div className="dgl_services-headline">
        <div>
          <h2>Our Services</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio
            neque, tempor at ante vel, dictum rutrum urna.
          </p>
        </div>
      </div>
      <div className="dgl_services-digital-marketing">
        <div className="dgl_services-digital-marketing-title">
          <h3>01</h3>
          <h3>DIGITAL</h3>
          <h3>MARKETING</h3>
        </div>
        <div className="dgl_services-digital-marketing-options">
          <div className="dgl_services-digital-marketing-option-1">
            <div>
              <h1>SEO</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-marketing-option-2">
            <div>
              <h1>Social Media</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div className="dgl_services-digital-marketing-option-3">
            <div>
              <h1>Copywriting</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dgl_services-digital-development">
        <div>
          <div>
            <div>logo</div>
            <div>
              <h2>App Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div>
            <div>logo</div>
            <div>
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
          <div>
            <div>logo</div>
            <div>
              <h2>UI/UX Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                odio neque, tempor at ante vel, dictum rutrum urna.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>DIGITAL DEVELOPMENT</h2>
        </div>
      </div>
      <div className="dgl_services-digital-transformation">
        <div>
          <div>
            <div>
              <button>
                <BsFillCaretLeftFill></BsFillCaretLeftFill>
              </button>
            </div>
            <div>
              <button>
                <BsFillCaretRightFill></BsFillCaretRightFill>
              </button>
            </div>
          </div>
          <div>
            <h1>Digital Business Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              odio neque, tempor at ante vel, dictum rutrum urna. Cras molestie
              interdum massa, in imperdiet turpis sollicitudin quis. In
              malesuada orci vel enim dignissim ullamcorper. Sed laoreet dolor
              eget posuere blandit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed ante urna, tristique in sapien vitae, egestas
              egestas massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
