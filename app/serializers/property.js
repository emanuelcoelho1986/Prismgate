import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class PropertySerializer extends JSONAPISerializer {
    normalizeFindAllResponse(store, primaryClass, payload, id, requestType) {
        console.log('PropertySerializer.normalizeFindAllResponse called');
        console.log({store, primaryClass, payload, id, requestType});

        return {data: payload.map(property => {
            return {
                id: property.id,
                type: 'property',
                attributes: {
                    name: property.name,
                    type: property.type,
                    values: property.values || undefined
                }
            };
        })};
    }
}
