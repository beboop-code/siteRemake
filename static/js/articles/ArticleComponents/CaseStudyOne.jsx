import CryptoJS from 'crypto-js';
import EnterPassword from '../../components/EnterPassword/EnterPassword';
import useShouldOverride from '../useShouldOverride';
import '../ArticleStyles.css';
import { ENCRYPTED } from '../../components/constants';
import ArticleBanner from './ArticleBanner';

/* Almond Cow -- Reducing Machine Damage */
function CaseStudyOne(props) {
  const { article, setGivenPassword } = props;
  const givenPassword = window.sessionStorage.getItem('password');
  const encryptedPw = CryptoJS.MD5(givenPassword).toString(CryptoJS.enc.Hex);
  const shouldOverride = useShouldOverride();

  if (encryptedPw !== ENCRYPTED && !shouldOverride) {
    return <EnterPassword setGivenPassword={setGivenPassword} />;
  }

  return (
    <div className="article-box">
      <div className="new-article-container">
        {/* Banner */}
        <ArticleBanner article={article} />

        {/* Article */}
        <div className="article-body-container">
          <h3>The Challenge</h3>
          <p>
            The{' '}
            <a href="https://almondcow.co/" target="_blank" rel="noreferrer">
              Almond Cow
            </a>{' '}
            machine is a specialty blender used to make plant-based milk at
            home. Because most people have never used anything like it,
            customers do not have a mental model of how it works. This often
            leads to incorrect usage, including incorrect assembly resulting in
            breaking a machine component upon first use.
          </p>
          <p>
            To fix this, we had to figure out what people were doing wrong, and
            then message the fix in a way that both made sense and captured the
            user's attention.
          </p>
          <h3>Research Methods Used</h3>
          <p>
            UX Packaging Design | UX Copywriting | Product Return Data Analysis
            | User Testing | Participant Recruitment | Design Briefs | Outside
            Partners | Design Iteration
          </p>
          <h3>Team</h3>
          <p>
            Just me until halfway through. Then we added three contracted
            professionals in the design thinking space: Mark Moneypenny, Erick
            Rios, Shari Moore.
            <br />
            <span style={{ fontWeight: '1000' }}>{`My role: `}</span>
            UX Researcher, Project Manager, and internal liaison
            <p>
              <strong>Project timeframe: </strong> 8 months
            </p>
          </p>
          <h2>Finding the Extent of the Problem</h2>
          <h3>Customer Service Ticket Dive</h3>
          <p>
            The filter basket is an essential piece of the machine, but it is
            common to accidentally not screw it tight enough onto the rest of
            the assembly. I asked Customer Service to keep track of this problem
            in separate buckets depending on whether someone incorrectly put on
            the filter basket during their first 1-2 times using the machine, or
            if it is later.
          </p>
          <p>
            After collecting segregated results for a few months, we saw that 7%
            of all machines were breaking (see image below) during the first 1-2
            times they were being used due to user error in tightening this
            critical part of the blender assembly.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-2-shredded.jpeg"
              alt="N|Solid"
              style={{
                height: '300px',
                width: 'auto'
              }}
            />
          </div>
          <h3>In-person User Tests to Find the Root of the Problem</h3>
          <p>
            There were many things that could be going wrong and leading to the
            shredded basket end result, so I needed to figure out if there were
            any patterns in what was happening.
          </p>
          <p>
            I performed five in-person user tests to watch as they used the
            machine for the first time. This basket uses left-hand tightening
            instead of the traditional right-hand tightening (think
            righty-tighty), which was a known issue that could not be easily
            changed in our manufacturing process.
          </p>
          <p>
            Our manual currently tried to address the issue with detailed
            instructions, but it was revealed during testing that
            (unsurprisingly) many people do not read the manual. Further inquiry
            into our larger customer base confirmed this.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-3-survey.png"
              alt="N|Solid"
              style={{ width: '90%' }}
            />
          </div>
          <blockquote>
            <p className="blockquote-title">
              Insights from the user tests and survey 💡
            </p>
            <ul>
              <li>
                <p>
                  People expect products to be so simple that they can properly
                  intuit how to use them. A major UX principle confirmed-neat!
                </p>
              </li>
              <li>
                <p>
                  Even though people would look at the lock icon on the basket
                  showing them which way to turn it (left-hand tightening), they
                  still did it incorrectly.
                </p>
                <ul>
                  <li>
                    <p>
                      A few experiments showed this to be an issue of hand
                      dominance-the dominant hand followed the lock icon,
                      regardless of whether that hand was on the top of the
                      blender or the basket. Meaning that when the hand was on
                      the top, it was turning everything in the opposite
                      direction.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
          <h2>Designing and Testing a Solution</h2>
          <h3>Intervention Design - First Pass</h3>
          <p>
            The best way to tell people who don't read manuals how to use an
            appliance for the first time is with “unboxing inserts”. These are
            papers or stickers that are put in key locations on a device and are
            meant to be thrown away after assembling or using a product for the
            first time.
          </p>
          <p>
            I had an idea to place one of these inserts <em>inside</em> the
            filter basket. So people won't see it as they disassemble the
            machine for the first time (since it comes assembled, and they won't
            need it then), but they will have the insert handy for when they
            reassemble it.
          </p>
          <p>
            I compiled the insights I found above, along with design
            recommendations, into a design brief and passed the baton to the
            design team. On their first pass they came back with the following.
            This wasn't quite expressing ways to fix the heart of the problem.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-4-insert-1.png"
              alt="N|Solid"
            />
          </div>
          <p>
            For the rest of the project I worked more closely with the design
            team—organizing design calls, and commenting profusely in Figma—to
            create inserts that make sense from a UX perspective. My role was
            providing UX advice as it evolved from the above to this:
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-4-insert-2.png"
              alt="N|Solid"
            />
          </div>
          <p>And finally to this:</p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-4-insert-3.png"
              alt="N|Solid"
            />
          </div>
          <p>
            It was now a 2-sided insert and finally ready to test! The thought
            process that got me from the starting line to here was focusing
            solely on the dominant hand doing the work. I asked the design team
            to experiment with color and have just the items that were moving be
            colorful. The flip side of the insert was meant to elicit attention
            in an “on-brand” manner without being overly frightening.
          </p>
          <h3>Field Test 1</h3>
          <p>
            To test it, we sent it directly to the real world. I contracted a
            printing company to print 200 of these inserts which were then sent
            to our fulfillment warehouse. 200 machines were retrofit with this
            insert sitting inside the filter basket - the part that we often saw
            consumers use incorrectly. We then sent out these retrofit units
            randomly along with our other machine orders, and tracked these
            special 200 and the rate at which they had this same first time use
            issue of breaking the filter basket.
          </p>
          <p>
            The problem? The broken filter basket rate only went down from 7% to
            6%. Not good enough.
          </p>
          <h3>Second Pass</h3>
          <p>
            So I started again with the help of some outside contracted UX
            designers. I started by putting together a detailed, digestible
            design brief to get them quickly up to speed:
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-5-design-brief.png"
              alt="N|Solid"
            />
          </div>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-5-unboxing-steps.png"
              alt="N|Solid"
            />
          </div>
          <p>
            The rest of the process consisted of a brainstorm and then ideation
            of different concepts to make the insert more salient.
          </p>
          <p>
            Eventually after a lot of design iteration, we ended up with this:
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/FB-asset-6-final-insert.png"
              alt="N|Solid"
            />
          </div>
          <p>
            Some key UX design features that I helped make and advocate for:
          </p>
          <ul>
            <li>
              <p>
                Stepping outside brand colors to make the warning more salient
              </p>
            </li>
            <li>
              <p>
                Larger paper with placement outside the basket. In version 1
              </p>
            </li>
            it was inside the basket, which may have hurt view rate
            <li>
              <p>
                Simple, 2-step process with the steps clearly outlined (push in,
                then twist)
              </p>
            </li>
          </ul>
          <h3>Field Test 2</h3>
          <p>
            This time we didn't test a trial run due to time constraints.
            Instead, we launched it straight into production and started
            shipping thousands of units with the new insert inside.
          </p>
          <p>
            After tracking these new shipments for a few months, we found that
            this specific first use error went down to affecting only 2% of
            customers, down 71% from the rate before this intervention.
          </p>
          <p>
            Not only did this save the company from creating more broken part
            waste and saved $100,000+ by reducing returns and replacements, but
            this also allowed us to be confident enough in our product to offer
            it on 3rd party sales channels such as Amazon.
          </p>
          <div className="article-body-img-container">
            <img src="/case-study-images/FB-asset-7-graph.png" alt="N|Solid" />
          </div>
          <h2>Learnings</h2>
          <ul>
            <li>
              <p>
                Unless your audience is millions of people, subtle designs and
                changes don't always make a measurable impact. Be bold and
                advocate for large changes that will more easily draw a user's
                attention.
              </p>
            </li>
            <li>
              <p>
                Testing is key! Performing user tests throughout the process and
                then bigger in-field quantitative tests at key checkpoints make
                the process lean, while still being backed by data.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyOne;
