//// https://www.npmjs.com/package/ngx-uglifier

const NgxUglifier = require('./node_modules/ngx-uglifier');
// const NgxUglifier = require('ngx-uglifier');

const config = {
	projectName: 'my-lb'
}

const ngxUglifier = new NgxUglifier.NgxUglifier(config);
ngxUglifier.init().then(() => console.log(`ngx-uglify ended successfully, the uglified code is placed at ${config.destParentFolder}/${config.projectName}.`));