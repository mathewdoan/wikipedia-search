// Coded by Mathew Doan

$(document).ready(function(){
	alert("YEE HAW WELCOEM TO THE GAME BO");

});

$("#search").on("click", function() {
	var searchTerm = $("#searchbar").val();
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

	$.getJSON(url, function(data) { 

		$(".container").html(" ");
		$(".container").append('<input type="button" value="back" id="backbutton" class="btn btn-info"></input>');
		$("#backbutton").on("click",function() {
			alert("put a function here that replaces the entire body with index.html")
		});


		for (var i = 0; i < data[1].length; i++){
			console.log(data[1][i] + data[2][i]);
		}

	});


});