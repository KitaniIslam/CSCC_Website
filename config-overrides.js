const {override,fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': "#1E1E2C",
            '@layout-header-background': "#1E1E2C"
        },
    }),
);