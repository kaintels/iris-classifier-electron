<script>
	let project;
	let date
  
	fetch("http://localhost:8080/project_info").then((response) => {
	  response.json().then((res) => {
		project = res.project;
		date = res.date;
	  });
	});
  </script>
  
  <h1>{project}</h1>
  <h2>{date}</h2>