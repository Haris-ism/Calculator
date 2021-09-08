$(".calculation").on('click',function(){
  if($(this).attr('item')!='operator'){
    $(".display").val($(".display").val()+$(this).val());
  }
  else{
    if($(".display").val()!=''){
      $(".display").val($(".display").val()+$(this).val());
    }
  }
});
$(".clear").on('click',function(){
  $(".display").val('');
});
$(".equals").on('click',function(){
  var expression = $(".display").val();
  $(".display").val(eval(expression));
});
