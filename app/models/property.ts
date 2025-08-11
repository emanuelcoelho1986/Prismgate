import Model, { attr, belongsTo } from '@ember-data/model';

export default class PropertyModel extends Model {
    @attr('string') declare name: string;
    @attr('string') declare type: string;
    @attr("string", {allowNull: true, defaultValue: null}) declare values: string[] | undefined;

    @belongsTo('product', { async: true, inverse: 'properties', }) declare product: any;

    get isEnum() {
        return this.type === 'enumerated';
    }
}
