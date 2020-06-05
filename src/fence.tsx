import React, { FunctionComponent as FC } from 'react';
import { Fence as FenceNode } from 'mtj-parser';

// This will need code highlighting at some point, but it is not necessary yet for my needs
const Fence: FC<{ node: FenceNode }> = ({ node }) => (
  <div className='marked-fence'>
    <pre>
      <code className={node.lang === '' ? 'nohighlight' : node.lang}>
        {node.value}
      </code>
    </pre>
  </div>
);

export default Fence;
