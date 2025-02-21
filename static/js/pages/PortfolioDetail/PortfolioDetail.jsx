/* External Libraries */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* Components */
import Article from '../../components/Article/Article';

/* Article Components */
import CaseStudyOne from '../../articles/ArticleComponents/CaseStudyOne';
import CaseStudyThree from '../../articles/ArticleComponents/CaseStudyThree';
import CaseStudyFour from '../../articles/ArticleComponents/CaseStudyFour';
import CaseStudyFive from '../../articles/ArticleComponents/CaseStudyFive';
import CaseStudyTwo from '../../articles/ArticleComponents/CaseStudyTwo';

/* Portfolio Details */
function PortfolioDetail({ articleMap }) {
  const { pathname } = useLocation();

  /* Hold password in state */
  const [givenPassword, setGivenPassword] = useState('');

  /* Move mouse to top of page on load */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [, , path] = pathname.split('/');
  const currentArticle = articleMap.find(article => article.url === path);

  /* HTML Case Studies vs. Markdown Case Studies */
  switch (path) {
    case 'first-use-errors':
      return (
        <CaseStudyOne
          givenPassword={givenPassword}
          setGivenPassword={setGivenPassword}
          article={currentArticle}
        />
      );
    case 'conducting-ux-research':
      return (
        <CaseStudyTwo
          givenPassword={givenPassword}
          setGivenPassword={setGivenPassword}
          article={currentArticle}
        />
      );
    case 'lingual':
      return <CaseStudyThree article={currentArticle} />;
    case 'jar-hero':
      return <CaseStudyFour article={currentArticle} />;
    case 'modular-wooden-tabletop':
      return <CaseStudyFive article={currentArticle} />;
    default:
      return (
        <div className="portfolio-detail-container">
          <Article
            filename={currentArticle.filename}
            article={currentArticle}
          />
        </div>
      );
  }
}

export default PortfolioDetail;
