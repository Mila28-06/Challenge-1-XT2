 google.charts.load("current", {packages:["corechart"]});
	      google.charts.setOnLoadCallback(drawChart);
	      function drawChart() {
	        var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Af te leggen', 58450000],
	          ['Afgelegd',  24330000],      
	        ]);

	        var options = {
	          pieHole: 0.4,
	    	  colors: ['#A89ABF','#49226F'],
	    	  pieStartAngle: 105,
	    	  backgroundColor: '#EDEDED',
	    	  fontName:'Quicksand',	  
	    	  legend: {position: 'bottom'},
	    	  tooltip: {text:'value'},



	    	 
	        };

	        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	        chart.draw(data, options); 
	      }


