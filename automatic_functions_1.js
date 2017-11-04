// Finds and returns the id of the current member.
function getid() {
    var prof_url = $("div#top_info a").attr("href");
    split_url = prof_url.split("/");
    return Number(split_url[5]);
}

// Finds and returns the number value of the current tribe. 0=Air, 1=Earth, 2=Fire, 3=Water.
function gettribe() {
    var id = getid();
    return Number(id % 4);
}

// Reloads sprites on the page.
function reload_sprites() {
    var queryString = '?reload=' + new Date().getTime();
    $("link#sprites_sheet").href = $("link#sprites_sheet").href.replace(/\?.*|$/, queryString);
}

$(function () {
    
    // Changes tribe forum icons.
    $("tr#forum-5162758 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/p3019025/Air_Icon.png");
    $("tr#forum-5162759 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/p3019026/Earth_Icon.png");
    $("tr#forum-5162760 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/p3019027/Fire_Icon.png");
    $("tr#forum-5162766 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/p3019028/Water_Icon.png");
    
    // Changes multiplayer forum icons.
    $("tr#forum-5079831 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/f7030416/kaza_shape.png");
    $("tr#forum-5163274 td.c_mark img").attr("src", "http://b3.ifrm.com/40043/143/0/f7030417/dino_shape.png");
    
    // Changes Blue Lion's name to Susan and Animal's name to Danny within the Island section.
    // Otherwise, removes new topic buttons in Download section.
    if ($("ul#nav li a[href*='forum/5079817/']").length > 0) {
        $("a[href*='profile/5063821/']").html("<strong>Susan</strong>");
        $("a[href*='profile/5063823/']").html("<strong>Danny</strong>");
    } else if (window.location.pathname === "/Kopje/forum/5079835/") {
        $("div.cat-buttons").remove();
    }
    
    // Removes K.A.Z.A. Topic Icon button outside Multiplayer and Show & Tell sections.
    if ($("ul#nav li a[href*='forum/5079831/']").length == 0 && $("ul#nav li a[href*='forum/5079832/']").length == 0 && $("ul#nav li a[href*='forum/5079833/']").length == 0 && $("ul#nav li a[href*='forum/5079823/']").length == 0) {
        $("form#topic_icon label input[value='[ti]KAZA[/ti]'").parent().remove();
    }
    
    // Removes D.I.N.O. Topic Icon button outside Multiplayer and Show & Tell sections.
    if ($("ul#nav li a[href*='forum/5163274/']").length == 0 && $("ul#nav li a[href*='forum/5079832/']").length == 0 && $("ul#nav li a[href*='forum/5079833/']").length == 0 && $("ul#nav li a[href*='forum/5079823/']").length == 0) {
        $("form#topic_icon label input[value='[ti]DINO[/ti]'").parent().remove();
    }
    
    // Finds tribe of current member and removes other tribe sections.
    var tribe = gettribe();
    if (tribe == 0) {
        $("tr#forum-5162759 + tr").remove();
        $("tr#forum-5162760 + tr").remove();
        $("tr#forum-5162766 + tr").remove();
        $("tr#forum-5162759").remove();
        $("tr#forum-5162760").remove();
        $("tr#forum-5162766").remove();
        if (window.location.pathname === "/Kopje/forum/5162759/" || window.location.pathname === "/Kopje/forum/5162760/" || window.location.pathname === "/Kopje/forum/5162766/" || $("ul#nav li a[href*='forum/5162759/']").length > 0 || $("ul#nav li a[href*='forum/5162760/']").length > 0 || $("ul#nav li a[href*='forum/5162766/']").length > 0) {
            $("div#main").remove();
            window.location.replace("http://s15.zetaboards.com/Kopje/forum/5162758/");
        }
    } else if (tribe == 1) {
        $("tr#forum-5162758 + tr").remove();
        $("tr#forum-5162760 + tr").remove();
        $("tr#forum-5162766 + tr").remove();
        $("tr#forum-5162758").remove();
        $("tr#forum-5162760").remove();
        $("tr#forum-5162766").remove();
        if (window.location.pathname === "/Kopje/forum/5162758/" || window.location.pathname === "/Kopje/forum/5162760/" || window.location.pathname === "/Kopje/forum/5162766/" || $("ul#nav li a[href*='forum/5162758/']").length > 0 || $("ul#nav li a[href*='forum/5162760/']").length > 0 || $("ul#nav li a[href*='forum/5162766/']").length > 0) {
            $("div#main").remove();
            window.location.replace("http://s15.zetaboards.com/Kopje/forum/5162759/");
        }
    } else if (tribe == 2) {
        $("tr#forum-5162758 + tr").remove();
        $("tr#forum-5162759 + tr").remove();
        $("tr#forum-5162766 + tr").remove();
        $("tr#forum-5162758").remove();
        $("tr#forum-5162759").remove();
        $("tr#forum-5162766").remove();
        if (window.location.pathname === "/Kopje/forum/5162758/" || window.location.pathname === "/Kopje/forum/5162759/" || window.location.pathname === "/Kopje/forum/5162766/" || $("ul#nav li a[href*='forum/5162758/']").length > 0 || $("ul#nav li a[href*='forum/5162759/']").length > 0 || $("ul#nav li a[href*='forum/5162766/']").length > 0) {
            $("div#main").remove();
            window.location.replace("http://s15.zetaboards.com/Kopje/forum/5162760/");
        }
    } else if (tribe == 3) {
        $("tr#forum-5162758 + tr").remove();
        $("tr#forum-5162759 + tr").remove();
        $("tr#forum-5162760 + tr").remove();
        $("tr#forum-5162758").remove();
        $("tr#forum-5162759").remove();
        $("tr#forum-5162760").remove();
        if (window.location.pathname === "/Kopje/forum/5162758/" || window.location.pathname === "/Kopje/forum/5162759/" || window.location.pathname === "/Kopje/forum/5162760/" || $("ul#nav li a[href*='forum/5162758/']").length > 0 || $("ul#nav li a[href*='forum/5162759/']").length > 0 || $("ul#nav li a[href*='forum/5162760/']").length > 0) {
            $("div#main").remove();
            window.location.replace("http://s15.zetaboards.com/Kopje/forum/5162766/");
        }
    }
});
