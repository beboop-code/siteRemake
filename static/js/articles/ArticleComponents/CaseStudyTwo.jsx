import CryptoJS from 'crypto-js';
import EnterPassword from '../../components/EnterPassword/EnterPassword';
import useShouldOverride from '../useShouldOverride';
import '../ArticleStyles.css';
import { ENCRYPTED } from '../../components/constants';
import ArticleBanner from './ArticleBanner';

/* Almond Cow -- Conducting UX Research */
function CaseStudyTwo(props) {
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
        {/* BANNER */}
        <ArticleBanner article={article} />

        {/* Article Content */}
        <div className="article-body-container">
          <p>
            The{' '}
            <a
              href="https://www.almondCow.com"
              target="_blank"
              rel="noreferrer"
            >
              Almond Cow
            </a>{' '}
            machine is a specialty blender used to make plant-based milk at
            home. I was an early addition to the small team developing and
            marketing the product, and soon learned that we knew almost nothing
            about how and why consumers used our product. I then started
            conducting user tests and through these, found a recurring friction
            point: ingredient prep. Measuring, chopping, soaking, and mixing
            ingredients was a barrier to making homemade milk into a habit. This
            project is the evolution of this learning from problem
            identification to UX research to a full product launch.
          </p>
          <h3>The Challenge</h3>
          <p>
            Verify that a new product, a pre-measured blend of whole ingredients
            to help users make Almond Cow's most common milk blends, is
            something that consumers will find value in and will understand. If
            it isn't, make recommendations to the product team to change the
            ingredient mix and design to make it viable.
          </p>
          <h3>Research Methods Used</h3>
          <p>
            User testing | Participant Recruitment | Focus Groups | Surveys |
            Big Data Analysis and Crosstabs | UX Packaging Design
          </p>
          <h3>Team</h3>
          <p>
            One consultant (Alyssa Pelfresne) and 3 part-time Consumer Insights
            Specialists
          </p>
          <p>(myself, Lori Dreyer, Kaitlin Tapia)</p>
          <p>
            <strong>My role: </strong>Project Lead and Consumer Insights Analyst
          </p>
          <p>
            <strong>Project timeframe: </strong> 12 months
          </p>
          <h2>Problem Finding</h2>
          <h3>Initial User Testing</h3>
          <p>
            User testing was conducted to learn more about how people interacted
            with the machine. Over the course of the tests, including with
            current employees, I found that over 70% of those tested did not use
            the Almond Cow regularly (at least once a week), even though they
            had access to the machine and ingredients.
          </p>
          <h2>Testing Analysis</h2>
          <p>
            Further analysis showed that this was due to a large friction point
            at the onset of making milk: ingredient prep. There were many things
            centered around ingredient prep that people either didn't understand
            or didn't like to do. Some common examples are:
          </p>
          <ul>
            <li>
              <p>
                "I'm unsure if the nuts/oats needed to be soaked before use."
              </p>
            </li>
            <li>
              <p>
                "It was annoying to pit and chop dates." (the most commonly used
                sweetener in our online recipes)
              </p>
            </li>
            <li>
              <p>
                "It was annoying to have to open 2+ packages and measure out
                different amounts of ingredients if you wanted a blended milk."
              </p>
            </li>
            <li>
              <p>
                "Since I'm throwing stuff in without measuring, no two batches
                of milk turn out exactly the same."
              </p>
            </li>
            <li>
              <p>
                "Nuts are expensive, so I'm hesitant to experiment in case I
                don't like the end result."
              </p>
            </li>
          </ul>
          <h2>Solution Ideation</h2>
          <h3>Brainstorm</h3>
          <p>
            I led a series of brainstorming sessions and we came up with the
            following idea: A single-use packet filled with the ingredients
            needed to make 1 batch of milk. Basically, a K-Cup for our
            plant-milk maker.
          </p>
          <p>
            During this initial stage, I brought up a potential issue—through
            research, I knew that to many of our customers, the Almond Cow brand
            stands for sustainability. Many of our users are environmentally
            conscious and don't want to have to throw away milk packaging from
            the store, or support the transport of heavy gallons of plant-milk
            made mostly of water. We could lose loyal customers because a
            single-use sachet creates more waste than their current way of using
            the Almond Cow.
          </p>
          <blockquote>
            <p className="blockquote-title">New research questions 🔬</p>
            <ul>
              <li>
                <p>
                  How might we create a product that allows for greater
                  convenience without also creating extra waste?
                </p>
              </li>
              <li>
                <p>
                  Do our customers prioritize convenience or sustainability?
                </p>
              </li>
              <li>
                <p>How far are they willing to go for sustainability?</p>
              </li>
            </ul>
          </blockquote>
          <p>
            These were core questions that needed to be answered before the
            product team put any more resources into the project.
          </p>
          <h3>Proof of Concept</h3>
          <p>
            My mind immediately went to home compostability as a potentially
            acceptable solution to packaging waste. But did that even exist in a
            mass-producible format capable of holding oily food ingredients? The
            team wasn't sure, so I sourced some home compostable packaging
            vendors and procured samples to test.
          </p>
          <p>
            The tests went well, and step one of the proof of concept was
            complete. ✅
          </p>
          <h3>Survey of User Behavior</h3>
          <p>
            The second step was to tap our consumers to try to answer the
            questions above. For this, we chose to survey customers—people who
            already owned an Almond Cow machine.
          </p>
          <p>
            We sent a survey about compostability awareness/access and the
            perceived value proposition of the Almond Cow machine to help
            determine if these were specs people valued.
          </p>
          <div className="article-body-img-grid">
            <img
              src="/case-study-images/MM-asset-2-survey-q4.png"
              alt="N|Solid"
              style={{ width: '100%' }}
            />
            <img
              src="/case-study-images/MM-asset-2-survey-q2.png"
              alt="N|Solid"
              style={{ width: '100%' }}
            />
            <img
              src="/case-study-images/MM-asset-2-survey-q3.png"
              alt="N|Solid"
              style={{ width: '100%' }}
            />
            <img
              src="/case-study-images/MM-asset-2-survey-q5.png"
              alt="N|Solid"
              style={{ width: '100%' }}
            />
          </div>
          <p>
            High level summary data is great, but I also coded a custom
            calculator using MATLAB to help me automate looking at this survey
            through the lens of various segments as compared to the whole
            (crosstabs). This program allowed me to insert an Excel sheet, and a
            column I wanted to look at more closely and then get the rest of the
            data sheet compared to that specific column.
          </p>
          <blockquote>
            <p className="blockquote-title">
              The survey answers and crosstabs analysis led to interesting
              insights 💡
            </p>
            <ul>
              <li>
                <p>
                  Even in the sustainability space, many consumers are
                  ill-informed about sustainability practices. Many people
                  seemed to know primarily buzzwords, and didn't have much
                  deeper knowledge.
                </p>
              </li>
              <li>
                <p>
                  For some people, compostability was important to this product,
                  while for others recyclability and compostability were
                  interchangeable. If Almond Cow was going to invest heavily in
                  compostable packaging, it was going to be up to the brand to
                  educate our consumers on why this is the better option for the
                  planet.
                </p>
              </li>
            </ul>
          </blockquote>
          <p>
            With our initial questions answered, and the value proposition
            seemingly still important to people, we were ready to proceed to the
            next phase. ✅
          </p>
          <h3>Product Definition</h3>
          <p>
            In a presentation given to key stakeholders—including the company
            President, Head of Marketing, and Head of Product—we shared our
            initial insights and came up with a direction for the first true
            product prototype. There were going to be three flavors—our two most
            clicked-on recipes on our website, and a new flavor that was more
            labor-intensive to create at home. All would be packaged inside
            home-compostable sachets.
          </p>
          <h2>Solution Testing</h2>
          <h3>UX-informed Packaging Design</h3>
          <p>
            We decided to do a full production prototype run of each flavor,
            complete with prototype packaging, to allow us to user test the
            concept fully. I assisted the design team with UX feedback for the
            packaging design that would eventually inform the final product.
          </p>
          <p>
            UX copywriting and visual hierarchy were some things I assisted with
            on the package.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/MM-asset-4-frang-package.png"
              alt="N|Solid"
            />
          </div>
          <h3>User Testing</h3>
          <p>
            Our team requested access to 100 sachets of each flavor of this test
            product to use in user testing. With these, the testing steps were:
          </p>
          <ol className="article-body-list">
            <li>
              Send an email crafted to get their attention by asking potential
              testers (current Almond Cow owners) to fill out a quick survey if
              they wanted the chance to become a product beta tester. This
              survey was focused on machine use behavior and demographics. We
              then sent a secondary email to all survey takers asking them to
              fill out a composting behavior survey.
            </li>
            <li>
              Choose a subset of the 400+ takers of our composting survey to
              invite to participate in our product beta testing. From the
              previous 2 surveys they took, I was able to link each person's
              demographic/psychographic data with their composting data from the
              second survey, using email address as the primary key. I did this
              by coding an automated function in MATLAB (a common coding tool
              for manipulation of Excel sheets). I then generated a randomized
              sample from each of the following segments:
              <ul>
                <li>"Bought the Almond Cow to minimize waste"</li>
                <li>"Bought the Almond Cow for convenience"</li>
                <li>"Bought the Almond Cow to minimize costs"</li>
                <li>"Has young children"</li>
                <li>"Has no children"</li>
                <li>"Composts at home"</li>
                <li>"Composts at a municipal level"</li>
                <li>"Does not compost"</li>
              </ul>
            </li>
            I had hypotheses about how each segment would react differently to
            the product.
            <li>
              From the survey takers, I chose 100 people spread randomly and
              proportionally throughout each segment above. We emailed to let
              them know they had qualified to user test our beta product. To
              participate, we required a timely response from each candidate
              with their address and food allergies (our team made sure to not
              send users any prototype product they were allergic to).
            </li>
            <li>
              After we sent out 3 test sachets (one of each flavor) to each of
              the 100 testers, we created 2 post-test surveys for the 100
              testers to complete. One focused on relative flavor preferences of
              each ingredient blend and what people did with the blends after
              they made them. The second survey was a Van Westendorp Price
              Sensitivity Meter to help us determine willingness to pay.
            </li>
            <li>
              Seeing a live unboxing and first use experience was also very
              important to the team. Only in this setting were we going to get a
              full picture of what people saw and thought.
              <ul>
                <li>
                  At what point in the process did people understand the
                  concept? Was it easy to grasp, or would we need to create a
                  how-to guide to insert in the final package?
                </li>
                <li>
                  Which flavor did people decide to try first? Why did they
                  choose that one? Were people bored by simpler options that
                  were easy to recreate at home? (Excitement vs familiarity)
                </li>
                <li>
                  Did they notice the label saying it was compostable? Did they
                  care?
                </li>
              </ul>
            </li>
            <li>
              Of the 100 people sent the prototype, we were not going to be able
              to user test them all. We thought about requiring each person to
              video tape their unboxing and first use experience, but ultimately
              we knew our small team did not have the bandwidth to go over 100
              videos. Instead we chose 6 people from the 100 who we were going
              to user test live via Zoom. We created a script and guided them
              through the unboxing and first use experience, noting responses
              and asking key questions during the process.
            </li>
          </ol>
          <blockquote>
            <p className="blockquote-title">Insights from the user tests 💡</p>
            <ul>
              <li>
                There were 2 buckets of people when it came to first flavor
                choice - those who chose one that they already know and love, to
                see how it compared, and those who wanted the most "exotic"
                flavor, because it was not something they would make on their
                own. This told us that there was likely a market for both flavor
                types, as well as a variety pack.
              </li>
              <li>
                With the current packaging design, people did not realize that
                it was compostable.
              </li>
              <li>
                The value of the product was understood by some only after using
                it (a case for a free trial).
                <ul>
                  <li>
                    "Initially I didn't think that the packets would offer much
                    value over making milk with bulk ingredients since the
                    process of making milk with the Almond Cow is already very
                    quick, but it definitely came in handy. One night I realized
                    we were out of milk and was on the fence about making it.
                    Realizing I had the packets it only took 5 minutes to make
                    the milk and clean up. It was a luxury not having to
                    measure!"
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
          <p>
            Van Westendorp Pricing Analyses were conducted using the pricing
            survey data from each customer.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/MM-asset-4.5-van-westen.png"
              alt="N|Solid"
            />
          </div>
          <blockquote>
            <p className="blockquote-title">Insights from the surveys 💡</p>
            <ul>
              <li>
                <p>
                  With the survey, we were able to understand consumer flavor
                  preferences and make suggestions for product tweaks.
                </p>
              </li>
              <li>
                <p>
                  We learned what separates someone likely to purchase the
                  product from someone unlikely to purchase it. Unlikely
                  purchasers tended to make milk at home more frequently and
                  felt capable of making their own versions of our proposed
                  ingredient blends.
                </p>
              </li>
              <li>
                <p>
                  We found that the Van Westendorp analysis did not align well
                  with the live price fairness calculations during the user
                  tests. I decided to trust the user tests over the Van
                  Westendorp. One key finding that we did keep from the Van
                  Westendorp analysis was that people were willing to pay
                  different amounts for different flavors.
                </p>
              </li>
            </ul>
          </blockquote>
          <h3>Focus Groups</h3>
          <p>
            In anticipation of needing to answer a new round of questions
            brought up from the first round of insight generation with the
            prototype, we planned focus groups which were again taken from the
            subset of the 100 people who had tried the product. After presenting
            the insights from the user test and the survey to the team, we took
            any lingering questions that the internal stakeholders had and
            worked them into the focus group questioning.
          </p>
          <p>
            We conducted two groups, one with people who were likely to purchase
            and one with people who were unlikely to purchase the product, each
            with 3-7 participants via Zoom. We used this time to hone in on what
            feelings stuck with people after they finished using the product as
            well as understand what could be changed to entice the “rejectors”
            to purchase.
          </p>
          <p>
            Since we were getting closer to product launch, we also used this
            time to test the UX/UI of the product page on our website, as well
            as test some pricing.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/MM-asset-5-focus-group-website.png"
              alt="N|Solid"
            />
          </div>
          <p>Product Display Page Mockup shown to focus group</p>
          <blockquote>
            <p className="blockquote-title">
              Insights from the focus groups 💡
            </p>

            <ul>
              <li>
                <p>
                  Tested price was positively received by consumers in both
                  groups. Of those not willing to purchase, their issue was that
                  they did not need a 6-pack of flavors that they made
                  regularly. But the price was favorable enough that many
                  considered buying one 6-pack to have on-hand for emergencies.
                </p>
              </li>
              <li>
                <p>
                  This product concept was inspiring to many people who make the
                  same milk over and over. Many people want to be more
                  adventurous with their Almond Cow after trying different
                  flavors and seeing what's possible.
                </p>
              </li>
            </ul>
          </blockquote>
          <p>
            This final round of quantitative data and actionable suggestions was
            delivered to stakeholders. Suggestions included
          </p>
          <ul>
            <li>
              <p>Website product display page changes</p>
            </li>
            <li>
              <p>Price confirmation</p>
            </li>
            <li>
              <p>Direction for future additions to this product line</p>
            </li>
          </ul>
          <h2>Product to Market</h2>
          <h3>Product Launch!</h3>
          <p>
            With the pricing, messaging, packaging, and value proposition
            confirmed by our team with extensive testing, the company President
            felt confident launching the prototype into full production.
          </p>
          <p>
            Upon launch, the product immediately had momentum thanks to solid
            marketing and product-market fit and sold out within 3 months. A
            large percentage of customers also repurchased the product, showing
            us that we hit the mark. The success of the product sales have since
            converted it into a SKU that is stocked permanently, and it has
            become the centerpiece of many brand promotions.
          </p>
          <h3>Post Launch Pulse</h3>
          <p>
            In the weeks following the product launch, I wanted to continue
            collecting data on what drove people to buy the product. I
            implemented a post-purchase popup survey that was shown to all
            customers who bought the product within 3 months of launch. The 100s
            of responses helped us further refine our understanding of the
            product, and how to market it in the future.
          </p>
          <div className="article-body-img-container">
            <img
              src="/case-study-images/MM-asset-6-postlaunch.jpeg"
              alt="N|Solid"
            />
          </div>
          <h2>Learnings</h2>
          <ul>
            <li>
              This was the first end-to-end product launch project I have been a
              part of, and yet I was leading it. I was sometimes unsure about
              the process I was leading the team through, but I kept coming back
              to my North Star by answering "do people find value in this
              product"? A big learning came at the end with a successful launch.
              We did the research we did do in an unbiased manner and got
              helpful results and a correct pulse on the market.
            </li>

            <li>
              Segment your data to get deeper insights! In our survey data, we
              used crosstabs to see how people who belonged to certain
              psychographic groups were different from one another. This helped
              us understand what drove certain people to enjoy the product, and
              enabled us to craft our marketing messaging. It also guided in our
              focus groups (likely to purchase group vs unlikely to purchase
              group).
            </li>

            <li>
              Customers love to be heard and to have the chance to provide
              product feedback. Our call for product testers in "repayment" for
              people filling out a few surveys was a resounding success. It gave
              us a plethora of real customer data, and was practically free to
              get (no monetary survey incentives).
            </li>
          </ul>
          {/* End of Article Content */}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyTwo;
