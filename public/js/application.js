$(document).ready(function() {
  number_list();
  $(function() {
    $('#sortable').sortable({
      placeholder: "ui-state-highlight"
    });
    $('#sortable').disableSelection();
  });

  $('.btn').click(function(){
    $.blockUI();
    $('.blockOverlay').attr('title','Click to unblock').click($.unblockUI); 
  })

  $('#sortable').mouseup(function(){
    sorted_list_ids = []
    $.post('/change_list').done(function(ajax){
      if (ajax.response){
        $('#sortable').trigger('click');
        $('#sortable li').each(function(index) {
          sorted_list_ids.push($(this).find('#item_id').text());
        });
      }
      $.post('/change_list', { sorted_list: sorted_list_ids });
    });
  });
  $('#sortable').mouseleave(function(){
    number_list();
  })
});

function number_list(){
  var counter = 1
  $('#sortable li').each(function(index, value){
    $(value).find('#counter').remove();
    $(value).prepend('<span id=counter>' + counter + ' - ' + '</span>');
    counter +=1
  });
}




