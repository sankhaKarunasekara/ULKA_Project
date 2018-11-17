require('amcharts3');

/**
 * Create the chart
 */
var chart = AmCharts.makeChart('chartdiv', {
    type: 'serial',
    theme: 'light',
    dataProvider: [
        {
            country: 'USA',
            visits: 2025,
        },
        {
            country: 'China',
            visits: 1882,
        },
        {
            country: 'Japan',
            visits: 1809,
        },
        {
            country: 'Germany',
            visits: 1322,
        },
        {
            country: 'UK',
            visits: 1122,
        },
        {
            country: 'France',
            visits: 1114,
        },
        {
            country: 'India',
            visits: 984,
        },
        {
            country: 'Spain',
            visits: 711,
        },
        {
            country: 'Netherlands',
            visits: 665,
        },
        {
            country: 'Russia',
            visits: 580,
        },
        {
            country: 'South Korea',
            visits: 443,
        },
        {
            country: 'Canada',
            visits: 441,
        },
        {
            country: 'Brazil',
            visits: 395,
        },
    ],
    graphs: [
        {
            bullet: 'diamond',
            bulletSize: 15,
            lineAlpha: 0,
            valueField: 'visits',
            /**
             * The following setting uses bestFitLine plugin
             * https://github.com/amcharts/tools/tree/master/bestFitLine
             */
            bestFitLine: {
                lineColor: '#cc0000',
                lineAlpha: 0.8,
                lineThickness: 2,
            },
        },
    ],
    categoryField: 'country',
});
