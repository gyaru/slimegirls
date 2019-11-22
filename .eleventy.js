const htmlmin = require("html-minifier");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyURLs: true
      });
      return minified;
    }
    return content;
  });
};