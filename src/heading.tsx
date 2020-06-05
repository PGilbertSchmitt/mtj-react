import { FunctionComponent as FC, createElement } from 'react';
import { Heading as HeadingNode } from 'mtj-parser';

import { mapSubNodes } from './sub_node';

// Using createElement directly since the header level is dynamic (based on props)
const Heading: FC<{ node: HeadingNode }> = ({ node }) => createElement(
  `h${node.size}`,
  { className: `marked-h${node.size}` },
  mapSubNodes(node.parts),
);

export default Heading;
