import React, { FunctionComponent as FC } from 'react';
import { Blockquote as BlockquoteNode } from 'mtj-parser';

import { mapSubNodes } from './sub_node';

const Blockquote: FC<{ node: BlockquoteNode }> = ({ node }) => (
  <q className='marked-q'>
    {mapSubNodes(node.parts)}
  </q>
);

export default Blockquote;
