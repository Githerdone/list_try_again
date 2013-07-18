$(document).ready(function() {

  $(function() {
    $('#sortable').sortable({
      placeholder: "ui-state-highlight"

    });
    $('#sortable').disableSelection();
  });


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
    number_list();
  });

  // $('.list').mouseup(function(){
       
  // })




});

function number_list(){
  $('#sortable li').each().text('1 - ')
}
