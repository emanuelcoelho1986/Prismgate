import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class OperatorSerializer extends JSONAPISerializer {
    normalizeFindAllResponse(store, primaryClass, payload, id, requestType) {
        // Customize the normalization process if needed
        console.log('OperatorSerializer.normalizeFindAllResponse called');
        console.log({store, primaryClass, payload, id, requestType});

        return {data: payload.map(operator => {
            return {
                id: operator.id,
                type: 'operator',
                attributes: {
                    text: operator.text,
                }
            };
        })};
    }
}
