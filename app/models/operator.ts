import Model, { attr } from '@ember-data/model';

export default class OperatorModel extends Model {
    @attr('string') declare text: string;
}
