import ArticleBanner from './ArticleBanner';
import '../ArticleStyles.css';

/* Jar Hero */
function CaseStudyFour({ article }) {
  return (
    <div className="article-box">
      <div className="new-article-container">
        {/* Banner */}
        <ArticleBanner article={article} />

        {/* Article Content */}
        <div className="article-body-container">
          <h3>Overview</h3>
          <p>
            Jar Hero is a branching decision-based story game in which every
            decision hinges on whether you choose to either loosen or tighten a
            jar (or bottle or door). This game works with a custom created
            controller that looks and feels like a jar. The controller also
            houses team-made electronic sensors built to fit within our space
            constraints that are capable of interfacing with an Arduino. This in
            turn was used to send user decision input to a Java-based game
            created in Processing.
          </p>
          <h3>Tools Used</h3>
          <p>
            Arduino Coding | IO Sensor Wiring and Hookups | Processing/Java |
            Code Architecture Planning | 3D Printing | Waterjet
          </p>
          <h3>Team</h3>
          <p>
            The entire project was completed as a team of three students for an
            Interactive Product Development class. Two Industrial Design
            students (Glover Beasley and John Lane) conducted the physical
            object building and the story creation, while I coded the project.
          </p>
          <p>
            <strong>My role: </strong>
            Coding for both Arduino and Processing. This code had to interface
            with the graphics designed by another team member, as well as the
            physical electronics built by the 3rd team member.
          </p>
          <p>
            <strong>Project timeframe: </strong> 2 months
          </p>
          <h2>Game and Graphic Design</h2>
          <h3>Game Mechanics</h3>
          <p>
            Jar Hero is a branching decision-based story game in which every
            decision hinges on whether the player chooses to either loosen or
            tighten the jar-shaped controller that is in front of them.
          </p>
          <h3>Coding</h3>
          <p>
            I coded the game using Processing, a Java-based IDE built
            specifically for working with graphics. I also coded the Arduino to
            read sensor input, and passed it to the game in Processing using the
            serial and COM libraries.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/jh-processing.PNG"
              alt="Jar Hero Graphic"
            />
          </div>
          <h3>Graphic Design</h3>
          <p>
            Here are some screen captures from gameplay. Illustrations were done
            for each of the 11 characters and 12 decision screens. To keep the
            player's attention, scrolling text was used in place of animations.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/graphic-2.jpg"
              alt="Jar Hero Graphic"
            />
          </div>
          <h2>Hardware Design</h2>
          <p>
            Inner controller mechanics and haptics included a vibration motor,
            an Arduino, and custom copper connection detectors.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/jh-schematic.jpg"
              alt="Jar Hero Console"
              style={{ width: '60%', height: 'auto' }}
            />
          </div>

          <p>
            The Jar Hero game console was made of CNC'd wood and waterjet steel.
            The jar controller (in blue) was 3D printed and able to be twisted
            in two directions and then snap back to its original position with a
            torsion spring.
          </p>

          <div className="article-body-img-container">
            <img
              src="/case-study-images/console.jpg"
              alt="Jar Hero Console"
              style={{ width: '60%', height: 'auto' }}
            />
          </div>

          <h2>Learnings</h2>
          <ul>
            <li>
              <p>
                Custom sensors made of copper tape have much more noise in their
                IO readings than professionally made devices. In order to get
                around this noise, specialized Arduino commands had to be used
                on the backend to clean the inbound data.
              </p>
            </li>
            <li>
              <p>
                When using Java, create as many Objects and Children as
                possible. This helps architect the code as well as helps make it
                easier to read later.
              </p>
            </li>
          </ul>
        </div>
        {/* End of Article Content */}
      </div>
    </div>
  );
}

export default CaseStudyFour;
