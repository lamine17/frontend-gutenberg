import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public router: Router;
  public http: HttpClient;
  public url: string;
  public baseUrl: string;
  public data: any;
  public nb_results: number = 10;
  public tabl;
  public tabi;
  public app: AppComponent;

  constructor(http: HttpClient, router: Router, app: AppComponent, @Inject('BASE_URL') baseUrl: string) {
    this.router = router;
    this.http = http;
    this.app = app;
    this.baseUrl = baseUrl;
    this.url = this.app.getUrl();
  }



  public getBooks(livre: string) {

    var JSONLivres = this.app.getjson();
    var tabl = new Array(this.nb_results);
    var tabi = new Array(this.nb_results);
    //Obtenir les dix livres contenant ce mot
    /* requete http
     *
     * http.get<JSON>(baseUrl + url).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
    })*/

    var i = 0;
    while (i < this.nb_results) {
      var l = JSONLivres["" + i];
      tabi[i] = (l['book'])['id'];
      tabl[i] = (l['book'])['title'];
      i = i + 1;
    }
    this.tabl = tabl;
    this.tabi = tabi;
  }
  //lance la page livre avec les dix premiers livre trouvé
  public rechercher(book: any) {
    this.getBooks(book.value);
    this.app.setLivres(this.tabl, this.tabi);
    this.router.navigateByUrl('/counter');
  }

}
