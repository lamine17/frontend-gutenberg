import { Component } from '@angular/core';
import { sql } from 'mssql';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  public livres: any[];
  public livresId: any[];
  public url: string = "wordOcc";
  public details: any;
  public link: string;

  constructor() {

  }

  public setLivres(livres:any[], livresId:any[]) {
    this.livres = livres;
    this.livresId = livresId;
  }

  public getLivres() {
    return this.livres;
  }

  public getUrl() {
    return this.url;
  }

  public getLivresId() {
    return this.livresId;
  }

  public setDetails(detail:string) {
    this.details = detail;
  }

  public getDetails() {
    return this.details;
  }

  public setContent(link: string) {
    this.link = link;
  }

  public getContent(){
    return this.link; 
  }

}
