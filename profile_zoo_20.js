// Created by Viral of Viral's Modifications - http://viralsmods.com
function get_icon(animal) {
    var species = animal[1];
    var sex = animal[2];
    var now = new Date;
    var age = Number(now.getTime() - animal[4]);
    alert(age);
    var genotype = animal[5];
    var icon = "";
    if (species === "Reticulated Giraffe") {
        if (age < 5184000000) {
	    icon = "https://i.imgur.com/UglWPRZ.png";
	} else {
//	    if (sex === "Male") {
//	        if (genotype.includes("B") {
		    icon = "https://i.imgur.com/hXUzugd.png";
//		} else {
//		    icon = "https://i.imgur.com/NAGOArt.png";
//		}
//	    } else {
//	        if (genotype.includes("B") {
//		    icon = "https://i.imgur.com/mtsXnR7.png";
//		} else {
//		    icon = "https://i.imgur.com/ar2FEY1.png";
//		}
//	    }
	}
    }
    return icon;
}

var profile_zoo = {
  name : "Animal Collection",
  thumbnail : [16, 16],
  closeFunction : "fade",
  users : [
    ["5063823", "Reticulated Giraffe", "Male", "Simon", 1509275492, "BB", 0.8, "1st Place - Ice Photography Contest"],
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
	var icon_64 = get_icon(award);
        if ($("." + award[0] + "-awards").size() === 0 && location.href.indexOf('/profile/' + award[0] + '/') !== -1) {
            $("td.c_user").parent().after('<tr><td><dt>' + profile_zoo.name + ':</dt></td><td><dd class="' + award[0] + '-awards"><img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + icon_64 + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" /></dd></td></tr>');
        } else if ($("." + award[0] + "-awards").size() === 0) {
	    $("a.member[href=" + main_url + "profile/" + award[0] + "/]").parent().parent().next().find("dl.user_info dd.spacer").before('<dt>' + profile_zoo.name + ':</dt><dd class="' + award[0] + '-awards"><img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + icon_64 + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" /></dd>');
        } else {
            $("." + award[0] + "-awards").append('<img onmouseover="awards.tooltip.open(event,' + a + ');" onmouseout="awards.tooltip.bye(' + a + ');" id="' + a + '-award" src="' + icon_64 + '" alt="' + award[1] + '" width="' + profile_zoo.thumbnail[0] + 'px" height="' + profile_zoo.thumbnail[1] + 'px" />');
        }
    },
    tooltip: {
        current: 0,
        open: function(event, a) {
            var award = profile_zoo.users[a];
            var pos = awards.mouse.locate(event);
            awards.tooltip.coords = [pos[0], pos[1]];
            if ($("#" + a + "-tooltip").size() === 0) $("body").append('<div id="' + a + '-tooltip" style="position:absolute;max-width:500px;"><table><tbody><tr><td style="padding: 0px;"><img src="' + 'https://i.imgur.com/mtsXnR7.png' + '" alt="' + award[1] + '" /></td><td>' + award[3] + '<hr /><b>' + award[1] + '</b> | ' + award[2] + '<hr /><i> ' + award[7] + '</i></td></tr></tbody></table></div>');
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
