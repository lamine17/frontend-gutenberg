import { Component } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'contenue',
  templateUrl: './contenue.component.html'
})
export class ContenueComponent {
  public app: AppComponent;
  public contenue: string;

  constructor(app: AppComponent) {
    this.app = app;
    this.manageContent();
  }

  public manageContent() {
    var link = this.app.getContent();

  }


}
