let number = prompt("Enter the number of runs")
const delay = ms => new Promise(res => setTimeout(res, ms));
var clickEvent  = document.createEvent ('MouseEvents');
for(var i=0; i<number;i++)
{
	

	document.querySelectorAll("article >div > div[role='button']").forEach(element => 
	{
		var targLink    = element
		clickEvent.initEvent ('dblclick', true, true);
		targLink.dispatchEvent (clickEvent);
	}
	);
	
	await delay(2000);
	window.scrollBy(0,5000)
	await delay(1000);

}