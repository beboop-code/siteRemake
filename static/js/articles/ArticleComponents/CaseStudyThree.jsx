import '../ArticleStyles.css';
import ArticleBanner from './ArticleBanner';

/* Lingual */
function CaseStudyThree({ article }) {
  return (
    <div className="article-box">
      <div className="new-article-container">
        {/* Banner */}
        <ArticleBanner article={article} />

        {/* Article Content */}
        <div className="article-body-container">
          <p>
            Linguál is a club I designed and brought to life that bridges the
            intention-action gap for busy people who want to practice Spanish,
            but who don't have the time. It is an event-based program for people
            who speak Spanish at an intermediate level or above practice the
            language as if they were immersed in it.
          </p>
          <h3>The Challenge</h3>
          <p>
            This all started based on my experience living in Mexico and
            practicing Spanish daily in fun and engaging ways through immersion.
            When I returned to the US, I found it boring, and thus difficult, to
            continue learning the language. I went to language practice groups
            and online tutoring sessions, but they were not engaging. This was a
            problem I wanted to dig into further and find out if other people
            also needed something more.
          </p>
          <h3>Research Methods Used</h3>
          <p>
            Design Thinking Process | Empathetic Interviews | Journey Mapping |
            Field Testing | Branding Guide Creation | Participant Recruitment |
          </p>
          <h3>Team</h3>
          <p>
            Just myself, my Empathetic Research skills, and my passion for
            practicing Spanish in an engaging way To work through this problem
            and find a solution, I used the Design Thinking Methodology from the
            Stanford d.school
          </p>
          <p>
            <strong>Project timeframe: </strong> 12 months Ongoing. 5 months are
            represented in this case study
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/ling-asset-2-DT.png"
              alt="N|Solid"
              style={{ width: '60%', height: 'auto' }}
            />
          </div>
          <h2>Empathize</h2>
          <h3>Interviews</h3>
          <p>
            I conducted empathetic interviews with working adults who currently
            or had previously learned Spanish, to see how they felt about
            practice opportunities. It became difficult to find people in this
            exact category, and early on I realized that learners of all
            languages are going through the same struggles. Although my
            direction was to eventually target Spanish speakers and learners,
            the initial round of interviews was conducted with people learning
            any language.
          </p>
          <p>
            Through my personal network as well as my city's Spanish Meetup
            group, I conducted 8 interviews with language learners.
          </p>
          <h3>Observation and Participation</h3>
          <p>
            I also went to 2 Spanish Meetup events in my city to partake and
            observe. Both events consisted of around 10 people—some newcomers,
            some regulars—sitting around a table in a crowded restaurant. I
            spoke to as many people as I could at these gatherings, in Spanish,
            asking what brought each person to this specific event, and why they
            were learning Spanish.
          </p>
          <h2>Define</h2>
          <h3>Persona Creation</h3>
          <p>Based on the interviews, I created 3 personas.</p>
          <p>
            <strong>The School Spanish-learner: </strong>
            They learned Spanish in high school and/or college for many years.
            At one point they could use the language at a high level, but have
            since lost much of their skill. This loss of skill is a point of
            sadness and regret, but these negative feelings do not drive any
            actions in life today, 5-10 years after fluency had begun to
            decline.
          </p>
          <p>
            <strong>The Foreign English Teacher: </strong>
            This persona spent months or years abroad in a Spanish-speaking
            country teaching English and became fluent in Spanish of their own
            volition. They reminisce dearly on their time spent abroad and wish
            they could recreate part of that experience. As they spend time back
            in the United States, their Spanish skills start slipping, but not
            to the point of becoming a beginner.
          </p>
          <p>
            <strong>The Beginner: </strong>
            They are similar to the school Spanish-learner, except they are
            currently learning Spanish as an adult outside of school. This is
            usually for a particular reason, such as communicating with their
            partner's family abroad or upcoming travel. They are very motivated
            to get better at the language, but do not need an outside group to
            help them, given that they already have easy access to language
            practice partners.
          </p>
          <h3>How Might We</h3>
          <p>
            The Foreign English Teacher was the persona group that had the most
            frustrations and unmet needs, so I focused on that group going
            forward.
          </p>
          <p>
            I went through many rounds of How Might We statements for this
            group, slowing honing in on the root cause of the issue: "How might
            we make Spanish language fluency easier to maintain long-term?" to
            "How might we bring the experience of learning Spanish in a city
            where it is the predominant language and can be practiced everywhere
            in any scenario to major cities in the USA?" to finally landing on
            "How might we create a cohort of people who become a community that
            is accountable for each other to learn Spanish?"
          </p>
          <h2>Ideate</h2>
          <h3>Brainstorm</h3>
          <p>
            To brainstorm around the final How Might We statement above, I used
            yes-ands and word associations with the concepts of community,
            collaboration, language, learning, and fun.
          </p>
          <p>Next I used a series of a questions to help me refine my ideas.</p>
          <ul>
            <li>Who is your target audience?</li>
            <ul>
              <li>Those who don't consider themselves fluent in Spanish</li>
            </ul>
            <li>What are you offering (tangible and intangible?)</li>
            <ul>
              <li>A place to practice Spanish</li>
              <li>A cultivated judgment-free zone</li>
              <li>A community</li>
            </ul>
            <li>What other orgs or programs exist in your space?</li>
            <ul>
              <li>Spanish tutoring</li>
              <li>Spanish classes</li>
              <li>Italki</li>
              <li>Immersion abroad programs</li>
            </ul>
            <li>Types of audience segments this will interact with</li>
            <ul>
              <li>
                People frustrated with learning Spanish &larr; what my venture
                interacts with the most AND needs to interact with the most
              </li>
              <li>
                Native speakers/people willing to head up workshops &larr;
                secondary need
              </li>
              <li>Perchance a collaboration with language schools or tutors</li>
            </ul>
          </ul>
          <h3>Share Ideas</h3>
          <p>
            I then shared a couple of ideas with peers and mentors who were in
            my target audience to get their feedback. I told people about ideas
            ranging from cohort groups to political canvassing with the Hispanic
            community in our city. I listened to what people were excited about
            and what they added ideas on top of.
          </p>
          <h2>Prototype</h2>
          <h3>Fail Fast</h3>
          <p>
            In the interest of failing fast, I put together a minimum viable
            prototype (MVP) of my idea. From the feedback, my ideas were added
            to, changed, and eventually whittled into less complicated, more
            testable versions of what they were.
          </p>
          <p>
            The first event was scrappy, and made use of the limited connections
            I had in the city to extend my reach. I decided to launch with a
            beginner salsa class, taught by a salsa instructor I had used for
            lessons in the past. I asked if she would be willing to host a
            beginner dance class entirely in Spanish then used a connection from
            the Spanish Meetup group to help me post the event on the app. I
            knew I did not have the proper sway or connections in the
            Spanish-speaking community to get a full class to attend, so I
            subsidized the first event out-of-pocket and asked a connection to
            post it publicly on Meetup (an event app for groups). I also posted
            flyers with QR codes throughout the city, everywhere from bookstores
            to bus stations.
          </p>
          <h2>Test</h2>
          <h3>The First Event</h3>
          <p>
            This salsa dancing class had a turnout of 15 people, 12 of which
            elected to join the group afterward for continued Spanish
            conversation over dinner. Everyone was very excited to be there, and
            when they learned I was trying to start a venture focused solely on
            this type of event, you could feel the energy in the room as people
            offered their assistance for further events.
          </p>

          {/* Stacked */}
          {/* <div className="article-body-img-container">
            <img
              src="/case-study-images/ling-asset-3-salsa1.png"
              alt="N|Solid"
              style={{ width: '65%' }}
            />
          </div>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/ling-asset-3-salsa2.png"
              alt="N|Solid"
              style={{ width: '65%' }}
            />
          </div> */}

          {/* Side-by-Side */}
          <div
            className="article-body-img-container-duo"
            style={{ justifyContent: 'space-evenly' }}
          >
            <img
              src="/case-study-images/ling-asset-3-salsa1.png"
              alt="N|Solid"
              className="lingual-photo"
            />
            <img
              src="/case-study-images/ling-asset-3-salsa2.png"
              alt="N|Solid"
            />
          </div>

          <h3>Identify Impediments</h3>
          <p>
            During the event, I watched the attendees closely, trying to gauge
            what was working for each person. Foremost, I noticed a variety of
            skill levels with the Spanish language, which led to the creation of
            a new persona group that was benefiting from my event (see below).
            It also led to friction points, as some people with more advanced
            mastery of Spanish got slightly frustrated with needing to have a
            slower class for those with less Spanish ability. And on the flip
            side those with lower abilities felt intimidated by those with
            higher levels.
          </p>

          <h3>Additional Persona Added</h3>
          <p>
            <strong>The Bilingual Fluent Speaker: </strong>These are heritage
            speakers who speak Spanish to some degree at home. They are fluent
            in speaking, but not always in reading and writing. They are very
            confident with their abilities in Spanish, and are quick to switch
            to English during a conversation in which a less confident Spanish
            learner is struggling.
          </p>

          <h3>Go Back and Empathize (Interviews)</h3>
          <p>
            I used the opportunity after the first event to call every person
            who attended - an uncomfortable endeavor since they were almost all
            strangers. I asked everyone for explicit feedback, beyond what I was
            able to observe in the moment. I asked what they liked and didn't,
            and what kind of event schedule would suit them going forward. I
            used those who responded positively as the core group I would reach
            out to to attend future events.
          </p>

          <h3>What Works</h3>
          <p>
            The main takeaway from the first event was that people loved being
            able to learn and do something in Spanish. For those who didn't
            speak very well, it was a relief to be able to simply listen and
            follow directions in class. For those that did, this was a natural
            opportunity to learn something new, but in a novel way.
          </p>
          <p>
            Having dinner afterward was a really useful bonding and learning
            experience for the group. Everyone had "warmed up" their Spanish
            skills during class, and was excited to practice speaking and
            getting to know each other. The class beforehand also served as a
            natural conversation starter in Spanish, rather than having to
            resort to small talk.
          </p>

          <h2>Implementation</h2>
          <p>
            Since the first event was a success, I decided to keep going on this
            path with small iterations. I organized 3 more events throughout the
            following month, all with different activities taught in Spanish. I
            made sure to host all the events on different days of the week and
            in different areas of the city in order to grow my initial base of
            users.
          </p>
          <h3>Growing Engagement</h3>
          <p>
            Aside from personally inviting a lot of people to my events, I
            created a logo and "brand" identity to give the venture, called
            Linguál, more credibility. Using these assets, I tabled at a large
            donor event, gave a speech about Linguál's usefulness, created more
            salsa classes, and hosted dinners, craft nights, cooking events, and
            more. Eventually these efforts reached a tipping point, and I
            started to get larger partnerships with bigger, more known Hispanic
            organizations in the city. This helped spread marketing more than I
            could alone.
          </p>

          <h3>Creating a Social Media Following</h3>
          <p>
            With the "brand" assets along with social proof consisting of happy
            and engaged people at Linguál events, I was able to create an
            Instagram and start amassing a following to get more people to
            events. It also proved a very valuable voice from which to talk to
            outside organizations I was hoping to partner with, since it gave me
            credibility.
          </p>

          <div className="article-body-img-container">
            <img
              src="/case-study-images/ling-asset-4-IG.png"
              alt="N|Solid"
              style={{ width: '65%' }}
            />
          </div>
          <h2>Learnings</h2>
          <ul>
            <li>
              <p>
                Over and over, I was told excitedly by people how cool this
                program was, but I noticed I often didn't get repeat
                event-goers. After conducting some interviews, I learned that
                although participants were following Linguál's Instagram account
                and were very interested in events, they just didn't know about
                them. The posts and stories I was creating didn't cut through
                the noise of busy scrollers. Going forward, I've learned that I
                need to push events at least 2x more than I have been, and
                really get the word out about new happenings.
              </p>
            </li>
          </ul>

          {/* End of Article Content */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyThree;
