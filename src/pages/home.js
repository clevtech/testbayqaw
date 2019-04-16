import React, {Component} from 'react';

import List from './../components/list';
import Donut from './../components/donut';

class Home extends Component {
    render() {
        return(
            <div className="container-fluid  dashboard-content">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <List />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                      	<Donut />      
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;