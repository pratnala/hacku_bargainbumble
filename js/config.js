/* METRO UI TEMPLATE v2.0.0
/* Copyright 2012 Thomas Verelst, http://metro-webdesign.info

/*GENERAL SETTINGS VARS */
scale = 135; //Size of tiles 
tileSpace = 10; //Space between tiles
tileGroupSpace = 800 //Space between the first elements of groups of tiles on the homepage.
tileGroupTitles = new Array('Buy','Sell','Interact');
hideMenu = true; //hide menu when going to the tile page (after a page had been visited, for coding reasons), if you want to show always (so also in the beginning, remove the css line in main.css "display:none;" from element #nav (line 126),    this is mostly only handy if you set all the groupTitles in the menu, so it is like a group selector menu

hideSpeed = 400; //how fast should the content fade out when switching pages

jQuery.fx.interval=25; // Smoothness of effects, higher = less smooth & less CPU utilization. Too low can be choppy!

/*PAGES information: EVERY page on your site that must be opened with the framework must be included here, see tutorial for more information */
pageLink= new Array(); /* the index of pageLink MUST be the pagename (like it will be shown in the titlebar)*/
pageLink['Following'] = 'following.html';
pageLink['Popular Stuff'] = 'Popular.html';
pageLink['Ending Soon'] = 'EndingSoon.html';
pageLink['Best Bargains'] = 'Bargains.html';
pageLink['Everything'] = 'All.html';
pageLink['Testing slides'] = 'testslides.html';
pageLink['Other content to test'] = 'othercontent.php';
pageLink['Add Items'] = 'AddItem.html';
pageLink['My Items'] = 'MyItems.html';
pageLink['Coming Soon'] = 'ComingSoon.html';

/* MENU BAR Information: The index of this array is the name like it will be shown in the menu, 
the value of the array is the pageLink where it should go to, case-insensitive 
OR the absolute link, like http://google.com*/
menuLink = new Array(); 
menuLink['Me'] = "";
menuLink['Following'] = "Following";
menuLink['Popular'] = "Popular Stuff";// this will go immediatly to the tile group 'Another Group'
menuLink['Ending Soon'] =  "Ending Soon";
menuLink['Bargains For You'] =  "Best Bargains";
menuLink['Add an item']= "Add Items";
menuLink['My items']= "My Items";

menuColor = new Array();
menuColor['Me'] = "#C936D3";
menuColor['Following'] = "#FFA500";
menuColor['Popular'] = "#FE2E64";
menuColor['Ending Soon'] =  "#B4F63D";
menuColor['Bargains For You'] =  "#006957";
menuColor['Add an item']= "#36BBCE";
menuColor['My items']= "#800000";