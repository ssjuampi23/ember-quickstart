import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  // The model() method supports any library that uses JS Promises like axios
  model(){
    // Here you can return whatever data you want to make available to the scientists.hbs template
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}
