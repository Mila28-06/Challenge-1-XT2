 google.charts.load("current", {packages:["corechart"]});
	      google.charts.setOnLoadCallback(drawChart);
	      function drawChart() {
	        var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Af te leggen',     15],
	          ['Onderweg',  5],      
	        ]);

	        var options = {
	          title: 'Reis',
	          pieHole: 0.5,
	    	  colors: ['#A89ABF','#49226F'],
	    	  pieStartAngle: 90,
	    	  backgroundColor: '#EDEDED',
	    	  fontName:'Quicksand',	    


	    	 
	        };

	        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	        chart.draw(data, options); 
	      }


