import utils from '../utils.js';
import autobind from 'autobind-decorator'
import {
    action,
    reaction,
    observable,
    observe,
    computed,
    autorun
} from 'mobx';
require("whatwg-fetch");

@autobind
class Login {
    @observable loggedIn = false;
    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    @action login() {
        console.log("logging in as: " + this.username)
        //var url = utils.baseURL + "/login";
        var url = utils.baseURL + "/login";
        var data = JSON.stringify({
            username:this.username,
            password:this.password      
        });

        fetch(url,{method:"post",body:data})
            .then(utils.toJSON)
            .then(this.handleLogin)
            .catch(utils.handleError)
    }
    @action handleLogin(json) {
        this.loggedIn = true;
        this.goto("friend");
    }
}

export default new Login();