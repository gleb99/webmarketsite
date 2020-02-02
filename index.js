
$('#close').click(function(){
  $('#search_div').hide('slow');
    }
  );

$('#close_menu').click(function(){
  $('#menu_list').hide('slow');
    }
  );

  $('#search').click(function(){
    $('#search_div').show('slow',function() {
      $('#search_div').attr('style','display: flex');
       }
    );
  }
);

$('#search2').click(function(){
  $('#search_div').show('slow',function() {
    $('#search_div').attr('style','display: flex');
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

