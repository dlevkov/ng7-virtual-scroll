import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MaterialModule } from './material.module';
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListContainerComponent } from './containers/list-container/list-container.component';


@NgModule({
  declarations: [AppComponent, ListContainerComponent, ListItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxLoremIpsumModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
