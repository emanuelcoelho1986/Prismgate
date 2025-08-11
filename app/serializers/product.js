import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ProductSerializer extends JSONAPISerializer {
     normalizeFindAllResponse(store, primaryClass, payload, id, requestType) {
        console.log('ProductSerializer.normalizeFindAllResponse called');
        console.log({store, primaryClass, payload, id, requestType});

        return {data: payload.map(product => {
            return {
                id: product.id,
                type: 'product',
                attributes: {
                    propertyValues: product.property_values
                }
            };
        })};
    }
}
