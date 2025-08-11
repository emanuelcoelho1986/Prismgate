import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { Product, Property } from 'global';

 export default class ProductsTable extends Component {
  @tracked declare columns: Property[];
  @tracked declare products: Product[];
 }
