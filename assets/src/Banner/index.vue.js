
export default {

  props: ['data'],

  render(h) {

    const itemStyle = {
      display: 'inline-block',
      width: '200px',
      marginLeft: '200px'
    };

    const imgStyle = {
      width: '100%'
    };

    return (
      <div>
        <h2>Vue Banner: </h2>
        {
          this.data.map((item, idx) => {
            return (
              <div style={itemStyle} on-click={this.onBannerClick.bind(this, item)}>
                <img src={item.img} style={imgStyle} />
              </div>
            );
          })
        }
      </div>
    )
  },

  methods: {
    onBannerClick: (item) => {
      alert('click banner:' + item.title);
    },
  }


}