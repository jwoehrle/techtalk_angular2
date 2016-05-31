import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import {User} from "./User";
import {UserService} from "./user.service";
import {NamePipe} from "./name.pipe";
import {UserDetailComponent} from "./user-detail.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
    providers: [UserService, ROUTER_PROVIDERS],
    pipes: [NamePipe],
})
@Routes([
	{ path: '/user/:id', component: UserDetailComponent }
])
export class AppComponent implements OnInit{

    users: Array<User>;
    allUsers: Array<User>;

    filterString: string;

    constructor(private userService: UserService,
				private router: Router) {
        this.users = [];
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = this.allUsers = users        
        );
    }

	onSelectUser(user: User) {
		alert("onSelectUser: " + user);
		this.router.navigate(['/user', user.id]);
	}
}
