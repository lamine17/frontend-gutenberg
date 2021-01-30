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

  public json: JSON;

  public testS: string = '[{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64},\
{ "hash": "kkksqslmjfn#", "book": {"id": 1342,"title": "Pride and Prejudice","authors": [{"last_name": "Austen", "first_name": "Jane", "authorBirth": "1775","authorDeath": "1817"}\
        ],"subjects": [ "Courtship -- Fiction","Domestic fiction", "England -- Fiction","Love stories","Sisters -- Fiction","Social classes -- Fiction","Young women -- Fiction"],\
            "bookShelves": [ "Best Books Ever Listings","Harvard Classics"], "copyright": false,"mediaType": "Text","donwloadLink": "https://www.gutenberg.org/files/1342/1342-0.txt","downloadCount": 57065}, "words": [{"str": "with","occurrences": 1024 },{"str": "without","occurrences": 86}], "accuracy": 0.64}]';

  constructor() {
    this.json = JSON.parse(this.testS);
  }

  public getjson() {
    return this.json;
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
