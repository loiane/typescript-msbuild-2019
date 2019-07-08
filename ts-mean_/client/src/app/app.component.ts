import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <h1>TS MEAN</h1>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
