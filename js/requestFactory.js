import GetData from './getData.js';
import GetSources from './getNewsChannel.js';
import proxy from './proxy';

const requestFactory  = {
    create(type, source, filter) {
        switch (type) {
            case 'data':
                return new GetData(source, filter)
                break;
            case 'sources':
                return new GetSources();
                break;
        }
    }
};

export default proxy(requestFactory);