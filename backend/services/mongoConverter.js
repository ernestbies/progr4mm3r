import * as _ from 'lodash';

function convert(data) {
    if (Array.isArray(data)) {
        return _.map(data, elem => {
            return convert(elem);
        });
    }
    data = data.toObject({ getters: true, versionKey: false });
    return _.omit(data, ['_id']);
}

export default convert;
