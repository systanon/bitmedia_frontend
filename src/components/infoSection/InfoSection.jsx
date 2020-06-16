import React from "react";
import "./infoSection.scss";
import clean from "../../images/clean_design.png";
import retina from "../../images/retina_ready.png";
import secure from "../../images/secure_data.png";
export const InfoSection = () => {
  return (
    <div className="container">
      <section className="info_section">
        <h2 className="info_section_title">
          Why
          <i className="section_title_bold">
            small business owners <br /> love
          </i>
          AppCo?
        </h2>
        <p>
          Our design projects are fresh and simple and will benefit your
          business
          <br /> greatly. Learn more about our work!
        </p>
        <div className="info_list">
          <div className="info_wrap_block">
            <div className="info_item">
              <img src={clean} alt="secure" />
              <h3>Clean Design</h3>
              <p>Increase sales by showing true dynamics of your website.</p>
            </div>
          </div>
          <div className="info_wrap_block">
            <div className="info_item">
              <img src={secure} alt="secure" />
              <h3>Secure Data</h3>
              <p>Build your online store’s trust using Social Proof & Urgency.</p>
            </div>
          </div>
          <div className="info_wrap_block">
            <div className="info_item">
              <img src={retina} alt="secure" />
              <h3>Retina Ready</h3>
              <p>Realize importance of social proof in customer’s purchase decision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
