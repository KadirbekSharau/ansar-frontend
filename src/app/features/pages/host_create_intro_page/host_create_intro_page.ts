import { Component } from '@angular/core';
import { Router } from '@angular/router';


/* Host Create Introduction page component */
@Component({
  selector: 'host-create-intro-page',
  templateUrl: './host_create_intro_page.ng.html',
  styleUrls: ['./host_create_intro_page.scss']
})
export class HostCreateIntroPage {


    constructor(private router: Router) {}

    navigateToHome() {
        this.router.navigate(['../']);
    }
}