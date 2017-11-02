var animal_data = {
    festival: "", // "ES", "AA", "MM", "EA" for main; "" = None, "C" = Christmas, "E" = Easter, "H" = Halloween
    rights: 3, // air=0, earth=1, fire=2, water=3
    alleles: [
        ["African Bush Elephant", ["B", 1]],
	["African Cheetah", ["K", 0.8, "k", 0.2]],
	["African Lion", ["W", 0.8, "w", 0.2], ["F", 0.2, "f", 0.8]],
	["Alpine Ibex", ["B", 1]],
	["American Beaver", ["B", 1]],
	["Bengal Tiger", ["W", 0.8, "w", 0.2]],
	["Black Rhinoceros", ["B", 1]],
	["Chimpanzee", ["B", 0.7, "P", 0.3]],
	["Dromedary Camel", ["F", 0.7, "f", 0.3]],
	["Emperor Penguin", ["B", 1]],
	["Gemsbok", ["B", 1]],
	["Giant Panda", ["B", 0.8, "b", 0.2]],
	["Grant's Zebra", ["B", 1]],
	["Greater Flamingo", ["W", 0.2, "w", 0.8]],
	["Grizzly Bear", ["B", 0.5, "K", 0.3, "W", 0.2]],
	["Hippopotamus", ["B", 1]],
	["Indian Peafowl", ["W", 0.9, "w", 0.1], ["B", 0.8, "b", 0.2]],
	["Jaguar", ["B", 0.05, "b", 0.95]],
	["Moose", ["B", 0.5, "W", 0.5], ["S", 0.2, "s", 0.8]],
	["Mountain Gorilla", ["B", 1]],
	["Nile Crocodile", ["B", 1]],
	["Okapi", ["B", 1]],
	["Ostrich", ["P", 0.7, "S", 0.3]],
	["Polar Bear", ["B", 1]],
	["Red Kangaroo", ["R", 0.6, "r", 0.4], ["G", 0.7, "g", 0.3]],
	["Red Panda", ["B", 1]],
	["Reticulated Giraffe", ["B", 0.2, "d", 0.8]],
	["Ring-Tailed Lemur", ["B", 1]],
	["Snow Leopard", ["B", 1]],
	["Thomson's Gazelle", ["B", 1]],
    ],
    data: [
        ["African Bush Elephant", 5, 1.55, 2100, "africanbushelephant", "Y"],
	["African Cheetah", 3, 4, 1300, "africancheetah", "Y"],
	["African Lion", 4, 3.5, 1800, "africanlion", "Y"],
	["Alpine Ibex", 2, 1.75, 1000, "alpineibex", "Y"],
	["American Beaver", 1, 5, 600, "americanbeaver", "Y"],
	["Bengal Tiger", 4, 3.5, 1700, "bengaltiger", "Y"],
	["Black Rhinoceros", 5, 1.55, 2100, "blackrhinoceros", "Y"],
	["Chimpanzee", 3, 1.75, 1400, "chimpanzee", "Y"],
	["Dromedary Camel", 1, 1.65, 600, "dromedarycamel", "Y"],
	["Emperor Penguin", 2, 1, 1000, "emperorpenguin", "Y"],
	["Gemsbok", 3, 1.6, 1300, "gemsbok", "Y"],
	["Giant Panda", 5, 1.75, 2200, "giantpanda", "Y"],
	["Grant's Zebra", 3, 1.6, 1200, "grantszebra", "Y"],
	["Greater Flamingo", 1, 1.2, 500, "greaterflamingo", "Y"],
	["Grizzly Bear", 4, 3, 1600, "grizzlybear", "Y"],
	["Hippopotamus", 4, 1.55, 1800, "hippopotamus", "Y"],
	["Indian Peafowl", 1, 5, 400, "indianpeafowl", "Y"],
	["Jaguar", 3, 3.5, 1200, "jaguar", "Y"],
	["Moose", 3, 1.6, 1400, "moose", "Y"],
	["Mountain Gorilla", 5, 1.65, 2200, "mountaingorilla", "Y"],
	["Nile Crocodile", 2, 6, 900, "nilecrocodile", "Y"],
	["Okapi", 4, 1.6, 1700, "okapi", "Y"],
	["Ostrich", 2, 5, 800, "ostrich", "Y"],
	["Polar Bear", 5, 3, 2000, "polarbear", "Y"],
	["Red Kangaroo", 1, 1, 500, "redkangaroo", "Y"],
	["Red Panda", 2, 2.6, 900, "redpanda", "Y"],
	["Reticulated Giraffe", 4, 1.6, 1600, "reticulatedgiraffe", "Y"],
	["Ring-Tailed Lemur", 1, 2.3, 400, "ringtailedlemur", "Y"],
	["Snow Leopard", 5, 3.5, 2000, "snowleopard", "Y"],
	["Thomson's Gazelle", 2, 1.65, 800, "thomsonsgazelle", "Y"],
    ]
};

