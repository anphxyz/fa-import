function loadChart() {
    Highcharts.setOptions({lang: {noData: "Your custom message"}})
    var dashboardChar = Highcharts.chart('containerChart', {
        chart: {
            type: 'column',
            width: width,
            height: height,
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            tickWidth: 0,
            useHTML: true,
            labels: {
                rotation: -45,
                align: 'right',
                useHTML: true,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Open Sans',
                    color: 'var(--slate)',
                },
            },
            categories: categoriesChart,
            crosshair: true,
        },
        yAxis: {
            title: {
                text: ''
            },
            plotBands: [{
                    color: 'var(--duck-egg-blue)',
                    from: 0,
                    to: 600
                }],
            labels: {
                style: {
                    color: 'var(--slate)',
                    fontSize: '13px',
                    fontFamily: 'Open Sans'
                }
            },
        },
        legend: {
            enabled: true,
            symbolRadius: 0,
            itemDistance: 50,
            itemMarginBottom: 10,
            align: 'center',
            borderWidth: 0,
            itemStyle: {
                color: 'var(--slate)',
                fontWeight: 'normal',
                fontSize: 13,
                fontFamily: 'Open Sans'
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:13px;color:#3f4f63">{point.key}</span><br/><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b><br/></td></tr>',
            footerFormat: '</table>',
            useHTML: true,
            shared: true,
            // shadow:true,
            backgroundColor: {
                linearGradient: [60, 60, 60, 60],
                stops: [
                    [0, 'var(--white-three)'],
                    [1, 'var(--white-three)']
                ]
            },
            borderWidth: 0,
            borderColor: '#AAA'
        },
        plotOptions: {
            series: {
                pointWidth: 28,
            }
        },
        series: dataSeries,
        colors: ['var(--dark-sky-blue-two)', 'var(--apple-green)', 'var(--light-indigo)', 'var(--squash)', 'var(--soft-blue)', 'var(--topaz)', 'var(--purply-pink)', 'var(--camel)'],

    });
}
