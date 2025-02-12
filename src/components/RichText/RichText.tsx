import React from 'react';

import { serializeLexical } from './serialize';

export const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      {content
      && !Array.isArray(content)
      && typeof content === 'object'
      && 'root' in content
      && serializeLexical({ nodes: content?.root?.children })}
    </div>
  );
};
