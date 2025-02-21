/* Components */
import Text from '../../components/Text/Text';
import PortfolioItem from '../../components/PortfolioComponents/PortfolioItem';

/* Constants */
import { articleMap } from '../../articles/articleMap';
import { GREETINGS, HEADER, SUB_HEADER } from '../../components/constants';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/* Portfolio */
function Portfolio() {
  const { search } = useLocation();
  const [, key] = search?.split('?key=');

  useEffect(() => {
    if (key) {
      window.sessionStorage.setItem('key', key);
    }
  }, [key]);

  return (
    <section className="portfolio-container">
      {/* Text Block */}
      <Text type={HEADER}>{GREETINGS}</Text>
      <Text type={SUB_HEADER}>{"Here's a sample of my recent work "}</Text>

      {/* Case Studies */}
      <div className="portfolio-table-of-contents">
        {articleMap.map((dataItem, idx) => (
          <PortfolioItem
            key={`case-study-${idx}-item`}
            itemIndex={idx}
            dataItem={dataItem}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
