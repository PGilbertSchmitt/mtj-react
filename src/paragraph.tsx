import React, { FunctionComponent as FC } from 'react';
import { Paragraph as ParagraphNode } from 'mtj-parser';

import { mapSubNodes } from './sub_node';

const Paragraph: FC<{ node: ParagraphNode }> = ({ node }) => (
  <p className='marked-p'>
    {mapSubNodes(node.parts)}
  </p>
);

export default Paragraph;
