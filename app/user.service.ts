import {Injectable} from '@angular/core'
import {User} from "./User";
import {Observable} from "rxjs/Rx";

@Injectable()
export class UserService {

    mockUser : User[] = [{name : 'Fritz'}];

    getUsers(): Observable<User[]> {
        return Observable.of(new User()).map(item => this.mockUser);

    }
}