function get_icon(animal) {
    var species = animal[1];
    var sex = animal[2];
    var now = new Date;
    var age = now.getTime() - animal[4];
    var genotype = animal[5];
    var icon = "";
    if (species === "African Bush Elephant") {
        if (age < 6048000000) {
	    icon = "africanbushelephant-young";
	} else if (sex === "Male") {
	    icon = "africanbushelephant-male";
	} else {
	    icon = "africanbushelephant-female";
	}
    } else if (species === "African Cheetah") {
        if (age < 3628800000) {
	    if (genotype.includes("K")) {
	        icon = "africancheetah-young";
	    } else {
	        icon = "africancheetah-young-king";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("K")) {
	        icon = "africancheetah-male";
	    } else {
	        icon = "africancheetah-male-king";
	    }
	} else {
	    if (genotype.includes("K")) {
	        icon = "africancheetah-female";
	    } else {
	        icon = "africancheetah-female-king";
	    }
	}
    } else if (species === "African Lion") {
        if (age < 4838400000) {
	    if (genotype.includes("W")) {
	        icon = "africanlion-young";
	    } else {
	        icon = "africanlion-young-white";
	    }
	} else if (sex === "Male") {
	    if (genotype === "W") {
	        if (genotype.includes("F")) {
	            icon = "africanlion-male-fullmane";
	        } else {
	            icon = "africanlion-male";
	        }
	    } else {
	        if (genotype.includes("F")) {
	            icon = "africanlion-male-whitefullmane";
	        } else {
	            icon = "africanlion-male-white";
	        }
	    }
	} else {
	    if (genotype.includes("W")) {
	        icon = "africanlion-female";
	    } else {
	        icon = "africanlion-female-white";
	    }
	}
    } else if (species === "American Beaver") {
        if (age < 1209600000) {
	    icon = "americanbeaver-young";
	} else if (sex === "Male") {
	    icon = "americanbeaver-male";
	} else {
	    icon = "americanbeaver-female";
	}
    } else if (species === "Bengal Tiger") {
        if (age < 4838400000) {
	    if (genotype.includes("W")) {
	        icon = "bengaltiger-young";
	    } else {
	        icon = "bengaltiger-young-white";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("W")) {
	        icon = "bengaltiger-male";
	    } else {
	        icon = "bengaltiger-male-white";
	    }
	} else {
	    if (genotype === "WW") {
	        icon = "bengaltiger-female";
	    } else {
	        icon = "bengaltiger-female-white";
	    }
	}
    } else if (species === "Black Rhinoceros") {
        if (age < 6048000000) {
	    icon = "blackrhinoceros-young";
	} else if (sex === "Male") {
	    icon = "blackrhinoceros-male";
	} else {
	    icon = "blackrhinoceros-female";
	}
    } else if (species === "Chimpanzee") {
        if (age < 3628800000) {
	    icon = "chimpanzee-young";
	} else if (sex === "Male") {
	    if (genotype === "BB") {
	        icon = "chimpanzee-male";
	    } else if (genotype === "PP") {
	        icon = "chimpanzee-male-pink";
	    } else {
	        icon = "chimpanzee-male-split";
	    }
	} else {
	    if (genotype === "BB") {
	        icon = "chimpanzee-female";
	    } else if (genotype === "PP") {
	        icon = "chimpanzee-female-pink";
	    } else {
	        icon = "chimpanzee-female-split";
	    }
	}
    } else if (species === "Dromedary Camel") {
        if (age < 1209600000) {
	    if (genotype.includes("F")) {
	        icon = "dromedary-young";
	    } else {
	        icon = "dromedary-young-white";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("F")) {
	        icon = "dromedary-male";
	    } else {
	        icon = "dromedary-male-white";
	    }
	} else {
	    if (genotype.includes("F")) {
	        icon = "dromedary-female";
	    } else {
	        icon = "dromedary-female-white";
	    }
	}
    } else if (species === "Emperor Penguin") {
        if (age < 1209600000) {
	    icon = "emperorpenguin-egg";
	} else if (age < 2419200000) {
	    icon = "emperorpenguin-young";
	} else if (sex === "Male") {
	    icon = "emperorpenguin-male";
	} else {
	    icon = "emperorpenguin-female";
	}
    } else if (species === "Gemsbok") {
        if (age < 3628800000) {
	    icon = "gemsbok-young";
	} else if (sex === "Male") {
	    icon = "gemsbok-male";
	} else {
	    icon = "gemsbok-female";
	}
    } else if (species === "Giant Panda") {
        if (age < 6048000000) {
	    if (genotype.includes("B")) {
	        icon = "giantpanda-young";
	    } else {
	        icon = "giantpanda-young-brown";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
	        icon = "giantpanda-male";
	    } else {
	        icon = "giantpanda-male-brown";
	    }
	} else {
	    if (genotype.includes("B")) {
	        icon = "giantpanda-female";
	    } else {
	        icon = "giantpanda-female-brown";
	    }
	}
    } else if (species === "Greater Flamingo") {
        if (age < 604800000) {
	    icon = "greaterflamingo-egg";
	} if (age < 1209600000) {
	    icon = "greaterflamingo-young";
	} else if (sex === "Male") {
	    if (genotype.includes("P")) {
	        icon = "greaterflamingo-male-wild";
	    } else {
	        icon = "greaterflamingo-male";
	    }
	} else {
	    if (genotype.includes("P")) {
	        icon = "greaterflamingo-female-wild";
	    } else {
	        icon = "greaterflamingo-female";
	    }
	}
    } else if (species === "Grizzly Bear") {
        if (age < 4838400000) {
	    if (genotype.includes("B")) {
	        if (genotype.includes("K")) {
		    icon = "grizzlybear-young";
		} else if (genotype.includes("W")) {
		    icon = "grizzlybear-young-lightbrown";
		} else {
		    icon = "grizzlybear-young-brown";
		}
	    } else if (genotype.includes("K")) {
	        if (genotype.includes("W")) {
		    icon = "grizzlybear-young-silver";
		} else {
		    icon = "grizzlybear-young-dark";
		}
	    } else {
	        icon = "grizzlybear-young-light";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
	        if (genotype.includes("K")) {
		    icon = "grizzlybear-male";
		} else if (genotype.includes("W")) {
		    icon = "grizzlybear-male-lightbrown";
		} else {
		    icon = "grizzlybear-male-brown";
		}
	    } else if (genotype.includes("K")) {
	        if (genotype.includes("W")) {
		    icon = "grizzlybear-male-silver";
		} else {
		    icon = "grizzlybear-male-dark";
		}
	    } else {
	        icon = "grizzlybear-male-light";
	    }
	} else {
	    if (genotype.includes("B")) {
	        if (genotype.includes("K")) {
		    icon = "grizzlybear-female";
		} else if (genotype.includes("W")) {
		    icon = "grizzlybear-female-lightbrown";
		} else {
		    icon = "grizzlybear-female-brown";
		}
	    } else if (genotype.includes("K")) {
	        if (genotype.includes("W")) {
		    icon = "grizzlybear-female-silver";
		} else {
		    icon = "grizzlybear-female-dark";
		}
	    } else {
	        icon = "grizzlybear-female-light";
	    }
	}
    } else if (species === "Indian Peafowl") {
        if (age < 604800000) {
	    icon = "indianpeafowl-egg";
	} else if (age < 1209600000) {
	    if (genotype.includes("WW")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-young";
		} else {
		    icon = "indianpeafowl-young-blackshoulder";
		}
	    } else if (genotype.includes("W")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-young-split";
		} else {
		    icon = "indianpeafowl-young-blackshouldersplit";
		}
	    } else {
	        icon = "indianpeafowl-young-white";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("WW")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-male";
		} else {
		    icon = "indianpeafowl-male-blackshoulder";
		}
	    } else if (genotype.includes("W")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-male-split";
		} else {
		    icon = "indianpeafowl-male-blackshouldersplit";
		}
	    } else {
	        icon = "indianpeafowl-male-white";
	    }
	} else {
	    if (genotype.includes("WW")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-female";
		} else {
		    icon = "indianpeafowl-female-blackshoulder";
		}
	    } else if (genotype.includes("W")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-female-split";
		} else {
		    icon = "indianpeafowl-female-blackshouldersplit";
		}
	    } else {
	        icon = "indianpeafowl-female-white";
	    }
	}
    } else if (species === "Mountain Gorilla") {
        if (age < 6048000000) {
	    icon = "mountaingorilla-young";
	} else if (sex === "Male") {
	    icon = "mountaingorilla-male";
	} else {
	    icon = "mountaingorilla-female";
	}
    } else if (species === "Nile Crocodile") {
        if (age < 1209600000) {
	    icon = "nilecrocodile-egg";
	} else if (age < 2419200000) {
	    icon = "nilecrocodile-young";
	} else if (sex === "Male") {
	    icon = "nilecrocodile-male";
	} else {
	    icon = "nilecrocodile-female";
	}
    } else if (species === "Okapi") {
        if (age < 4838400000) {
	    icon = "okapi-young";
	} else if (sex === "Male") {
	    icon = "okapi-male";
	} else {
	    icon = "okapi-female";
	}
    } else if (species === "Ostrich") {
        if (age < 1209600000) {
	    icon = "ostrich-egg";
	} else if (age < 2419200000) {
	    icon = "ostrich-young";
	} else if (sex === "Male") {
	    if (genotype === "PP") {
		icon = "ostrich-male";
	    } else if (genotype === "SS") {
	        icon = "ostrich-male-somali";
	    } else {
	        icon = "ostrich-male-cross";
	    }
	} else {
	    if (genotype === "PP") {
		icon = "ostrich-female";
	    } else if (genotype === "SS") {
	        icon = "ostrich-female-somali";
	    } else {
	        icon = "ostrich-female-cross";
	    }
	}
    } else if (species === "Polar Bear") {
        if (age < 6048000000) {
	    icon = "polarbear-young";
	} else if (sex === "Male") {
	    icon = "polarbear-male";
	} else {
	    icon = "polarbear-female";
	}
    } else if (species === "Red Kangaroo") {
        if (age < 1209600000) {
	    icon = "redkangaroo-young";
	} else if (sex === "Male") {
	    if (genotype.includes("R")) {
		icon = "redkangaroo-male";
	    } else {
	        icon = "redkangaroo-male-grey";
	    }
	} else {
	    if (genotype.includes("G")) {
		icon = "redkangaroo-female";
	    } else {
	        icon = "redkangaroo-female-red";
	    }
	}
    } else if (species === "Red Panda") {
        if (age < 2419200000) {
	    icon = "redpanda-young";
	} else if (sex === "Male") {
	    icon = "redpanda-male";
	} else {
	    icon = "redpanda-female";
	}
    } else if (species === "Reticulated Giraffe") {
        if (age < 4838400000) {
	    icon = "reticulatedgiraffe-young";
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
		icon = "reticulatedgiraffe-male-dark";
	    } else {
	        icon = "reticulatedgiraffe-male";
	    }
	} else {
	    if (genotype.includes("B")) {
	        icon = "reticulatedgiraffe-female-dark";
	    } else {
	        icon = "reticulatedgiraffe-female";
       	    }
	}
    } else if (species === "Ring-Tailed Lemur") {
        if (age < 1209600000) {
	    icon = "ringtailedlemur-young";
	} else if (sex === "Male") {
	    icon = "ringtailedlemur-male";
	} else {
	    icon = "ringtailedlemur-female";
	}
    } else if (species === "Snow Leopard") {
        if (age < 6048000000) {
	    icon = "snowleopard-young";
	} else if (sex === "Male") {
	    icon = "snowleopard-male";
	} else {
	    icon = "snowleopard-female";
	}
    } else if (species === "Thomson's Gazelle") {
        if (age < 2419200000) {
	    icon = "thomsonsgazelle-young";
	} else if (sex === "Male") {
	    icon = "thomsonsgazelle-male";
	} else {
	    icon = "thomsonsgazelle-female";
	}
    }
    return icon;
}

