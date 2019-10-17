import {Component} from 'inferno';

export default class Banner extends Component {

    state = {
        data: this.props.data || []
    };

    onBannerClick = (item) => {
        alert('click banner:' + item.title);
    }

    render() {

        const {data} = this.state;

        return (
            <div className="container">
                <h2>Inferno Banner: </h2>
                <div className="list">
                    {
                        data.map((item, idx) => {
                            return (
                                <div className="item" onClick={this.onBannerClick.bind(this, item)}>
                                    <img src={item.img} className="itemImg" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}
