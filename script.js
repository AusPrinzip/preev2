
// Trick to get cursor to focus on the right most side of the input field
$('#btn-input').focus();
$('#btn-input').val(0);
$('#btn-input').val(1);
$('#satoshi-img').hide()
var currentPrice = 0;


// $('#btn-input').on("change", function () {
//   var newVal1 = $(this).val();
//    if (newVal1.length > 1) {
//     console.log('satoshi mode')
//     newVal1 = parseFloat(newVal1 / 100000000).toFixed(8)
//     $(this).val(newVal1)
//    } else {
//     console.log('btc mode')
//    }
// })

// Automatically change inputfield #1 width based on value length AND Value update whenever inputfield#1 changes
$('#btn-input').on("input", function() {
   var newVal1 = $(this).val();

   if (newVal1.length > 1) {
    console.log('satoshi mode')
    newVal1 = parseFloat(newVal1 / 100000000).toFixed(8)
    setTimeout(() => {
      $(this).val(newVal1)
    }, 1000)
    $('#btc-img').hide()
    $('#satoshi-img').show()
   } else {
    console.log('btc mode')
    $('#satoshi-img').hide()
    $('#btc-img').show()
   }

   $('.css-1p8s75i').css("width", `${50 + newVal1.toString().length * 35}px`)
   const newVal2 = parseFloat(newVal1 * currentPrice).toFixed(3)
   $('#btn-input2').val(newVal2)
   $('.css-v8fmq5').css("width", `${50 + newVal2.toString().length * 35}px`)
});

// Automatically change inputfield #2 width based on value length
$('#btn-input2').on("input", function() {
   const newVal1 = $(this).val()
   $('.css-v8fmq5').css("width", `${50 + newVal1.toString().length * 35}px`)
   const newVal2 = parseFloat(currentPrice / newVal1).toFixed(3)
   $('#btn-input').val(newVal2)
   $('.css-1p8s75i').css("width", `${50 + newVal2.toString().length * 35}px`)
});

// BTC price initial update and inputfield#2 width update
$( document ).ready(
  $.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').done((res) => {
    currentPrice = res[0].current_price
    $('#btn-input2').val(Math.round(currentPrice))
    const newValLength = currentPrice.toString().length;
    $('.css-v8fmq5').css("width", `${50 + newValLength * 35}px`)
  })
)


