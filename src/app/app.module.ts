import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  bootstrap: [AppComponent],
  providers: [AccountService, LoggingService]
})
export class AppModule {}
