import { articlePropType } from '../articleMap';

function ArticleBanner({ article }) {
  const {
    title,
    subTitle,
    bannerImg: { src, alt }
  } = article;

  return (
    <>
      <div className="article-banner-container">
        <h1>{title}</h1>
        <h2 className="new-article-sub-heading">{subTitle}</h2>
      </div>
      <img src={src} alt={alt} className="new-article-banner" />
    </>
  );
}

ArticleBanner.propTypes = articlePropType;

ArticleBanner.defaultProps = {
  bannerImg: {
    alt: 'Banner for Article'
  },
  subTitle: ''
};

export default ArticleBanner;
