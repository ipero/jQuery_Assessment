
$(document).ready(function (){
  $('.main').append('<button class="btn btn-primary generate">Generate</button>');
  $('.main').on('click', '.generate', generateCont);
  $('.container-holder').on('click','.btn-warning', changeToRed);
  $('.container-holder').on('click','.btn-danger', deleteCont);
});

function generateCont(){
  
  $('.container-holder').append('<div class="container-box"></div>');
  var $el = $('.container-holder').children().last();
  $el.append('<button class="btn btn-warning">Change</button>');
  $el.append('<button class="btn btn-danger">Delete</button>');
}
function changeToRed() {
  $(this).parent().toggleClass('red');
}

function deleteCont() {
  $(this).parent().remove();
}
