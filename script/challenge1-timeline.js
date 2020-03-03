 google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('example5.1');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Sporten', 'Yoga',       new Date(0,0,0,12,0,0),  new Date(0,0,0,13,30,0) ],
      [ 'Sporten', 'Zumba',    new Date(0,0,0,14,0,0),  new Date(0,0,0,15,30,0) ],
      [ 'Sporten', 'Fitness',        new Date(0,0,0,16,0,0),  new Date(0,0,0,17,30,0) ],
      [ 'Eten',   'Ontbijt',    new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
      [ 'Eten',   'Lunch', new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
      [ 'Eten',   'Diner',     new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ]]);

    var options = {
      timeline: { colorByRowLabel: true },
      fontName:'Quicksand', 
      colors: ['orange' ,'purple'],
    };

    chart.draw(dataTable, options);
  }