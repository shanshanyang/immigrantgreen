const merge = require('deepmerge');

module.exports = neutrino => {
  neutrino.config.module
    .rule('lint')
      .use('eslint')
        .tap(options => merge(options, {
          rules: {
            semi: 'off'
          }
        }));
};