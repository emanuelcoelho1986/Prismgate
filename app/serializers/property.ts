import JSONAPISerializer from '@ember-data/serializer/json-api';
import type Store from '@ember-data/store';
import type { ModelSchema } from 'ember-data';
import type { EnumeratedProperty, Property } from 'global';

export default class PropertySerializer extends JSONAPISerializer {
    normalizeFindAllResponse(store: Store,
                primaryModelClass: ModelSchema,
                payload: {},
                id: string | number,
                requestType: string) {

        return {data: payload.map((property: Property) => {
            return {
                id: property.id,
                type: 'property',
                attributes: {
                    name: property.name,
                    type: property.type,
                    values: (property as EnumeratedProperty)?.values || undefined
                },
            };
        })};
    }
}

declare module 'ember-data/types/registries/serializer' {
  export default interface SerializerRegistry {
    'property-serializer': PropertySerializer;
  }
}