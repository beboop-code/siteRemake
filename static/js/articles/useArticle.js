import { useEffect, useState } from 'react';

/**
 * Single source of truth for markdown files
 * @param {string} filename
 * @returns
 */
const useArticle = filename => {
  const [markdownText, setMarkdownText] = useState('');

  const markdownFile = filename
    ? require(`./${filename}`)
    : require('./missing-article.md');

  useEffect(() => {
    fetch(markdownFile)
      .then(res => res?.text())
      .then(text => setMarkdownText(text));
  }, [markdownFile]);

  return [markdownText];
};

export default useArticle;
