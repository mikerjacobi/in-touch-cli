import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
class Store {

  @observable inputText = "hello world";

  constructor(){
    //reaction(()=>this.counter, this.increaseTotal);
  }

  @action censorText(text){
	  badwords = ["shit", "fuck"]
	  for (var i=0; i<badwords.length; i++){
		  text = text.replace(badwords[i], "****");
	  }
	  this.inputText = text;
  }
  @action setText(text){
	  this.inputText = this.censorText(text);
  }
}

export default new Store();
