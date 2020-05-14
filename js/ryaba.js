const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
	$.getJSON(dataURL, handleData)
}


function handleData(data) {
	let txt = "";

	let var1 = $("input[name=var1]")[0].value;
	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;
	console.log(speach);


	data["text"].forEach(function(item, index){
		item = item.replace("{var1}", var1);
		item = item.replace("{var2}", var2);
		item = item.replace("{var3}", var3);
		item = item.replace("{var4}", var4);
		item = item.replace("{var5}", var5);
		item = item.replace("{var6}", var6);
		item = item.replace("{speach}", speach);
		txt = txt + item + "<br>";
	});
	$("div#result").html(txt)
}


function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
