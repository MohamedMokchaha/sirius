import { Component, AfterViewInit } from '@angular/core';
declare const $: any; // Déclaration de jQuery pour Angular
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialisation du carousel Bootstrap
    $(document).ready(() => {
      $('.carousel').carousel();
    });
  }
}
