import Model, { attr } from '@ember-data/model';
import type { PropertyValue } from 'global';

export default class PropertyModel extends Model {
    @attr('string') declare name: string;
    @attr('string') declare type: string;
    @attr("string", {allowNull: true, defaultValue: null}) declare values: string[] | undefined;

    get isEnum() {
        return this.type === 'enumerated';
    }

    get numericId() {
        return Number(this.id);
    }

    // Custom getter to combine property_values with the actual property record
    get products() {
        // Access store to get all properties
        let store = this.store;

        return store.peekAll('product').filter((product) => {
            return product.propertyValues.filter((pv: PropertyValue) => pv.property_id === this.numericId).length;
        });
    }
}
