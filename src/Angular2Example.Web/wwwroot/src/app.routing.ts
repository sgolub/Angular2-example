import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent }    from './home/home-page.component';
import { SizePageComponent }  from './size/size-page.component';

const appRoutes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'size-example', component: SizePageComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
