
$('.css-v8fmq5').css("width", "350px");
// css-1p8s75i
$('#btn-input').on("input", function() {
   const newVal = $(this).val();
   const newValLength = newVal.length
   $('.css-1p8s75i').css("width", `${50 + newValLength * 30}px`)
});

$( document ).ready(
	
	$.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').done((res) => {
		let currentPrice = res[0].current_price
		$('#btn-input2').val(currentPrice)
		console.log(currentPrice)
	})
)