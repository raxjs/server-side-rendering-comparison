/** @jsx createElement */

'use strict';

export default {

  props: ['data'],

  render(h) {
    return (
      <div>
        <h2>VueList</h2>
        {
          this.data.map((item, idx) => {
            return (
              <div key={idx} style={{
                float: 'left',
                width: '200px',
                marginRight: '10px',
                marginBottom: '10px'
              }}>
                <img src={item.img} style={{
                  width: '100%'
                }} />
                <p>{item.title}</p>
                <div>
                  
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}