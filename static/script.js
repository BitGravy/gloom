
$(function(){
	$("#scenariolist").children().click(function(){
		alert("scenario clicked");
		$("#scenario").text($(this).text());
		$("#scenariobutton").val($(this).text());

		alert($("#scenariobutton").val());
		alert($("#lvlbutton").val());

		if($("#scenariobutton").val() && $("#lvlbutton").val()) {
			alert("scenario and lvl have val")
			$.getJSON("/monsters", {scenario: $("#scenariobutton").val(), lvl: $("#lvlbutton").val()}, function(data, textStatus, jqXHR){
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
