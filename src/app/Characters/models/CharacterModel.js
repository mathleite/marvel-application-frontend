export default class CharacterModel {
  constructor() {
    this.id = null;
    this.name = '';
    this.description = '';
    this.modified = '';
    this.thumbnail = {
      path: '',
      extension: '',
    };
    this.resourceURI = '';
    this.comics = {
      available: null,
      collectionURI: '',
      items: [],
      returned: null,
    };
    this.series = {
      available: null,
      collectionURI: '',
      items: [],
      returned: null,
    };
    this.stories = {
      available: null,
      collectionURI: '',
      items: [],
      returned: null,
    };
    this.events = {
      available: null,
      collectionURI: '',
      items: [],
      returned: null,
    };
    this.urls = [];
  }

  fill(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.modified = data.modified;
    this.thumbnail = data.thumbnail;
    this.resourceURI = data.resourceURI;
    this.comics = data.comics;
    this.series = data.series;
    this.stories = data.stories;
    this.events = data.events;
    this.urls = data.urls;
  }
}
