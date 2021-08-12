var itemRow = '';
var itemInput = $('.item');


$('.add-item').on('click', function () {
  var newItem = itemInput.val();
// Dodavanje aktivnosti
  if (newItem != '') {
    itemRow = '<tr>';
    itemRow += '<td>' + newItem + '</td>';
    itemRow += '<td><button class="btn btn-danger delete">DELETE</button></td>';
    itemRow += '</tr>';
    $('.item-list tbody').append(itemRow);

    //Resetovanje inputa
    itemInput.val('').focus();
  } else {
    alert('Unestite aktivnost');
  }
});
//Brisanje iz liste
$('tbody').on('click', '.delete', function () {
  $(this).closest('tr').remove(); //najblizi element table row-u (closest)
  itemInput.focus();
});
