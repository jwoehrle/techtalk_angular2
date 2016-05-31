import {Component} from '@angular/core';
import {UserService} from "./user.service";
import { OnInit } from '@angular/core';
import {User} from "./User";
import {NamePipe} from "./name.pipe";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [UserService],
    pipes: [NamePipe]
})
export class AppComponent implements OnInit{

    users: Array<User>;
    allUsers: Array<User>;


    filterString: string;

    constructor(private userService: UserService) {
        this.users = [];
    }


    ngOnInit() {
        this.userService.getUsers().subscribe(
            users => this.users = this.allUsers = users        
        );
    }
}
