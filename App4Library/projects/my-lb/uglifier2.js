//// https://github.com/zohar1000/ng-lib-utils

const NgLibUtils = require('./node_modules/ng-lib-utils');

const config = { projectName: 'my-lb' };
const ngLibUtils = new NgLibUtils.NgLibUtils(config);
ngLibUtils.init().then();