function get_animal_id(animal) {
    var len = animal_data.alleles.length;
    var i;
    for (i = 0; i < len; i++) {
        if (animal_data.alleles[i][0] === animal) {
	    return i;
	}
    }
    return -1;
}

function get_random_genes(animal) {
    var id = get_animal_id(animal);
    var gene_list = animal_data.alleles[id];
    var len = gene_list.length;
    var i;
    if (gettribe() == animal_data.rights) {
        for (i = 1; i < len; i++) {
            var leng = gene_list[i].length;
	    var j;
	    var sum = 0;
	    for (j = 1; j < leng; j++) {
	        sum = sum + gene_list[i][j]^2;
		j++;
		alert(sum);
	    }
	    for (j = 1; j < leng; j++) {
	        gene_list[i][j] = (gene_list[i][j]^2)/sum;
		j++;
	    }
        }
	alert(gene_list[i]);
    }
    var genotype = "";
    for (i = 1; i < len; i++) {
        var chance = Math.random();
	var leng = gene_list[i].length;
	var j;
	for (j = 1; j < leng; j++) {
	    if (chance < gene_list[i][j]) {
	        genotype = genotype + gene_list[i][j-1];
                j = leng;
	    } else {
	        chance = chance - gene_list[i][j];
		j++;
	    }
	}
	chance = Math.random();
	for (j = 1; j < leng; j++) {
	    if (chance < gene_list[i][j]) {
	        genotype = genotype + gene_list[i][j-1];
                j = leng;
	    } else {
	        chance = chance - gene_list[i][j];
		j++;
	    }
	}
    }
    return genotype;
}

function get_species_rank(animal) {
    var id = get_animal_id(animal)
    return Number(animal_data.data[id][1]);
}

function get_species_fertility(animal) {
    var id = get_animal_id(animal)
    return Number(animal_data.data[id][2]);
}

function get_species_cost(animal) {
    var id = get_animal_id(animal)
    return Number(animal_data.data[id][3]);
}
