# <%= packageName %>

*Work in progress.*


## Installation
`npm i <%= packageName %>`

## Usage

```javascript

const <%= codeName %> = require('<%= packageName %>');

import  <%= codeName %>  from '<%= packageName %>';

```

## Adding Preact
1. Install packages:
`npm i preact babel-plugin-transform-react-jsx`
`npm i -D eslint-plugin-react`
2. Modify `tools/webpack.config.js`. Add option to javascript loader:
```javascript
  plugins: [
    ['transform-react-jsx', {
      pragma: 'h'
    }]
]
```
