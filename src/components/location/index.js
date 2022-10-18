import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59375.41754398368!2d77.24697849702986!3d28.60927305738189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce490df432c0d%3A0x983f127503b86f5d!2sMayur%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110091!5e0!3m2!1sen!2sin!4v1666087227137!5m2!1sen!2sin"
        width="100%"
        height="600px"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
