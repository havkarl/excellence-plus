// See http://brunch.io for documentation.

exports.config = {
  npm: {
    enabled: true,
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    },
    styles: {
      bootstrap: ['dist/css/bootstrap.css'],
      '@fortawesome': ['fontawesome/styles.css']
    }
  },

  files: {
    javascripts: {
      joinTo: {
        'vendors.js': /^(?!app\/)/,
        'app.js': /^app\//
      }
    },
    stylesheets: {
      joinTo: {
        'vendors.css': /^(?!app\/)/,
        'app.css': /^app\//
      }
    }
  }
};
