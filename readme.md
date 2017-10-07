# Generator qb-webpack

Yeoman generator - raw eslint and webpack with repository on github.

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
