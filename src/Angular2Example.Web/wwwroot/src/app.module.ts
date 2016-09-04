import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }					from './app.component';
import { routing, appRoutingProviders }	from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [AppComponent],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
