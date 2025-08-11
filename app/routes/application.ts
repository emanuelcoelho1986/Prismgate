import Route from "@ember/routing/route";
import Store from "@ember-data/store";
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service store: Store;

    async model() {
        const operators = await this.store.findAll('operator');
        return {
            operators
        };
    }
}