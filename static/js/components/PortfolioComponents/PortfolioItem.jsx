import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import './PortfolioComponents.css';
import { TEXT } from '../constants';

function PortfolioItem(props) {
  const { dataItem, itemIndex } = props;
  const [shouldShowText, setShouldShowText] = useState(false);

  return (
    <Link
      to={`/portfolio/${dataItem.url}`}
      className="portfolio-item"
      state={dataItem}
      key={`row-${itemIndex}`}
    >
      <img
        alt={dataItem.img.alt}
        src={dataItem.img.src}
        className="portfolio-item-img"
        onMouseEnter={() => setShouldShowText(true)}
        onMouseLeave={() => setShouldShowText(false)}
      />
      {shouldShowText && (
        <div
          className="portfolio-item-hovered"
          onMouseEnter={() => setShouldShowText(true)}
          onMouseLeave={() => setShouldShowText(false)}
        >
          <Text type={TEXT} className="portfolio-item-text">
            <span className="portfolio-item-text-title">{`${dataItem.title}:`}</span>
            <span className="portfolio-item-text-sub-title">
              {dataItem.subTitle}
            </span>
          </Text>
        </div>
      )}
    </Link>
  );
}

export default PortfolioItem;
