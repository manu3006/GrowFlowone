//  Set caption from card text
$('.banner-video a').fancybox({
    caption : function( instance, item ) {
    }
  });
  // end



  $(document).ready(function(){
	
    $('ul.tabes li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab_content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  })


  
//   var a = 0;
// $(window).scroll(function () {
//     var oTop = $(".counter-number").offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() > oTop) {
//         $(".counter").each(function () {
//             var $this = $(this),
//                 countTo = $this.attr("data-number");
//             $({
//                 countNum: $this.text()
//             }).animate(
//                 {
//                     countNum: countTo
//                 },

//                 {
//                     duration: 850,
//                     easing: "swing",
//                     step: function () {
//                         //$this.text(Math.ceil(this.countNum));
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                     },
//                     complete: function () {
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                         //alert('finished');
//                     }
//                 }
//             );
//         });
//         a = 1;
//     }
// });
