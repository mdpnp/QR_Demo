//Upon click, displays the correct page of a tabbar
displayTabBar = function(event){
   		 var clikedTab = $(event.target);
   		 var name = clikedTab.data('name');

   		 //update tabs style
   		 $('#mdpnpscenariostabbar').children().removeClass("selectedTab");
   		 clikedTab.addClass('selectedTab');

   		 //update divs style
   		 // $('#mdpnpscenariostabs').children().addClass("hidden");
   		 $('#mdpnpscenariostabs').children().hide();
   		 // $("#"+name).removeClass("hidden");
   		 $("#"+name).fadeIn('slow')

   }
