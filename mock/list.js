'use strict';

module.exports = (function() {

  let list = [];

  for (let i = 0; i < 2; i++) {
    list.push({
      name: `第 ${i} 条数据`
    });
  }

  return list;

})();