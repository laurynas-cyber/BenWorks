import React from "react";

export default function BannerText() {
  return (
    <div className="bannertextCont">
      <div className="bannertext">
        <span className="bigtextbanner">Handmade </span>
        <div className="restbannerCont">
          <span className="textSpanCont">
            furniture
            <span className="smalltextbanner"> for</span>
            {/* furniture */}
          </span>
          <span
            className="textSpanCont"
            style={{
              marginLeft: "15px",
            }}
          >
            garden <span className="smalltextbanner">and </span> home
          </span>
        </div>
      </div>
    </div>
  );
}
