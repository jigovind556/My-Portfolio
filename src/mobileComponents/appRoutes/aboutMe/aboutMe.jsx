import React from "react";
import "./aboutMe.css"; // Import your CSS file
import wavingHand from "../../../images/waving-hand.png";

const AboutMe = () => {
  const profileImage = "https://avatars.githubusercontent.com/u/112634499?v=4";
  return (
    <div className="about-me padding-s">
      <div className="profile-image-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
      </div>
      <div className="greeting">
        <img className="waving-hand-icon" src={wavingHand} alt="Waving Hand" />
        <h1>
          <span>Hi, I am</span> Govind Ji
        </h1>
        <img className="waving-hand-icon" src={wavingHand} alt="Waving Hand" />
      </div>
      <p>
        I'm a dedicated and enthusiastic individual with a strong background in
        Information Technology. Currently pursuing a B.Tech degree in
        Information Technology at NIT Kurukshetra, set to graduate in 2025.
      </p>
      <p>
        My educational journey is complemented by a range of technical skills
        that I've cultivated over time. Programming is my passion, and I'm
        proficient in languages like C, C++, Java, and Python. I've also delved
        into the world of web development, mastering HTML, CSS, JavaScript,
        React, and Node.js.
      </p>
      <p>
        Crafting user-friendly mobile applications using Flutter is another
        aspect of my expertise. I'm well-versed in backend development with
        MySQL, Firebase, and MongoDB. Problem-solving and analytical thinking
        are my strengths, helping me contribute effectively to projects.
      </p>
      <p>
        As a collaborator, I bring strong communication skills, teamwork, and
        project management abilities. My experience with version control using
        Git and knowledge of continuous integration and deployment (CI/CD)
        practices adds to my technical toolkit. During my academic journey, I've
        actively engaged in extracurricular activities, including my role as a
        member of the Aeromodelling Club and leading the Yoga Club at Gurukul
        Kurukshetra.
      </p>
      <p>
        Connect with me on{" "}
        <a href="https://www.linkedin.com/in/govindji">LinkedIn</a> to learn
        more about my journey.
      </p>
    </div>
  );
};

export default AboutMe;
