import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from './../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent {
  @Input() accountEl: { name: string; status: string };
  @Input() id: number;

  //log = new LoggingService();
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, this.accountEl.status);
    //this.log.logStatusChange(status);
    this.loggingService.logStatusChange(status);
  }
}
