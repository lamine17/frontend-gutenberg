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
  public urlR: string = "/v1/api/search";
  public urlB: string = "/v1/api/book";
  public details: any;
  public sugg: JSON = JSON.parse('[]');
  public link: string;
  public nb_results = 10;

  public json: JSON;
  public cookieID: string = 'livreGutenbergSU';

  public d: string = '{"id": 1342, "title": "Pride and Prejudice","authors": [ {"last_name": "Austen", "first_name": "Jane","authorBirth": "1775", "authorDeath": "1817" }],"subjects": ["Courtship -- Fiction","Domestic fiction", "England -- Fiction", "Love stories", "Sisters -- Fiction", "Social classes -- Fiction", "Young women -- Fiction"],\
  "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text", "donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt", "downloadCount": 57065}'

  public testS: string = '{ "searchResponses": [    {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64}, \
                   {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
               {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                 {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                   {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
              {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                 {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                 {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                   {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64},\
                  {      "hash": "kkksqslmjfn#",       "book": {        "id": 1342,       "title": "Pride and Prejudice",       "authors": [          {            "last_name": "Austen",           "first_name": "Jane",           "authorBirth": "1775",           "authorDeath": "1817"          }        ],        "subjects": [         "Courtship -- Fiction",          "Domestic fiction",         "England -- Fiction",          "Love stories",       "Sisters -- Fiction",          "Social classes -- Fiction",\
          "Young women -- Fiction" ],       "bookShelves": [ "Best Books Ever Listings", "Harvard Classics" ], "copyright": false, "mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065},"words": [{"str": "with","occurrences": 1024}, {"str": "without","occurrences": 86 }], "accuracy": 0.64}],"suggestions": [11, 1080,1342 ]}';
  constructor() {
    this.json = JSON.parse(this.testS);
  }

  //Cette fonction s'occupe de rechercher un terme sur la base de donnée, elle retourne ensuite un json
  public recherche(rec: string) {
    //A remplir requete au controller !!!!!!
    var js = this.json;
    //A remplir requete au controller !!!!!!
    var JSONLivres = js["searchResponses"];
    this.setSugg(js["suggestions"]);
    var i = 0;
    var tabi = new Array(this.nb_results);
    var tabl = new Array(this.nb_results);
    while (i < this.nb_results) {
      var l = JSONLivres["" + i];
      tabi[i] = (l['book'])['id'];
      tabl[i] = (l['book'])['title'];
      i = i + 1;
    }

    this.livres = tabl;
    this.livresId = tabi;
  }

  //Cette fonction retourne le titre d'un livre a partir de son id
  public getTitreID(id) {
    //A remplir requete au controller !!!!!!
    var js = JSON.parse(this.d);
    //A remplir requete au controller !!!!!!
    return js["title"];
  }

  //fonction etablissant les details d un livre a partir de son id
  public setDetailID(id: string) {
    //A remplir requete au controller !!!!!!
    var js = JSON.parse(this.d);
    //A remplir requete au controller !!!!!!
    this.setDetails(js);
  }

  public setSugg(sugg: JSON) {
    this.sugg = sugg;
  }
  public getSugg() {
    return this.sugg;
  }

  public getjson() {
    return this.json;
  }

  public setLivres(livres:any[], livresId:any[]) {
    this.livres = livres;
    this.livresId = livresId;
  }

  public getCookies() {
    return this.cookieID;
  }

  public getLivres() {
    return this.livres;
  }

  public getUrlR() {
    return this.urlR;
  }

  public getUrlB() {
    return this.urlB;
  }

  public getLivresId() {
    return this.livresId;
  }

  public setDetails(detail: string) {
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
