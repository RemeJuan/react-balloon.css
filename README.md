<!-- TITLE/ -->

<h1>React Balloon.css</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

A react styled-components implementation of kazzkiq's balloon.css

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/react-balloon.css" title="Nodei.co badge"><img src="https://nodei.co/npm/react-balloon.css.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/RemeJuan/react-balloon.css" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/RemeJuan/react-balloon.css/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/react-balloon.css" title="View this project on NPM"><img src="https://img.shields.io/npm/v/react-balloon.css.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/react-balloon.css" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/react-balloon.css.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/RemeJuan/react-balloon.css" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/RemeJuan/react-balloon.css.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


[Demo](http://react-balloon.css-demo.surge.sh)

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

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/RemeJuan/react-balloon.css/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2017+ <a href="http://www.remelehane.me">Reme Le Hane</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
