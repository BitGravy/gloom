
$(function(){
	$("#scenariolist").children().click(function(){
		alert("scenario clicked");
		$("#scenario").text($(this).text());
		$("#scenariobutton").val($(this).text());

		alert($("#scenario").val());
		alert($("#lvlbutton").val());

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
		$("#lvlbutton").val($(this).text());
	});
	
	$("#test").children().click(function(){
		$("#testparent").text($(this).text());
		$("#testparent").val($(this).text());
		alert($("#test").val());
	});
});
