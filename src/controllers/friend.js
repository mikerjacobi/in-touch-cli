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
class Friend {
    @observable friendResp = "";

    setFriendID(friendID) {
        this.friendID = friendID;
    }
    @action getFriend() {
        console.log("getting:" + this.friendID)
        var url = utils.baseURL + "/friend/" + this.friendID;
        fetch(url)
            .then(utils.toJSON)
            .then(this.handleFriendResp)
            .catch(utils.handleError)
    }
    @action handleFriendResp(json) {
        this.friendResp = json.name;
    }
}

export default new Friend();