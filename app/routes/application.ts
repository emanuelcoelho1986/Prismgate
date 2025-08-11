import Route from "@ember/routing/route";
import Store from "@ember-data/store";
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service declare store: Store;

    async model() {
        const operators = await this.store.findAll('operator');
        const properties = await this.store.findAll('property');
        const products = await this.store.findAll('product');
        
        return {
            operators,
            properties,
            products
        };
    }
}