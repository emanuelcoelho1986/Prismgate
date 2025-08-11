import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
    @attr() propertyValues;

    // Custom getter to combine property_values with the actual property record
    get enrichedPropertyValues() {
        // Access store to get all properties
        let store = this.store;

        if (!this.propertyValues) {
            return [];
        }

        return this.propertyValues.map(pv => {
            let property = store.peekRecord('property', pv.property_id);
            return {
                property,
                value: pv.value
            };
        });
    }
}
