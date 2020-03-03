
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Datum', 'max', 'gem','min',],
          ['19 feb',  -10, -61.3, -95.4 ],
          ['20 feb',  -9.3, -59.3, -94.6 ],
          ['21 feb',  -13, -64.1,  -95.2],
          ['22 feb',  -13.5, -62.1, -95.1],
          ['23 feb',  -10.5, -67.2, -94.1],
          ['24 feb',  -12.3, -58.1, -94.8],
          ['25 feb',  -12, -64.8, -93.8],
        ]);

        var options = {
          title: 'Temperatuur in  \xB0C' ,
          hAxis: {title: 'Datum',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          backgroundColor: '#EDEDED',
          fontName:'Quicksand',
          colors: ['orange', 'purple', 'grey'],
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
 