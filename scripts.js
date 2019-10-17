$(() => {
  //Get/Read Request
  $("#get-button").on('click', () => {
    $.ajax({
      url: '/products',
      type: 'get',
      contentType: 'application/json',
      success: (res) => {
        let tbodyEl = $('tbody');
        tbodyEl.html('');

        res.products.forEach((prod) => {
          tbodyEl.append('\
            <tr>\
              <td class="id">' + prod.id + '</td>\
              <td><input type="text" class="name" value= "' + prod.name + '"</td>\
              <td>\
                <button class="update-button">UPDATE/PUT</button>\
                <button class="delete-button">DELETE</button>\
              </td>\
            </tr>\
          ')
        })
      }
    })
  })

  // CREATE/POST
  //NOTE: The reason for the prevent default is to prevent the form from refreshing the page, since with jQuery, the page doesn't need to refresh, in order for us to get the results
  $('#form1').on('submit', (event) => {
    event.preventDefault()
  })

  let createInput = $('#create-input');

  $.ajax({
    url: '/products',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({name: createInput.val()}),
    success: (res) => {
      console.log(res)
      createInput.val('')
      $('#get-button').click()
    }
  })



}) // End of jQuery
