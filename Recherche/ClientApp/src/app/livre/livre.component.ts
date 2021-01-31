import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'livre',
  templateUrl: './livre.component.html'
})
export class LivreComponent {
  public app: AppComponent;
  public titre: string;
  public nom: string;
  public prenom: string;
  public vie: string;
  public bookshelves: string;
  public droits: string;
  public type: string;
  public nbTelechargement: string;
  public linkContent: string;
  public router: Router;
  public tags: string[] = new Array(10);
  public isVisible: boolean[] = new Array(10);
  public isVisibleS: boolean[] = new Array(10);
  public sugg: string[] = new Array(10);
  public suggID: string[] = new Array(10);
  public hasSuggestion: boolean;
  public toSuggest: string;

  constructor(app: AppComponent, router: Router) {
    this.app = app;
    this.manageContent();
    this.app.setContent(this.linkContent);
    this.router = router;
    this.toSuggest = "Afficher suggestions";
    var sugg = this.app.getSugg();
    var t = Object.keys(sugg).length;
    console.log(sugg);
    if (t == 0)
      this.hasSuggestion = false;
    else
      this.hasSuggestion = true;
  }

  public manageContent() {
    var detail = this.app.getDetails();
    this.titre = detail['title'];
    this.nom = detail['authors']["0"]['last_name'];
    this.prenom = detail['authors']["0"]['first_name'];
    this.vie = detail['authors']["0"]['authorBirth'] + '-' + detail['authors']["0"]['authorDeath'];
    var t = detail['subjects'];
    var l = Object.keys(t).length;
    var j = this.min(l, 10);
    var i = 0;
    while (i < j) {
      this.isVisible[i] = true;
      this.tags[i] = t[i + ""];
      i = i + 1;
    }

    this.bookshelves = detail['bookShelves'];
    var d = detail['copyright'];
    if ("true" == d)
      this.droits = "Oeuvre sous copyright.";
    else
      this.droits = "Aucun copyright sur cette oeuvre.";

    this.type = detail['mediaType'];
    this.nbTelechargement = detail['downloadCount'];
    this.linkContent = detail['donwloadLink'];
  }

  public min(i, j) {
    if (i < j) {
      return i;
    }
    return j;
  }

  public read() {
    window.location.href = this.linkContent;
  }

  public suggestion(n: number) {
    this.app.setDetailID(this.suggID[n]);
    this.router.navigateByUrl("livre");
  }

  public suggestions() {
    if (!this.isVisibleS[0]) {
      var sugg = this.app.getSugg();
      var t = Object.keys(sugg).length;
      var i = 0;
      this.toSuggest = "Masquer suggestions";
      while (i < t) {
        this.suggID[i] = sugg[i + ""];
        this.sugg[i] = this.app.getTitreID(sugg[i + ""]);
        this.isVisibleS[i] = true;
        i = i + 1;
      }
    }
    else {
      this.toSuggest = "Afficher suggestions";
      var i = 0;
      while (i < 10) {
        this.isVisibleS[i] = false;
        i = i + 1;
      }
    }
  }

}
