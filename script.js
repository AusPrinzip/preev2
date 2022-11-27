
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
   const isDecimal = newVal1 % 1 != 0;
   console.log(`isDecimal ${isDecimal}`)
   console.log(newVal1 % 1)

   if (newVal1.toString().indexOf(".") == newVal1.toString().length - 1) return

   if (isDecimal) {
      console.log('btc mode')
      $('#satoshi-img').hide()
      $('#btc-img').show()
   } else if (newVal1.length > 1) {
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

   $('.css-1p8s75i').css("width", `${12 + newVal1.toString().length * 2}vw`)
   const newVal2 = (newVal1 * currentPrice).toLocaleString('en-US')
   $('#btn-input2').val(newVal2)
   $('.css-v8fmq5').css("width", `${12 + newVal2.toString().length * 2}vw`)
});

// Automatically change inputfield #2 width based on value length
$('#btn-input2').on("input", function() {
   const newVal1 = $(this).val()
   $('.css-v8fmq5').css("width", `${12 + newVal1.toString().length * 2}vw`)
   const newVal2 = (currentPrice / newVal1).toLocaleString('en-US')
   $('#btn-input').val(newVal2)
   $('.css-1p8s75i').css("width", `${12 + newVal2.toString().length * 2}vw`)
});

// BTC price initial update and inputfield#2 width update
$( document ).ready(
  $.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').done((res) => {
    currentPrice = res[0].current_price
    const newVal = currentPrice.toLocaleString('en-US')
    console.log(newVal)
    $('#btn-input2').val(newVal)
    const newValLength = currentPrice.toString().length;
    $('.css-v8fmq5').css("width", `${12 + newValLength * 2}vw`)
  })
)


