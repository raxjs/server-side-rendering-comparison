
import List from './list/index.vue';
import Banner from './banner/index.vue';

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
