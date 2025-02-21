import '../ArticleStyles.css';
import ArticleBanner from './ArticleBanner';

/* Modular Wooden Tabletop */
function CaseStudyFive({ article }) {
  return (
    <div className="article-box">
      <div className="new-article-container">
        {/* Banner */}
        <ArticleBanner article={article} />

        {/* Article Content */}
        <div className="article-body-container">
          <h3>Overview</h3>
          <p>
            This project was made as part of a furniture design studio class. We
            were given the freedom to choose any inspiration we liked, and over
            the semester the mood boards and designs were slowly narrowed down
            until the final piece was ready to be created. Having just been to
            the Smithsonian's Renwick Gallery Burning Man exhibit, I eventually
            chose that as my inspiration.
          </p>
          <h3>Tools Used</h3>
          <p>
            3D Sketching | CAD (SolidWorks) | Mood Boards | Wood Shop Tools
            (miter saw, table saw, jointer, planer, biscuit joiner, sander)
          </p>
          <h3>Team</h3>
          <p>
            This was a solo project completed for the Industrial Design minor
            capstone at Georgia Tech.
          </p>
          <p>
            <strong>Project timeframe: </strong> 3 months
          </p>
          <h2>Ideate</h2>
          <h3>Mood Board</h3>
          <p>
            The first stage of the process was to decide a theme we connected
            with and wanted to explore further through furniture design. Each
            week, we came into class with 3-5 mood boards for different topics
            and let the class critique the viability of the direction. Some
            initial directions were "escape rooms", "whimsicality", and Burning
            Man—a counterculture arts festival that takes place every year in
            the Nevada desert. Due to the rich photographic documentation of
            Burning Man, as well as the deeper guiding principles behind it, I
            eventually decided on Burning Man. This was the final mood board.
          </p>

          <div className="article-body-img-container">
            <img src="/case-study-images/BM-poster1.jpg" alt="N|Solid" />
          </div>

          <h3>Ideation and Sketching</h3>
          <p>
            The next phase was to ideate within the chosen theme. I did a lot of
            research on Burning Man, and found that there are explicit core
            principles that guide the attendees for the duration of the
            festival, as well as hexagonal symbolism to go along with it. The
            themes I resonated with and decided to design and sketch around were
            "community among strangers", "telling a story", and "nature and
            man". The sketches completed over the entire semester are shown
            below, along with the thematic ties that eventually merge to bring
            all the themes together in one piece.
          </p>
          <div className="article-body-img-container">
            <img src="/case-study-images/BM-poster2.jpg" alt="N|Solid" />
          </div>
          <p>
            Every part of the final design for this table was deliberately
            chosen to abstractly represent Burning Man in the most comprehensive
            way possible. The shape of the table, a hexagon, was chosen to
            represent the official symbols of the core principles of Burning
            Man. The tabletop is modular, as a nod to the creation of
            short-lived, yet meaningful art commonly witnessed at Burning Man.
            The table is made of different types of wood that come together to
            create a beautiful whole, much like people and art travel from all
            over the world to make this festival what it is.
          </p>
          <h2>Build</h2>
          <h3>Planning</h3>
          <p>
            Before buying materials, I CADed the table design so I could be
            certain of the measurements and required quantities. I then used
            these measurements to create a to-scale model of the table using
            foam core so I could see how it would fit in a space and then make
            any final dimension changes.
          </p>
          <p>
            Within SolidWorks, I played around with different wood materials to
            try to gauge what looked good. I then went to a specialty wood store
            to try to get as many natural wood colors as possible, as preserving
            the natural element of the wood was important to me. As homage to
            the namesake of the festival, I also decided to burn one section of
            the table, using an traditional Japanese technique called Shou Sugi
            Ban.
          </p>

          <div className="article-body-img-container">
            <img src="/case-study-images/BM-poster3.jpg" alt="N|Solid" />
          </div>

          <h3>Execution</h3>
          <p>
            To make the table a reality, I spent days in the woodshop turning my
            rough cuts of wood into uniform, smooth pieces. To accomplish this I
            used a jointer and planer to make all the edges square with uniform
            thickness across each different piece. To cut the various pieces I
            used a miter saw and table saw, and then a biscuit joiner for the
            side shell.
          </p>
          <p>
            For the inside supports, I was able to find and contact someone
            through social media who had helped run a small part of the Burning
            Man festival in a previous year. I asked if they had any wood
            supplies that were used at the festival that could be mailed to me,
            and they did. The inside table supports are cut from a wooden
            support beam used at Burning Man.
          </p>
          <p>
            The final piece had 3 rearrangeable inner wooden layers that could
            be picked up by any passerby and rearranged in any way they liked.
            In this way, the art and the community live on through strangers.
          </p>

          <div className="article-body-img-container-duo">
            <img src="/case-study-images/BM-table-calm.jpg" alt="N|Solid" />
            <img src="/case-study-images/BM-table-agitated.jpg" alt="N|Solid" />
          </div>

          <h2>Learnings</h2>
          <ul>
            <li>
              <p>
                Shoot for the moon. When I decided to hunt around the internet
                looking for people who attended Burning Man and could gift me
                some supplies, I did not expect to find someone actually willing
                to help. But you can never achieve what you don't try for.
              </p>
            </li>
            <li>
              <p>
                Jigs and fixtures are an important part of woodworking,
                especially when making so many identical cuts.
              </p>
            </li>
          </ul>
          {/* End of Article Content */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyFive;
