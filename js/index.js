//javascript 
$('#d').click(function(){
    var filepath = $(this).attr('data-filepath');
    top.location.href = filepath;
});
