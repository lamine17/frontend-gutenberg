import { Component } from '@angular/core';


const sql = require('mssql')


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  public test() {
    async () => {
      try {
        await sql.connect('mssql://user:root@localhost:8082/adminer')
        const result = await sql.query`select * from book`
        console.dir(result)
      } catch (err) {
        // ... error checks
      }
    }
  }
}
