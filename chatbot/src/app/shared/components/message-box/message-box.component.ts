import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../model/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {

  @Input() messages: IMessage[] = [];

  currentUser = 'bot';

  constructor() { }

  ngOnInit(): void { }

}
