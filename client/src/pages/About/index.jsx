// AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-content mt-4">
      <h2>Welcome to Our Learning Platform</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit
        libero vitae dui fermentum, ac euismod nulla tempor. Vestibulum
        venenatis justo vel tincidunt sagittis. In hac habitasse platea
        dictumst. Suspendisse potenti.
      </p>
      <p>
        Phasellus vitae luctus nunc. Nulla facilisi. Sed tincidunt, dolor eu
        dapibus consectetur, nisi elit bibendum lectus, non facilisis purus quam
        non metus.
      </p>
      <p>
        Our platform is dedicated to providing high-quality education,
        accessible to everyone. Whether you are a student, professional, or just
        curious to learn new things, we have a diverse range of courses to suit
        your needs.
      </p>
      <p>
        Join us on this learning journey, explore our courses, and unlock your
        potential!
      </p>

      {/* Name Section */}
      <div className="about-us-section">
        <h3>Our Team</h3>
        <p>
          Meet the passionate individuals driving our learning platform forward.
        </p>
      </div>

      {/* Contact Section */}
      <div className="about-us-section">
        <h3>Contact Us</h3>
        <p>
          Feel free to reach out to us for any inquiries or support. We are here
          to assist you!
        </p>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      {/* Map Section */}
      <div className="about-us-section">
        <h3>Our Location</h3>
        <iframe
          title="Our Location"
          width="100%"
          height="300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11598.184841873548!2d-80.42980812456466!3d43.38651168198876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9018e9e89adf%3A0x2043c24369ede07e!2sConestoga%20College%20Kitchener%20-%20Doon%20Campus!5e0!3m2!1sen!2sca!4v1707069250497!5m2!1sen!2sca"></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
