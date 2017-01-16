'use strict';

module.exports = Array.from({ length: 100})
                      .map((undef, i) => {
                        return {
                          title: 'Product title ' + i,
                          img: 'https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg',
                          href: 'https://github.com',
                          price: 20
                        };
                      });