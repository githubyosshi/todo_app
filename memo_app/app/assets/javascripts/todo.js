$(function() {
  function buildHTML(todo) {
    var html = $('<li class="todo">').append(todo.content);
    return html;
  }

// フォームが送信された時に、一連の処理が行われる
  $('.js-form').on('submit', function(e) {
//テキストフィールドに入力された値を取得
    e.preventDefault();
    var textField = $('.js-form__text-field');

    var todo = textField.val();

  //非同期通信に成功した時の記述
    $.ajax({
      type: 'POST',
      url: '/todos.json',
      data: {
        todo: {
          content: todo
        }
      },
      dataType: 'json'
    })

    //即時関数の第一引数には、サーバから返されたデータが入っています
    .done(function(data) {
      var html = buildHTML(data);
      $('.todos').append(html);
      textField.val('');
    })

//通信に失敗した時の処理で今回はアラートを出す
    .fail(function() {
      alert('error');
    });
  });
});
