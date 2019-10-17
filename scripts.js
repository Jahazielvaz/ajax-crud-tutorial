$(() => {
  //Get/Read Request
  $("#get-button").on('click', () => {
    $.ajax({
      url: '/products',
      contentType: 'application/json',
      success: (res) => {
        let tbodyEl = $('tbody');
        tbodyEl.html('');

        res.products.forEach((prod) => {
          tbodyEl.append('\
            <tr>\
              <td class="id">' + product.id + '</td>\
              <td><input type="text" class="name" value= "' + product.name + '"</td>\
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



}) // End of jQuery
