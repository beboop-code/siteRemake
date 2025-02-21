/* External Libraries */
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/* Hooks */
import useArticle from '../../articles/useArticle';

/* Local Files */
// import './MarkdownArticle.css';

function Article({ filename }) {
  const [markdownText] = useArticle(filename);

  return (
    <div className="article-container">
      <Markdown children={markdownText} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

Article.propTypes = {
  filename: PropTypes.string.isRequired
};

export default Article;
