
import List from './List/index.vue';
import Banner from './Banner/index.vue';

export default {
  props: ['bannerData', 'listData'],
  render(h) {

    return (
      <div>
        <Banner data={this.bannerData} />
        <List data={this.listData}  />
      </div>
    )
  }
}