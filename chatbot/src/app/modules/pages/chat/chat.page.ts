import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';
import { IMessage } from 'src/app/shared/model/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('content') private content: any;

  public messageList: IMessage[] = [];
  public message: string;
  public loading: boolean;

  public text = 'Unibot esta escribiendo...';

  constructor(
    private readonly restServ: RestService
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.messageList = [
      {
        user: 'bot',
        message: 'Hola Bienvenido soy el asistente virtual de ayuda al postulante, me llamo UniBot',
        time: new Date().getTime()
      }
    ];
  }

  sendMessage(): void {

    this.loading = true;

    const userMessage: IMessage = {
      user: 'user',
      message: this.message,
      time: new Date().getTime()
    };

    this.messageList.push(userMessage);
    this.scrollToBottomOnInit();
    this.restServ.sendMessage(userMessage).toPromise()
      .then(res => {
        this.loading = false;
        this.text = 'Unibot esta escribiendo...';
        this.messageList.push({...res, time: new Date().getTime()});
      })
      .catch(err => {
        this.loading = false;
        this.text = 'Error de conexión';
        console.error(err);
      });

    this.message = '';
  }

  scrollToBottomOnInit() {
    this.content.scrollToBottom(300);
  }
}
