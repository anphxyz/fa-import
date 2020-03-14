var height= $("#containerChart").height();
var width= $("#containerChart").width();

Highcharts.chart('containerChart', {
    chart: {
        type: 'column',
        width: width,
        height: height ,
        
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        tickWidth: 0,
        useHTML:true,
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
        categories: [
            '',
            '',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            'Tổ kiểm tra thiết bị',
            '',
            '',
        ],
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
        headerFormat: '<span style="color:#3f4f63">SL trễ deadline chưa thực hiện</span>: {point.y}<br/>',
        pointFormat: '<span style="font-size:13px;color:#3f4f63">Tổ kiểm tra thiết bị</span>',
        shared: true,
        // useHTML: true,
        shadow:true,
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
    series: [{
        name: 'SL trễ deadline chưa thực hiện 1',
        data: [null, null,424, null, null, null, null, null, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 2',
        data: [null, null,null, 196, null, null, null, null, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 3',
        data: [null, null,null, null, 424, null, null, null, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 4',
        data: [null, null,null, null, null, 310, null, null, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 5',
        data: [null, null,null, null, null, null, 135, null, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 6',
        data: [null, null,null, null, null, null, null, 490, null, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 7',
        data: [null, null,null, null, null, null, null, null, 248, null,null, null,],
    }, {
        name: 'SL trễ deadline chưa thực hiện 7',
        data: [null, null,null, null, null, null, null, null, null, 140,null, null,],
    }],
    colors: ['var(--dark-sky-blue-two)', 'var(--apple-green)','var(--light-indigo)', 'var(--squash)', 'var(--soft-blue)', 'var(--topaz)', 'var(--purply-pink)', 'var(--camel)'],
    
});