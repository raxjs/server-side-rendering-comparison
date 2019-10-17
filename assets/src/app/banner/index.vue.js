export default {

  props: ['data'],

  render(h) {

    return (
      <div class="container">
        <h2>Vue Banner: </h2>
        <div class="list">
        {
          this.data.map((item, idx) => {
            return (
              <div class="item" onClick={this.onBannerClick.bind(this, item)}>
                <img src={item.img} class="itemImg" />
              </div>
            );
          })
        }
        </div>
      </div>
    )
  },

  methods: {
    onBannerClick: (item) => {
      alert('click banner:' + item.title);
    }
  }

}