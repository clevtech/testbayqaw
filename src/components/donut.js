import React, {Component} from 'react';

class Donut extends Component {
	/*constructor() {
		var chart = c3.generate({
                bindto: "#c3chart_donut",
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type: 'donut',
                    onclick: function(d, i) { console.log("onclick", d, i); },
                    onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function(d, i) { console.log("onmouseout", d, i); },

                    colors: {
                         data1: '#5969ff',
                        data2: '#ff407b'


                    }
                },
                donut: {
                    title: "Iris Petal Width"


                }


            });

            setTimeout(function() {
                chart.load({
                    columns: [
                        ["setosa", 20],
                        ["versicolor", 12],
                        ["virginica", 40],
                    ]
                })
                 
            }, 1000);

            setTimeout(function() {
                chart.unload({
                    ids: 'data1'
                });
                chart.unload({
                    ids: 'data2'
                });
            }, 1000);
	}*/
	render() {
		return (
			<div className="card">
				<h5 className="card-header">Donut Chart</h5>
	            <div className="card-body">
	                <div id="c3chart_donut"></div>
	            </div>
            </div>
		)
	}
}

export default Donut;