'use strict';

module.exports = Array.from({ length: 100})
                      .map((undef, i) => ({ name: `第 ${i} 条数据` }));