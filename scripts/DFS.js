
   
    var DFS_AV_1 = 'Let us look at the details of how a depth-first search works.'
    var DFS_AV_2 = 'Call depth first search on A'
    var DFS_AV_3 = 'Completed depth first search graph'

  

    $(document).ready(function() {
        mixpanel.track('Visit', {'name': 'Practice visualize page'});
        $(".left-nav-link").each(function() {
            var p_url = $(this).attr('href');
            $(this).attr('href', p_url + 'visualize/');
        });
        $('#run').on('click', function() {
            $('.legend-av').addClass('legend');
            $('.controler-container .jsavoutput').addClass('jsavoutput-container');
            var target_offset = $('#av-output').offset(),
            target_top = target_offset.top - 20;

            $('html, body').animate({scrollTop:target_top}, 500);
            $('#reset').removeClass('hidden');
        });

        $('#reset').on('click', function() {
            $('.legend-av').removeClass('legend');
            $('.controler-container .jsavoutput').removeClass('jsavoutput-container');
        });
    });

$(document).ready(function() {
    $('#run').click();
});

(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);mixpanel.init("4c30b8635363027dfb780d5a61785112");
       