$(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'pie'
            },
            title: {
                text: 'Spending Breakdown'
            },
            yAxis: {
                title: {
                    text: 'Spending Percentages'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Categories',
                data: [["Fast Food",60],["Gym and Exercise",40],["Misc",15], ['Bars', 55]],
                size: '60%',
                innerSize: '20%',
                showInLegend:true,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });
