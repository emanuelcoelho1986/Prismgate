import '@glint/environment-ember-loose';

interface PropertyValue {
  property_id: number;
  value: string | number;
}

interface Product {
  id: number;
  property_values: PropertyValue[];
}

type PropertyType = 'string' | 'number' | 'enumerated';

interface BaseProperty {
  id: number;
  name: string;
  type: PropertyType;
}

interface EnumeratedProperty extends BaseProperty {
  type: 'enumerated';
  values: string[];
}

interface StringProperty extends BaseProperty {
  type: 'string';
}

interface NumberProperty extends BaseProperty {
  type: 'number';
}

type Property = StringProperty | NumberProperty | EnumeratedProperty;

interface Operator {
  text: string;
  id:
    | 'equals'
    | 'greater_than'
    | 'less_than'
    | 'any'
    | 'none'
    | 'in'
    | 'contains';
}

interface DataStore {
  getProducts(): Product[];
  getProperties(): Property[];
  getOperators(): Operator[];
  products: Product[];
  properties: Property[];
  operators: Operator[];
}

// declare global so window.datastore can be recognized
declare global {
  interface Window {
    datastore: DataStore;
  }
}
