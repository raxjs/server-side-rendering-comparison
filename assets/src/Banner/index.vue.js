
import styles from './styles';

export default {

  props: ['data'],

  render(h) {

    return (
      <div style={styles.container}>
        <h2>Vue Banner: </h2>
        <div style={styles.list}>
        {
          this.data.map((item, idx) => {
            return (
              <div style={styles.item} onClick={this.onBannerClick.bind(this, item)}>
                <img src={item.img} style={styles.itemImg} />
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