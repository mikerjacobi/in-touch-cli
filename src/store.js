import {
  action,
  reaction,
  observable,
  observe,
  computed,
  autorun
} from 'mobx';
import autobind from 'autobind-decorator'
require("whatwg-fetch");

@autobind
class Store {
  baseURL = "http://192.168.1.194:8080";
  @observable inputText = "hello world";
  @observable friendResp = "friend";

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  @action censorText(text) {
    badwords = ["shit", "fuck", "shucks"]
    for (var i = 0; i < badwords.length; i++) {
      text = text.replace(badwords[i], "****");
    }
    this.inputText = text;
  }
  @action setFriendID(friendID) {
    this.friendID = friendID;
  }
  @action setFriendResp(resp){
      this.friendResp = resp;
  }

  @action getFriend() {
    url = this.baseURL + "/friend/" + this.friendID;
    fetch(url)
      .then(function (resp) {
        return resp.text();
      }).then(function (text) {
        console.log(text);
        this.friendResp = text;
      }).catch(function (err) {
        console.log(err);
      })
  }
}


function getMethods(obj) {
  var result = [];
  for (var id in obj) {
    try {
      if (typeof (obj[id]) == "function") {
        result.push(id + ": " + obj[id].toString());
      }
    } catch (err) {
      result.push(id + ": inaccessible");
    }
  }
  return result;
}


export default new Store();