// Coded by Mathew Doan

$(document).ready(function(){
	pageBuild();


});

function pageBuild(){
	// Create page.
	$("body").prepend(`
		<div class="container-fluid text-center">
			<h1> Wikipedia Viewer </h1>
			<div class="container" id="search-container">
				<h4> Search for an Article</h4>
				<input type="text" placeholder="Search for an article." name="article-search" class="form-control" id="searchbar"></input>
				<input type="button" id="search" value="Search" class="btn btn-info"></input>
				<input type="button" id="random" value="Random Article" onclick="location.href='https://en.wikipedia.org/wiki/Special:Random'" class="btn btn-info" ></input>
		</div>
		<div class="output" id="searchResults"></div>
		</div>`);



	$("#search").on("click", function searchit() {
	var searchTerm = $("#searchbar").val();
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

	$.getJSON(url, function(data) { 

		$(".container").html(" ");
		$(".container").append('<input type="button" value="back" id="backbutton" class="btn btn-info"></input>');
		$("#backbutton").on("click",function() {
			$(".container-fluid").remove();
			pageBuild();
		});



		for (var i = 0; i < data[1].length; i++){
			$("#searchResults").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
		}

	});


});

	$("#searchbar").keypress(function(e){
		if(e.keyCode === 13){
				var searchTerm = $("#searchbar").val();
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

	$.getJSON(url, function(data) { 

		$(".container").html(" ");
		$(".container").append('<input type="button" value="back" id="backbutton" class="btn btn-info"></input>');
		$("#backbutton").on("click",function() {
			$(".container-fluid").remove();
			pageBuild();
		});



		for (var i = 0; i < data[1].length; i++){
		$("#searchResults").prepend("<div class='well'><a href=" + data[3][i] +  "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div>");





		}


	});
		}

	})


};



