import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'cm-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    sub: Subscription;

    constructor(private router: Router,
        private logger: LoggerService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
