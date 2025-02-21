import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Rectangle from './About-Rectangle';
import './About2.css';

function About2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const passionsImageRef = useRef(null);
  const listOfJobs = [
    'Mechanical Engineer',
    'Design Thinker',
    'UX Researcher',
    'User Centered Designer',
    'Artist and Maker'
  ];

  /* Control isMobile state */
  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 600);
    });
  }, []);

  /* Change image for passions grid based on screen width */
  useEffect(() => {
    if (isMobile) {
      passionsImageRef.current.src = '/about/about_passions-mobile.png';
    } else {
      passionsImageRef.current.src = '/about/about_passions.png';
    }
  }, [isMobile]);

  return (
    <div className="about-container-2">
      {/* -- TOP -- */}
      <div className="about-container-top-2">
        {/* Left-Text */}
        <div className="about-container-left-text-2">
          {/* Banner */}
          <div className="about-container-banner">
            <h1 className="about-banner">{'Hi there,'}</h1>
            <h1 className="about-banner">{"I'm Alissa"}</h1>
          </div>
          {/* Job Titles */}
          <div className="about-job-title-container-2">
            {listOfJobs.map((job, idx) => (
              <div className="about-job-title-row" key={`job-title-${idx}`}>
                <Rectangle />
                <p className="job">{job}</p>
              </div>
            ))}
          </div>
          {/* Button */}
          <Link className="about-work-button-container" to="/portfolio">
            <button className="about-work-button">Check out my work</button>
          </Link>
        </div>
        {/* Right-Img */}
        <img
          src="/about/about_portrait.png"
          alt="Portrait of Alissa"
          className="about-img"
        />
      </div>

      {/* -- MIDDLE -- */}
      <div className="about-container-middle">
        {/* Box */}
        <div className="about-container-middle-block">
          <p className="about-container-middle-block-text">
            I'm a multi-disciplinary human passionate about using empathic
            design to help change the world!
          </p>
        </div>

        {/* Text Block */}
        <div className="about-container-middle-block-text-small">
          <p className="about-text-2">
            I'm a Mechanical Engineer turned{' '}
            <strong>User Centric Designer</strong>, with a current focus in{' '}
            <strong>UX Research</strong> and <strong>Data Analysis</strong>. In
            my current role, I lead and <strong>manage</strong> Almond Cow's{' '}
            <strong>Consumer Insights department</strong> as we develop
            everything from <strong>sales strategy</strong> to{' '}
            <strong>website UI/UX improvements</strong>, and{' '}
            <strong>user test</strong> new food products before launch.
          </p>
          <p className="about-text-2">
            Before this, I studied <strong>Mechanical Engineering</strong> and{' '}
            <strong>Industrial Design</strong> at <strong>Georgia Tech</strong>,
            where I learned how to couple my passion for engineering with{' '}
            <strong>understanding end users</strong>. I love shifting between
            big-picture problem finding and deep dives into detail-oriented
            solution design and testing. After work, you can find me at the
            woodshop or the makerspace, testing new designs or building new
            smart electronic devices.
          </p>
        </div>
      </div>

      {/* -- BOTTOM -- */}
      <div className="about-container-bottom">
        {/* Passions Header */}
        <h2 className="passions-header">{'Passions'}</h2>
        {/* Passions Text */}
        <p className="passions-text">
          You'll always find me creating. Look for me in a woodshop, behind a
          camera, coding microcontrollers, publishing zines, and climbing
          mountains
        </p>
        {/* Passions Image */}
        <img
          src="/about/about_passions.png"
          ref={passionsImageRef}
          className="passions-img"
          alt="collection of images demonstrating my passions"
        />
      </div>
    </div>
  );
}

export default About2;
