import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addNewAccount(name: string, status: string) {
    this.accounts.push({ name, status });
  }
  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
  constructor() {}
}
