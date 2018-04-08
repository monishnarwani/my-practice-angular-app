import {Component, OnInit} from '@angular/core';

@Component({
    // selector: '[app-servers]',
    selector: '.app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = true;
    status = 'not started';
    constructor() {
    }

    ngOnInit() {
    }

    addNewServer() {
        console.log('adding new server');
        this.status = 'Server started...';
    }

}
