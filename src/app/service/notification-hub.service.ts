import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class NotificationHubService {

  public connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44368/notificationHub",{
    skipNegotiation: true,
    transport:signalR.HttpTransportType.WebSockets
  }).configureLogging(signalR.LogLevel.Debug).build();
  constructor() { }

  public startConnection(): void {
    this.connection
      .start()
      .then((res) => {
        console.log(this.connection)
        this.connection.send('SendMessageToCaller', "hai");
      }).catch(err => {
        this.stopHubAndunSubscribeToServerEvents();
        this.restartConnection(err);
      });
      this.connection.on('BroadcastMessage', (datalist: any) => {
        console.log(datalist);  
     });
  }

  private restartConnection(err: Error): void {
    console.log(`Error ${err}`);
    console.log('Retrying connection to SignalR Hub ...');
    setTimeout(() => {
      this.startConnection();
    }, 10000);
  }

  public stopHubAndunSubscribeToServerEvents(): void {
    this.connection.off('BroadcastMessage');
    this.connection.stop().then(() => console.log('Hub connection stopped'));
  }
}
