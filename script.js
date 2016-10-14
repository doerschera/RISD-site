$(document).ready(function() {

  // css fixes
  responsiveColumns();
  $(window).resize(responsiveColumns);

  function responsiveColumns() {
    columnHeight('#majorsList', '#majorDescription');
    columnHeight('#liberalArts', '#foundations');
  }

  function columnHeight(left, right) {
    var height1 = $(left).css('height');
    var height2 = $(right).css('height');

    if(height1 > height2) {
      $(right).css('min-height', height1);
    } else {
      $(left).css('min-height', height2);
    }
  }

})
