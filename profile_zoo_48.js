// Created by Viral of Viral's Modifications - http://viralsmods.com
var awards = {
    start: function() {
        if (location.href.match(/\/profile\/\d+\/?/)) {
            for (var a = 0; a < profile_zoo.users.length; a++) {
                awards.present(a);
            }
        } else if (location.href.match(/\/topic\/\d+\/?/)){
            for (var a=0; a<profile_zoo.users.length; a++){
                awards.present(a);
            }
        }
    },
    present: function(a) {
        var award = profile_zoo.users[a];
	var icon_64 = get_icon(award);
        if ($("." + award[0] + "-awards").size() === 0 && location.href.indexOf('/profile/' + award[0] + '/') !== -1) {
            $("td.c_user").parent().after('<tr><td style="vertical-align: top; font-size: 11px;"><dt>' + profile_zoo.name + ':</dt></td><td><dd style="margin: 0;" class="' + award[0] + '-awards"><div onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" class="' + icon_64 + '" alt="' + award[1] + '"></div></dd></td></tr>');
        } else if ($("." + award[0] + "-awards").size() === 0) {
	    $("a.member[href=" + main_url + "profile/" + award[0] + "/]").parent().parent().next().find("dl.user_info dd.spacer").before('<dt>' + profile_zoo.name + ':</dt><dd class="' + award[0] + '-awards"><div onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" class="thumb_' + icon_64 + '" alt="' + award[1] + '"></div></dd>');
        } else if (location.href.indexOf('/profile/' + award[0] + '/') === -1) {
            $("." + award[0] + "-awards").append('<div onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" class="thumb_' + icon_64 + '" alt="' + award[1] + '"></div>');
        } else {
	    $("." + award[0] + "-awards").append('<div onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" class="' + icon_64 + '" alt="' + award[1] + '"></div>');
	}
    },
    tooltip: {
        current: 0,
        open: function(event, a) {
            var award = profile_zoo.users[a];
            var pos = awards.mouse.locate(event);
            awards.tooltip.coords = [pos[0], pos[1]];
            if ($("#" + a + "-tooltip").size() === 0) $("body").append('<div id="' + a + '-tooltip" style="position:absolute;max-width:500px;"><table><tbody><tr><td style="padding: 0px;"><div class="' + get_icon(award) + '" alt="' + award[1] + '"></div></td><td>' + award[3] + '<hr /><b>' + award[1] + '</b> | ' + award[2] + '<hr /><i> ' + award[7] + '</i></td></tr></tbody></table></div>');
            var elem = document.getElementById(a + "-tooltip");
            elem.style.left = pos[0] + 25 + "px";
            elem.style.top = pos[1] - 25 + "px";
            awards.tooltip.current = a;
            document.onmousemove = awards.tooltip.update;
        },
        update: function(event) {
            var pos = awards.mouse.locate(event);
            var elem = document.getElementById(awards.tooltip.current + "-tooltip");
            if (elem !== null) {
                elem.style.left = pos[0] + 25 + "px";
                elem.style.top = pos[1] - 25 + "px";
            } else {
                document.onmousemove = null;
            }
        },
        bye: function(a) {
            switch (profile_zoo.closeFunction) {
                case "slide":
                    $("#" + a + "-tooltip").slideToggle("fast", function() {
                        $(this).remove();
                    });
                    break;
                case "fade":
                    $("#" + a + "-tooltip").fadeOut("fast", function() {
                        $(this).remove();
                    });
                    break;
                default:
                    $("#" + a + "-tooltip").remove();
                    break;
            }
        }
    },
    mouse: {
        locate: function(event) {
            e = event || window.event;
            coords = [0, 0];
            if (e.pageX || e.pageY) {
                coords = [e.pageX, e.pageY];
            } else {
                var de = document.documentElement;
                var b = document.body;
                coords = [e.clientX + (de.scrollLeft || b.scrollLeft) - (de.clientLeft || 0), e.clientY + (de.scrollTop || b.scrollTop) - (de.clientTop || 0)];
            }
            return coords;
        }
    }
};
awards.start();
