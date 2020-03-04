 google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById('programmachart');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Room' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
      [ 'Sporten', 'Yoga',       new Date(0,0,0,11,0,0),  new Date(0,0,0,12,00,0) ],
      [ 'Sporten', 'Zumba',    new Date(0,0,0,14,0,0),  new Date(0,0,0,15,30,0) ],
      [ 'Sporten', 'Fitness',        new Date(0,0,0,16,0,0),  new Date(0,0,0,17,30,0) ],
      [ 'Sporten', 'Fitness',        new Date(0,0,0,19,0,0),  new Date(0,0,0,19,45,0) ],
      [ 'Eten',   'Ontbijt',    new Date(0,0,0,10,30,0), new Date(0,0,0,11,30,0) ],
      [ 'Eten',   'Lunch', new Date(0,0,0,12,30,0), new Date(0,0,0,13,30,0) ],
      [ 'Eten',   'Snack', new Date(0,0,0,14,45,0), new Date(0,0,0,15,30,0) ],
      [ 'Eten',   'Diner',     new Date(0,0,0,17,30,0), new Date(0,0,0,19,0,0) ],
      [ 'Spellen',   'Schaken', new Date(0,0,0,14,30,0), new Date(0,0,0,15,45,0) ],
      [ 'Spellen',   'Quiz', new Date(0,0,0,16,30,0), new Date(0,0,0,17,30,0) ],
       [ 'Spellen',   'Karaoke', new Date(0,0,0,19,00,0), new Date(0,0,0,20,30,0) ],
      [ 'Training',   'Info vestiging', new Date(0,0,0,13,00,0), new Date(0,0,0,14,30,0) ],
      [ 'Training',  'Zwaartekracht', new Date(0,0,0,11,00,0), new Date(0,0,0,12,00,0) ],
      [ 'Training',  'Grondstoffen', new Date(0,0,0,15,30,0), new Date(0,0,0,16,45,0) ],
      ])
      ;

    var options = {
      title: 'programma voor vandaag',
      timeline: { colorByRowLabel: true },
      colors: ['#96BCD3' ,'#001E4E','#D2691E','#997A68'],
      fontName: 'Quicksand',
       tooltip: {isHtml: true},
       fontSize: '16',
      }

    chart.draw(dataTable, options);

  }