'use strict';

module.exports = Array.from({ length: 5})
                      .map((undef, i) => {
                        return {
                          title: 'banner ' + i,
                          img: 'https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg'
                        };
                      });