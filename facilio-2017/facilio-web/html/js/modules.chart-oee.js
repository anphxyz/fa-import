var height = $("#container").height();
var width = $("#container").width();

Highcharts.chart('container', {
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
        type: 'category',
        tickWidth: 0,
        labels: {
            rotation: -45,
            style: {
                color: 'var(--slate)',
                fontSize: '13px',
                fontFamily: 'Open Sans'
            }
        },

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
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: ''
            },
            pointWidth: 28,
        }
    },

    tooltip: {
        headerFormat: '<span style="color:#3f4f63">SL trễ deadline chưa thực hiện</span>: {point.y}<br/>',
        pointFormat: '<span style="font-size:13px;color:#3f4f63">Tổ kiểm tra thiết bị</span>',
        shadow: true,
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
    series: [{
            name: 'Chart',
            colorByPoint: true,
            data: [{
                    name: ' ',
                    y: null,
                }, {
                    name: 'Hệ số sẵn sàng',
                    y: 424,
                }, {
                    name: 'Năng xuất',
                    y: 196,
                }, {
                    name: 'Chất lượng',
                    y: 424,
                }, {
                    name: '  ',
                    y: null,
                }]
        }],
    colors: ['var(--camel)', 'var(--dark-sky-blue-two)', 'var(--apple-green)', 'var(--light-indigo)', 'var(--squash)', 'var(--soft-blue)', 'var(--topaz)', 'var(--purply-pink)', 'var(--camel)'],
});


