if ($("div#top_info a[href*='profile/6148649/']").length > 0 || $("div#top_info a[href*='profile/3465724/']").length > 0) {
    var stats_string = $("td#stats_members").html();
    stats_string = stats_string + ", <a style='color: #606060' href='http://thezt2roundtable.com/profile/3527471/'><s><i>Fluffs</i></s></a>";
    $("td#stats_members").replaceWith("<td id='stats_members'>" + stats_string + "</td>");
    var stats_string = $("td#stats_legend").html();
    stats_string = stats_string + " · <a style='color: #606060' href='http://thezt2roundtable.com/online/?g=2127050'><s><i>Banned</i></s></a>";
    $("td#stats_legend").replaceWith("<td id='stats_legend'>" + stats_string + "</td>");
    if (location.href.includes("profile/3527471/")) {
        $("td.c_desc").each(function() {
            if ($(this).text() === "Last Activity") {
                $(this).next().text("15 minutes ago · Using PM System");
            }
        });
    }
}

$("a[href*='/profile/3526617/'] span[style*='#0D7BcB']").each(function() {
   if (Math.random() < 1) {
       $(this).parent().replaceWith('<a href="http://thezt2roundtable.com/profile/3526617/" class="member"><span style="color:#0D7BCB">Sheahter</span></a>');
   }
});
