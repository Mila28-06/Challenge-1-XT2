
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Datum', 'max', 'gem','min',],
          ['26 feb',  -12.8, -65, -92.8 ],
          ['27 feb',  -10.9, -57.4, -93.6 ],
          ['28 feb',  -11.1, -59.7,  -92.6],
          ['29 feb',  -8.3, -64, -94.1],
          ['1 mrt',  -11.3, -57.2, -93.6],
          ['2 mrt',  -10.4, -63.4, -93.5],
          ['3 mrt',  -10.3, -62.2, -93.6],
        ]);

        var options = {
          title: 'Temperatuur in  \xB0C' ,
          hAxis: {title: 'Datum',  titleTextStyle: {color: '#333', fontSize: '12'}},
          vAxis: {minValue: 0},
          backgroundColor: '#EDEDED',
          fontName:'Quicksand',
          colors: ['#001E4E', '#D2691E', 'grey'],
          fontSize:'11',
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
 