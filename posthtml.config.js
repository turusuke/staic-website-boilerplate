module.exports = {
  plugins: [
    require('posthtml-include')({ root: 'src' }),
    require('posthtml-expressions'),
    require('posthtml-w3c'),
    require('posthtml-beautify')({ rules: { indent: 2 } }),
  ],
}
