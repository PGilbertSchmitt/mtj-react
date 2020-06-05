# MTJ-React
## The Markdown-to-JSON React component

Very simply, this is a react component that accepts a string of markdown-styled text, and renders it into nested React components, though you only need to be aware of the single exported component.

The motivation to create this library is a selfish one, in that I don't trust other parsers that convert Markdown into HTML. There are two steps:

1. Create a parser that turns Markdown into a nested (tree-based) representation to best capture the nested nature of the styling. Because I couldn't even find something like _that_, I implemented my own: [mtj-parser](https://github.com/PGilbertSchmitt/mtj-parser). It wraps [markdown-it](https://github.com/markdown-it/markdown-it) (which I had no hand in), converting its flat representation into a more usable JSON. It's worth noting that `markdown-it`'s intermediate format is better for directly creating HTML (which is what it's for), but for React, it's better to have a tree.

2. Take the tree form of a markdown document and recursively wrap the nodes in React components, which is all that this library exists to do. Theoretically, the design of this library could be such that making live edits to the Markdown document could be optimized by only having to rerender the sections of the markdown tree that have changed and leave the rest alone, but that's a stretch goal for this project (which already does it's job pretty quickly).

That's all there is to it. By using this library, I can guarantee that no documents have injectable HTML (which means no injectable script tags) because it's not an output produced by the parser. I'm not sure if there are other ways that scripts can be injected into the page besides that, but I will certainly try to find out.

### Install

`npm install mtj-react`

### How-to

The `Markdown` component, which is the only exported element, takes two required props:

```TS
interface OwnProps {
  // Used to style it based on the context
  customClass: string;

  // The source from which it builds the article
  markdown: string;
}
```

The `customClass` is added to the base component as a classname along with `marked`, so that multiple documents can exist on the same page and receive different styling.

The `markdown` prop is literally just a string containing Markdown-formatted text.

Usage:
```TSX
import { Markdown } from 'mtj-react';

const MyComponent = ({ markdownText: string }) => (
  <Markdown customClass='project-page' src={markdownText} />
);
```
