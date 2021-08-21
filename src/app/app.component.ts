import { Component, VERSION, OnInit, OnChanges } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
