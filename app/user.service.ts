import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {User} from "./User";
import {Observable} from "rxjs/Rx";

@Injectable()
export class UserService {

    mockUser : User[] = [{id: 1, name: 'Fritz', email: 'fritz@cola.invalid', phone: '555-FRITZ'}];


    constructor(private http: Http) {

    }

    getUsers(): Observable<User[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/users').map(this.extractData)
            .catch(this.handleError);
        //return Observable.of(new User()).map(item => this.mockUser);
    }

	getUser(id: Number): Observable<User> {
		return this.http.get('http://jsonplaceholder.typicode.com/users/' + id).map(this.extractData)
            .catch(this.handleError);
	}

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
