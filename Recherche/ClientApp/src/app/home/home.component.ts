import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public router: Router;
  public app: AppComponent;

  constructor(router: Router, app: AppComponent) {
    this.router = router;
    this.app = app;
  }



  public getBooks(livre: string) {
    this.app.recherche(livre);
  }
  //lance la page livre avec les dix premiers livre trouvé
  public rechercher(book: any) {
    this.getBooks(book.value);
    this.router.navigateByUrl('/counter');
  }

}
