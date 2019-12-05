module.exports = {
  pages: {
    home: {
      // entry for the page
      entry: "src/views/home/index.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "home"]
    },
    about: {
      // entry for the page
      entry: "src/views/about/index.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "about.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "about"]
    }

    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    //   subpage: 'src/subpage/main.js'
  }
};
