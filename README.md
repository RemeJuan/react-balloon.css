# react-balloon.css
A react styled-components implementation of kazzkiq's balloon.css

[![Build Status](https://travis-ci.org/RemeJuan/react-balloon.css.svg?branch=master)](https://travis-ci.org/RemeJuan/react-balloon.css)

# Usage

Simply install using `npm install react-balloon.css` or `yarn add react-balloon.css`

You can then wrap it around any component passing at least the `message` prop through.

## Example

```
import Tooltip from 'react-balloon.css';

...
<Tooltip message={'Tooltip message'}>
  <ButtonComponent />
<Tooltip>
...

```

## Available props

```
message[undefined]: String;
length[fit]: String (small|medium|large|xlarge|fit)
blockChild[false]: Boolean (when wrapping around block element eg: h1)
always[false]: Boolean (Always display)
position[top]: String (top|bottom|left|right)
```

# Contributing
1. Clone repo: `https://github.com/RemeJuan/react-balloon.css`
2. Run `yarn install`
3. Make changes in `lib/index.js`
4. Run tests: `yarn test` / `yarn test:watch`
5. Create PR

# Credits
* Original Balloon.css: [kazzkiq](https://github.com/kazzkiq/balloon.css)
* [Styled Components](http://styled-components.com)
* [Styled-Tools](https://github.com/diegohaz/styled-tools)