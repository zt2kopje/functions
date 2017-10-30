// Created by Viral of Viral's Modifications - http://viralsmods.com
var profile_zoo = {
  name : "Animal Collection:",
  thumbnail : [16, 16],
  closeFunction : "fade",
  users : [
    [5063823,"1 - Patrick Dangerfield","http://b3.ifrm.com/30609/91/0/p3005856/card_1_p_dangerfield.png","Geelong Cats","2017"],
    [5063823,"2 - Dustin Martin","http://b3.ifrm.com/30609/91/0/p3005857/card_2_d_martin.png","Richmond Tigers","2017"],
    [5063823,"3 - Marcus Bontempelli","http://b3.ifrm.com/30609/91/0/p3005858/card_3_m_bontempelli.png","Western Bulldogs","2017"],
    [5063823,"4 - Josh Kennedy","http://b3.ifrm.com/30609/91/0/p3005859/card_4_j_kennedy.png","Sydney Swans","2017"],
    [5063823,"5 - Nat Fyfe","http://b3.ifrm.com/30609/91/0/p3005860/card_5_n_fyfe.png","Fremantle Dockers","2017"],
    [5063823,"6 - Adelaide Crows","http://b3.ifrm.com/30609/91/0/p3005861/card_6_a_crows.png","Adelaide Crows","2017"],
    [5063823,"7 - Rory Sloane","http://b3.ifrm.com/30609/91/0/p3005862/card_7_r_sloane.png","Adelaide Crows","2017"],
    [5063823,"8 - Eddie Betts","http://b3.ifrm.com/30609/91/0/p3005863/card_8_e_betts.png","Adelaide Crows","2017"],
    [5063823,"9 - Josh Jenkins","http://b3.ifrm.com/30609/91/0/p3005864/card_9_j_jenkins.png","Adelaide Crows","2017"],
    [5063823,"10 - Brisbane Lions","http://b3.ifrm.com/30609/91/0/p3005865/card_10_b_lions.png","Brisbane Lions","2017"],
    [5063823,"11 - Tom Rockliff","http://b3.ifrm.com/30609/91/0/p3005866/card_11_t_rockliff.png","Brisbane Lions","2017"],
    [5063823,"12 - Dayne Zorko","http://b3.ifrm.com/30609/91/0/p3005867/card_12_d_zorko.png","Brisbane Lions","2017"]
  ]
};



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
        if ($("." + award[0] + "-awards").size() === 0 && location.href.indexOf('/profile/' + award[0] + '/') !== -1) {
            $("td.c_user").parent().next().after('<tr><td><dt>' + profile_zoo.name + ':</dt></td><td><dd class="' + award[0] + '-awards"><img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + award[2] + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" /></dd></td></tr>');
        } else if ($("." + award[0] + "-awards").size() === 0) {
	    $("a.member[href=" + main_url + "profile/" + award[0] + "/]").parent().parent().next().find("dl.dynamo_user_info dd.spacer").before('<dt>' + profile_zoo.name + ':</dt><dd class="' + award[0] + '-awards"><img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + award[2] + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" /></dd>');
        } else {
            $("." + award[0] + "-awards").append('<img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + award[2] + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" />');
        }
    },
    marquee: function(a) {
        var award = profile_zoo.users[a];
	if ($("div#top strong a").attr("href").indexOf('/profile/' + award[0] + '/') !== -1) {
	    var c_num = award[1].split(" ");
	    var c_number = parseInt(c_num[0]);
	    $("marquee#card_marquee img:nth-child(" + c_number + ")").replaceWith('<img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + award[2] + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" />');
	}
    },
    tooltip: {
        current: 0,
        open: function(event, a) {
            var award = profile_zoo.users[a];
            var pos = awards.mouse.locate(event);
            awards.tooltip.coords = [pos[0], pos[1]];
            if ($("#" + a + "-tooltip").size() === 0) $("body").append('<div id="' + a + '-tooltip" style="position:absolute;max-width:500px; background: #08141E; border-radius: 20px; box-shadow: 0px 0px 1px #000; border: 1px solid #ED6030; color: #C3C9D7;"><table><tbody><tr><td style="padding: 0px;"><img src="' + award[2] + '" alt="' + award[1] + '" /></td><td>' + award[1] + '<hr />' + award[3] + '<hr /><strong>Received:</strong> ' + award[4] + '</td></tr></tbody></table></div>');
            var elem = document.getElementById(a + "-tooltip");
            elem.style.left = pos[0] + 10 + "px";
            elem.style.top = pos[1] - 250 + "px";
            awards.tooltip.current = a;
            document.onmousemove = awards.tooltip.update;
        },
        update: function(event) {
            var pos = awards.mouse.locate(event);
            var elem = document.getElementById(awards.tooltip.current + "-tooltip");
            if (elem !== null) {
                elem.style.left = pos[0] + 10 + "px";
                elem.style.top = pos[1] - 250 + "px";
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
