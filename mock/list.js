'use strict';

module.exports = Array.from({ length: 500})
                      .map((undef, i) => {
                        return {
                          title: 'list ' + i,
                          img: 'https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg'
                        };
                      });