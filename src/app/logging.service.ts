import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  constructor() {}

  logStatusChange(status: string) {
    console.log('A Server Status Changed, New Server: ' + status);
  }
}
