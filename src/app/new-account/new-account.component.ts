import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) accName: ElementRef;
  @ViewChild('typeInput', { static: false }) accType: ElementRef;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  onAccountAdded() {
    this.accountService.addNewAccount(
      this.accName.nativeElement.value,
      this.accType.nativeElement.value
    );
    this.accountService.statusUpdate.emit(this.accType.nativeElement.value);
  }
}
