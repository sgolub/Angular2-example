"use strict";
var router_1 = require('@angular/router');
var home_page_component_1 = require('./home/home-page.component');
var size_page_component_1 = require('./size/size-page.component');
var appRoutes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'size-example', component: size_page_component_1.SizePageComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map