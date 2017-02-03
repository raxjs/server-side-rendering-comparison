
import Inferno from 'inferno';
import Component from 'inferno-component';
import List from './List/index.inferno';
import Banner from './Banner/index.inferno';

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