import React, { FunctionComponent as FC } from 'react';
import { parseMarkdown } from 'mtj-parser';

import { baseNodeToComponent } from './base_node';

interface OwnProps {
  // Used to style it based on the context
  customClass: string;

  // The source from which it builds the article
  markdown: string;
}

export const Markdown: FC<OwnProps> = ({ customClass, markdown }) => {
  const src = parseMarkdown(markdown);
  console.log('Re-parsing text is bad, m\'kay?');
  return (
    <div className={`marked ${customClass}`}>
      {
        src.map((node, key) => (
          baseNodeToComponent(node, key)
        ))
      }
    </div>
  );
};
