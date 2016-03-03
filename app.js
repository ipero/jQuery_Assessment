var counter=0;
$(document).ready(function (){
  $('.main').append('<button class="btn btn-primary generate">Generate</button>');
  $('.main').on('click', '.generate', generateCont);
  $('.container-holder').on('click','.btn-warning', changeToRed);
  $('.container-holder').on('click','.btn-danger', deleteCont);
});

function generateCont(){
  counter++;
  $('.container-holder').append('<div class="box"> '+counter+' </div>');
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
