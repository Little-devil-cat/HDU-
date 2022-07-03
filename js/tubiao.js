$(document).ready(function () {
	var DATALODING = echarts.init(document.getElementById('tubiao1'));
	DATALODING.showLoading({
		text: '等待输入中，请选择时间1与时间2，我们将为您比较金额'//加载界面
	});
	document.getElementById("STRstatistics").addEventListener("click", showHistogramChart);
});
function showHistogramChart() {

	var myChart = echarts.init(document.getElementById('tubiao1'));
	myChart.showLoading({
		text: '正在努力的读取数据中...'//加载界面
	});

	var Time1Money;
	var Time2Money;
	var margins;

	Time1Money = 112;
	Time2Money = 45;
	margins = Time1Money - Time2Money;

	


	var option = {
		legend: {                                   // 图例配置
			padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
			itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
			data: ['时间1', '时间2', '差额']
		},
		tooltip: {                                  // 气泡提示配置
			trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
		},
		xAxis: [                                    // 直角坐标系中横轴数组
			{
				type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
				data: ['时间1金额时间2金额以及差额']
			}
		],
		yAxis: [                                    // 直角坐标系中纵轴数组
			{
				type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
				boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
				splitNumber: 5                     // 数值轴用，分割段数，默认为5
			}
		],
		series: [
			{
				name: '时间1',                        // 系列名称
				type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
				data: [Time1Money]
			},
			{
				name: '时间2',                    // 系列名称
				type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
				data: [Time2Money]
			},
			{
				name: '差额',                    // 系列名称
				type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
				data: [margins]
			}
		]
	};
	myChart.setOption(option);
	myChart.hideLoading();//加载完成后隐藏加载界面


	

}
