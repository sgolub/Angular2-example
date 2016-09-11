import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-operators';

import { AppComponent }					from './app.component';
import { routing, appRoutingProviders }	from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		routing
	],
	declarations: [AppComponent],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
