import { Component } from '@angular/core';
import { Router } from '@angular/router';


/* Host Introduction page component */
@Component({
  selector: 'host-intro-page',
  templateUrl: './host_intro_page.ng.html',
  styleUrls: ['./host_intro_page.scss']
})
export class HostIntroPage {

    constructor(private router: Router) {}

    navigateToHome() {
        this.router.navigate(['../']);
    }
}