import {Component} from 'inferno';
import List from './list/index.inferno';
import Banner from './banner/index.inferno';

export default class App extends Component {

    componentDidMount() {
        // console.log('inferno render in client');
    }

    render() {
        const props = this.props || {};

        return (
            <div>
                <Banner data={props.bannerData} />
                <List data={props.listData} />
            </div>
        );

    }
};
