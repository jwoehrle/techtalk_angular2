import {Component} from '@angular/core';
import {UserService} from "./user.service";
import { OnInit } from '@angular/core';
import {User} from "./User";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit{

    users: Array<User>;

    constructor(private userService: UserService) {
    }


    ngOnInit() {
        this.userService.getUsers().subscribe(users => this.users = users);
    }

}
