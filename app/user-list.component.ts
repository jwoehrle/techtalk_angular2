import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {User} from "./User";
import {UserService} from "./user.service";
import {NamePipe} from "./name.pipe";

@Component({
    selector: 'user-list',
    templateUrl: './app/user-list.component.html',
    styleUrls: ['./app/user-list.component.css'],
    pipes: [NamePipe],
})
export class UserListComponent implements OnInit {
 
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
        this.router.navigate(['UserDetail', { id: user.id }]);
	}
}
