import autobind from 'autobind-decorator'
import friend from './controllers/friend';
import login from './controllers/login';

@autobind
class Store {
  constructor() {
    this.friend = friend;
    this.login = login;
    login.goto = this.goto;

    this.routeIndex = 0;
    this.routes = {
        login:0,
        friend:1
    };
  }

  goto(route){
      this.routeIndex = this.routes[route];
      this.navigator.push({});
  }
}

export default new Store();