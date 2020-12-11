$(document).ready(function(){
  function addCase() {
    event.preventDefault();

    let name = $('input').val(),
        description = $('textarea').val();

    if (name.length !== 0 && description.length !== 0) {
      $('input').removeClass('error'),
      $('textarea').removeClass('error');

      $('.is_empty').hide();

      $('.case_list').append(`
      <li class="item_list">
        <div class="row item_list_head">
          <div class="item_list_head_box row">
            <h3>${name}</h3>
            <button class="btn cloze_button" aria-label="cloze" type="button" name="cloze_button"></button>
          </div>
          <button class="btn folding-button" aria-expanded="true" aria-label="folding" type="button" name="folding-button"></button>
        </div>

        <p class="row description_1">${description}</p>
      </li>
       `);

     $('input').val('');
     $('textarea').val('');
   } else {
      $('input').addClass('error');
      $('textarea').addClass('error');
    }
  }

  function deleteCase(item) {
    item.remove();
    let items = $('.item_list');
    if(items.length == 0) {
      $('.is_empty').show();
    }
  }

  $('.add_case').on('submit', addCase);

  $('body').on('click', '.cloze_button', function(event) {
    event.preventDefault();

    let item = $(this).parents('.item_list');

    deleteCase(item);

  })

  $('body').on('click', '.folding-button', function(event) {
    event.preventDefault();

      $(this).parents('.item_list').find('.description_1').slideToggle();

      if ($(this).parents('.item_list').find('.folding-button').attr('aria-expanded') == 'true') {
      $(this).parents('.item_list').find('.folding-button').attr('aria-expanded', false);
      } else {
      $(this).parents('.item_list').find('.folding-button').attr('aria-expanded', true);
      }

      console.log ($(this).parents('.item_list').find('.folding-button').attr('aria-expanded') === 'true');

  });



});
