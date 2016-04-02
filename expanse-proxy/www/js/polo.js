$(document).ready(function() {
	Highcharts.setOptions({
		global: {
			useUTC: false
		}
	});
	Highcharts.theme = {
		chart: {
      borderColor: 'rgb(128, 128, 128)',
			backgroundColor: {
				linearGradient: {
					x1: 0,
					y1: 0,
					x2: 1,
					y2: 1
				},
				stops: [
					[0, 'rgb(255, 255, 255)'],
					[1, 'rgb(128, 128, 128)']
				]
			},
			borderWidth: 2,
			plotBackgroundColor: 'rgb(245, 245, 245)',
			plotShadow: true,
			plotBorderWidth: 1
		},
		title: {
			style: {
				color: '#000',
				font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
			}
		},
		subtitle: {
			style: {
				color: '#666666',
				font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
			}
		},
		xAxis: {
			gridLineWidth: 1,
			lineColor: '#000',
			tickColor: '#000',
			labels: {
				style: {
					color: '#000',
					font: '11px Trebuchet MS, Verdana, sans-serif'
				}
			},
			title: {
				style: {
					color: '#333',
					fontWeight: 'bold',
					fontSize: '12px',
					fontFamily: 'Trebuchet MS, Verdana, sans-serif'
				}
			}
		},
		yAxis: {
			minorTickInterval: 'auto',
			lineColor: '#000',
			lineWidth: 1,
			tickWidth: 1,
			tickColor: '#000',
			labels: {
				style: {
					color: '#000',
					font: '10px Trebuchet MS, Verdana, sans-serif'
				}
			},
			title: {
				style: {
					color: '#333',
					fontWeight: 'bold',
					fontSize: '12px',
					fontFamily: 'Trebuchet MS, Verdana, sans-serif'
				}
			}
		},
		tooltip: {
			valueDecimals: 8
		},
		legend: {
			itemStyle: {
				font: '9pt Trebuchet MS, Verdana, sans-serif',
				color: 'black'
			},
			itemHoverStyle: {
				color: '#039'
			},
			itemHiddenStyle: {
				color: 'gray'
			}
		},
		labels: {
			style: {
				color: '#99b'
			}
		},
		navigation: {
			buttonOptions: {
				theme: {
					stroke: '#CCCCCC'
				}
			}
		}
	};
	var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

	function afterSetExtremes(e) {
		var chart = $('#tradechart').highcharts();
		chart.showLoading('Loading data from server...');
		$.getJSON('https://poloniex.com/public?command=returnChartData&currencyPair=BTC_EXP&start=0&end=9999999999&period=1800', function(chartdata) {
			chart.series[0].setData(chartdata);
			chart.hideLoading();
		});
	}
	$.getJSON('https://poloniex.com/public?command=returnChartData&currencyPair=BTC_EXP' + '&start=' + 0 + '&end=' + 9999999999 + '&period=300', function(chartdata) {
		var high = [];
		var volume = [];
		dataLength = chartdata.length,
		i = 0;
		for (i; i < chartdata.length; i += 1) {
			high.push([
				parseFloat(chartdata[i].date * 1000),
        parseFloat(chartdata[i].open),
				parseFloat(chartdata[i].high),
				parseFloat(chartdata[i].low),
				parseFloat(chartdata[i].close)
			]);
			volume.push([
				parseFloat(chartdata[i].date * 1000),
				parseFloat(chartdata[i].volume)
			]);
		}
		$('#tradechart').highcharts('StockChart', {
			rangeSelector: {
				selected: 0
			},
			title: {
				text: 'Expanse (EXP) Exchange Rate Chart'
			},
			credits: {
				enabled: false
			},
			navigator: {
		    enabled: false
			},
			scrollbar: {
				enabled: false
			},
			rangeSelector: {
				buttons: [{
					type: 'hour',
					count: 6,
					text: '6h'
				}, {
					type: 'hour',
					count: 24,
					text: '24h'
				}, {
					type: 'day',
					count: 2,
					text: '2d'
				}, {
					type: 'day',
					count: 4,
					text: '4d'
				}, {
					type: 'week',
					count: 1,
					text: '1w'
				}, {
					type: 'week',
					count: 2,
					text: '2w'
				}, {
					type: 'month',
					count: 1,
					text: '1m'
				}, {
					type: 'all',
					text: 'All'
				}],
				inputEnabled: false,
				selected: 0
			},
			yAxis: {
				events: {
					afterSetExtremes: afterSetExtremes
				},
				minRange: 3600 * 6000
			},
			yAxis: [{
				labels: {
					align: 'left',
					x: 3,
          format: '{value:.8f}'
				},
				title: {
					text: 'Price'
				},
				height: '83%',
				lineWidth: 1
			}, {
				labels: {
					align: 'left',
					x: 3
				},
				title: {
					text: 'Volume'
				},
				top: '84%',
				height: '16%',
				lineWidth: 1,
				offset: 0
			}],
      plotOptions: {
        candlestick: {
        color: 'rgba(255, 0, 0, 0.6)',
        upColor: 'rgba(0, 128, 0, 0.6)'
        },
        column: {
          color: 'rgba(120, 120, 120, 0.6)'
        }
      },
			series: [{
				type: 'candlestick',
				id: 'high',
				name: 'EXP',
				data: high
			}, {
				type: 'column',
				id: 'volume',
				name: 'Volume',
				data: volume,
				yAxis: 1
			}]
		});
	});

        var refreshHashRate = setInterval(function() {

	function afterSetExtremes(e) {
		var chart = $('#tradechart').highcharts();
		chart.showLoading('Loading data from server...');
		$.getJSON('https://poloniex.com/public?command=returnChartData&currencyPair=BTC_EXP&start=0&end=9999999999&period=1800', function(chartdata) {
			chart.series[0].setData(chartdata);
			chart.hideLoading();
		});
	}
	$.getJSON('https://poloniex.com/public?command=returnChartData&currencyPair=BTC_EXP' + '&start=' + 0 + '&end=' + 9999999999 + '&period=300', function(chartdata) {
		var high = [];
		var volume = [];
		dataLength = chartdata.length,
		i = 0;
		for (i; i < chartdata.length; i += 1) {
			high.push([
				parseFloat(chartdata[i].date * 1000),
        parseFloat(chartdata[i].open),
				parseFloat(chartdata[i].high),
				parseFloat(chartdata[i].low),
				parseFloat(chartdata[i].close)
			]);
			volume.push([
				parseFloat(chartdata[i].date * 1000),
				parseFloat(chartdata[i].volume)
			]);
		}
		$('#tradechart').highcharts('StockChart', {
			rangeSelector: {
				selected: 0
			},
			title: {
				text: 'Expanse (EXP) Exchange Rate Chart'
			},
			credits: {
				enabled: false
			},
			navigator: {
		    enabled: false
			},
			scrollbar: {
				enabled: false
			},
			rangeSelector: {
				buttons: [{
					type: 'hour',
					count: 6,
					text: '6h'
				}, {
					type: 'hour',
					count: 24,
					text: '24h'
				}, {
					type: 'day',
					count: 2,
					text: '2d'
				}, {
					type: 'day',
					count: 4,
					text: '4d'
				}, {
					type: 'week',
					count: 1,
					text: '1w'
				}, {
					type: 'week',
					count: 2,
					text: '2w'
				}, {
					type: 'month',
					count: 1,
					text: '1m'
				}, {
					type: 'all',
					text: 'All'
				}],
				inputEnabled: false,
				selected: 0
			},
			yAxis: {
				events: {
					afterSetExtremes: afterSetExtremes
				},
				minRange: 3600 * 6000
			},
			yAxis: [{
				labels: {
					align: 'left',
					x: 3,
          format: '{value:.8f}'
				},
				title: {
					text: 'Price'
				},
				height: '83%',
				lineWidth: 1
			}, {
				labels: {
					align: 'left',
					x: 3
				},
				title: {
					text: 'Volume'
				},
				top: '84%',
				height: '16%',
				lineWidth: 1,
				offset: 0
			}],
      plotOptions: {
        candlestick: {
          color: 'rgba(255, 0, 0, 0.6)',
          upColor: 'rgba(0, 128, 0, 0.6)'
        },
        column: {
          color: 'rgba(120, 120, 120, 0.6)'
        }
      },
			series: [{
				type: 'candlestick',
				id: 'high',
				name: 'EXP',
				data: high
			}, {
				type: 'column',
				id: 'volume',
				name: 'Volume',
				data: volume,
				yAxis: 1
			}]
		});
	});
    }, 300000);
});
