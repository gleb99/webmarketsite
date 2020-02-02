
$('#close').click(function(){
  $('#search_div').hide('slow');
  $('#wrapper').css('display','block');
    }
  );

$('#close_menu').click(function(){
  $('#menu_list').hide('slow');
    }
  );

  $('#search').click(function(){
    $('#search_div').show('slow',function() {
      $('#search_div').attr('style','display: flex');
      $('#wrapper').css('display','none');
       }
    );
  }
);

$('#search2').click(function(){
  $('#search_div').show('slow',function() {
    $('#search_div').attr('style','display: flex');
    $('#wrapper').css('display','none');
      }
    );
  }
);   

$('#menu').click(function(){
  $('#menu_list').show('slow',function() {
    $('#menu_list').attr('style','display: flex');
      }
    );
  }
);

  $('#menu2').click(function(){
    $('#menu_list').show('slow',function() {
     $('#menu_list').attr('style','display: flex');
       }
    );
  }
)

