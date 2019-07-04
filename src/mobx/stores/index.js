/**
 
 * 此JS文件将stores中的所有store整合到一个stores并创建一个实例对象(只能有唯一一个实例对象)
 
 * import *Store from "./*Store"; 导入新建对象所在的文件
 
 */

import TestStore from '@mobx/stores/testStore'

const testStore = new TestStore();

module.exports = {
    testStore
};