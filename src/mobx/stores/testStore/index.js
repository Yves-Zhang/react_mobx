import {
    observable,
    action,
    toJS,
    computed
} from 'mobx'


class TestStore {
    httpServer;
    otherStore;

    @observable testData = [];

    @observable num = 0;

    @observable testStr = "这是store里的数据";

    constructor(httpServer, otherStore) {
        this.httpServer = httpServer || null;
        this.otherStore = otherStore || null;
    }

    @action add = () => {
        this.num++
    }

    @action addTestData = (ele) => {
        this.testData.push(ele)
    }

    @action changeTestStr = (str) => {
        this.testStr = str
    }

    @computed get filter() {
        return _.filter(this.testData, item => {
            return item > 5
        })
    }
}

export default TestStore