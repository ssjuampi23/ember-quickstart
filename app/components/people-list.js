import Component from '@glimmer/component';
import { action } from '@ember/object'; // NAMED export

export default class PeopleListComponent extends Component {
  @action // this decorator indicates we want to use the 'showPerson' method as an action in our template
  showPerson(person){ // Simple method
    alert(`The person's name is: ${person}!`);
  }
}
