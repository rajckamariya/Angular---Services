import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from './../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() accountEl: { name: string; status: string };
  @Input() id: number;

  //log = new LoggingService();
  constructor(private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe((status: string) => {
      alert('New Acount Status:' + status);
    });
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
