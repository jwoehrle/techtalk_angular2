import {Injectable} from '@angular/core'
import {User} from "./User";

@Injectable()
export class UserService {

    getUsers(): Array<User> {
        return [{name : 'Fritz'}];
    }
}
