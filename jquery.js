
$(function(){
  //for show first picture
  var url = $(".thumbnail").eq(0).attr("src");
  var titre = $(".thumbnail").eq(0).attr("alt");

  $("#galerie img").attr("src", url);
 $(".titre").html(titre);

$(".thumbnail").eq(0).addClass("selected");

//showing another images
$(".thumbnail").click(function(){
  url = $(this).attr("src");
  titre = $(this).attr("alt");

  $("#galerie img").attr("src", url);
  $(".titre").html(titre);

//Mettre en blanc toutes les vignettes :
$(".thumbnail").removeClass("selected");
// Mettre en rouge la vignette sélectionnée:
$(this).addClass("selected"); //this se réfere à la classe .thumbnail sur laquelle on a cliqué



});

});




// $(document).ready(function(){
// $('#divContainer img').on({
//   mouseover : function(){
//     $(this).css({
//       'cursor' : 'pointer',
//       'border-Color' : 'red'
//     });
//   },
//   mouseout : function(){
//     $(this).css({
//       'cursor' : 'default',
//       'border-Color' : 'grey'
//     });
//   },
//   click : function(){
//     var imageUrl = $(this).attr('src');
//     $('#mainImage').attr('src' ,imageUrl);
//   }
// });
// 	});
