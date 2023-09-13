import React from "react";
import { Helmet } from "react-helmet";
import './linkedProfile.css'
const LinkedinProfile = () => {
  return (
    <div className="linkedin-container">
      <Helmet>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
      </Helmet>
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="govindji" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/govindji?trk=profile-badge"></a></div>
    
    </div>
  );
};

export default LinkedinProfile;
