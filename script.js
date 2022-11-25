
// Trick to get cursor to focus on the right most side of the input field
$('#btn-input').focus();
$('#btn-input').val(0);
$('#btn-input').val(1);

var currentPrice = 0;

// Automatically change inputfield #1 width based on value length AND Value update whenever inputfield#1 changes
$('#btn-input').on("input", function() {
   const newVal = $(this).val();
   const newValLength = newVal.length
   $('.css-1p8s75i').css("width", `${50 + newValLength * 25}px`)
   $('#btn-input2').val(newVal * currentPrice)
});

// Automatically change inputfield #2 width based on value length
$('#btn-input2').on("input", function() {
   const newVal = $(this).val();
   const newValLength = newVal.length
   $('.css-v8fmq5').css("width", `${50 + newValLength * 25}px`)
});

// BTC price initial update and inputfield#2 width update
$( document ).ready(
	$.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').done((res) => {
		currentPrice = res[0].current_price
		$('#btn-input2').val(currentPrice)
		const newValLength = currentPrice.toString().length;
		$('.css-v8fmq5').css("width", `${50 + newValLength * 25}px`)
	})
)


