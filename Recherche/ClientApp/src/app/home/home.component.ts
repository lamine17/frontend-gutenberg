import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public router: Router;
  public results: string = "";

  constructor(router: Router) {
    this.router = router;
  }
    
  rechercher(livre) {
    //this.router.navigateByUrl('/counter');
    this.results = "Aucun livre trouvé."
  }
}
