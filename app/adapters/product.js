import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RSVP from 'rsvp';

export default class ProductAdapter extends JSONAPIAdapter {
    findAll() {
        return RSVP.resolve(window.datastore.getProducts());
    }
}
