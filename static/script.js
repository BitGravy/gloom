
$(function(){
	$("#scenariolist").children().click(function(){
		alert("scenario clicked");
		$("#scenario").text($(this).text());
		//$("#scenario").val($(this).text());

		alert($("#scenario :selected").val());
		alert($("#lvl").val());

		if($("#scenario").val() && $("#lvl").val()) {
			alert("scenario and lvl have val")
			$.getJSON("/monsters", {scenario: $("#scenario").val(), lvl: $("#lvl").val()}, function(data, textStatus, jqXHR){
				alert("inside function");
				alert(data.data.length);
				for (let i = 0; i < data.length; i++)
				{
					alert("running loop");
					$("#monsterblock").append("Testing");
				}
			});
		}
		alert("end of function");
	});

	$("#lvllist").children().click(function(){
		$("#lvl").text($(this).text());
		$("#lvl").val($(this).text());
	});
	
	$("#test").children().click(function(){
		$("#testparent").text($(this).text());
		$("#testparent").val($(this).text());
		alert($("#test").val());
	});
});
