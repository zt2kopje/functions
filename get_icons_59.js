var animal_data = {
    festival: "", // leave empty if none, "ES", "AA", "MM", "EA"
    rights: -1, // air=0, earth=1, fire=2, water=3
    alleles: [
        ["African Bush Elephant", ["B", 1]],
	["African Cheetah", ["K", 0.8, "k", 0.2]],
	["African Lion", ["W", 0.8, "w", 0.2], ["F", 0.2, "f", 0.8]],
	["Alpine Ibex", ["B", 1]],
	["American Beaver", ["B", 1]],
	["Bengal Tiger", ["W", 0.8, "w", 0.2]],
	["Black Rhinoceros", ["B", 1]],
	["Budgerigar", ["B", 0.5, "b", 0.5], ["G", 0.05, "g", 0.95], ["D", 0.1, "d", 0.9], ["S", 0.1, "s", 0.9], ["A", 0.75, "a", 0.25]],
	["Chimpanzee", ["B", 0.7, "P", 0.3]],
	["Dromedary Camel", ["F", 0.7, "f", 0.3]],
	["Emperor Penguin", ["B", 1]],
	["Gemsbok", ["B", 1]],
	["Giant Anteater", ["B", 1]],
	["Giant Panda", ["B", 0.8, "b", 0.2]],
	["Grant's Zebra", ["B", 1]],
	["Greater Flamingo", ["W", 0.2, "w", 0.8]],
	["Grizzly Bear", ["B", 0.5, "K", 0.3, "W", 0.2]],
	["Hippopotamus", ["B", 1]],
	["Indian Peafowl", ["W", 0.8, "w", 0.1, "p", 0.1], ["B", 0.8, "b", 0.2], ["E", 0.9, "e", 0.1]],
	["Jaguar", ["B", 0.05, "b", 0.95]],
	["Malayan Tapir", ["B", 1]],
	["Moose", ["B", 0.55, "R", 0.45]],
	["Mountain Gorilla", ["B", 1]],
	["Nile Crocodile", ["B", 1]],
	["Okapi", ["B", 1]],
	["Ostrich", ["P", 0.7, "S", 0.3]],
	["Platypus", ["B", 1]],
	["Polar Bear", ["B", 1]],
	["Red Kangaroo", ["R", 0.6, "r", 0.4], ["G", 0.7, "g", 0.3]],
	["Red Panda", ["W", 0.5, "w", 0.5]],
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
	["Budgerigar", 1, 5, 100, "budgerigar", "G"],
	["Chimpanzee", 3, 1.75, 1400, "chimpanzee", "Y"],
	["Dromedary Camel", 1, 1.65, 600, "dromedarycamel", "Y"],
	["Emperor Penguin", 2, 1, 1000, "emperorpenguin", "Y"],
	["Gemsbok", 3, 1.6, 1300, "gemsbok", "Y"],
	["Giant Anteater", 2, 1, 1000, "giantanteater", "N"], 
	["Giant Panda", 5, 1.75, 2200, "giantpanda", "Y"],
	["Grant's Zebra", 3, 1.6, 1200, "grantszebra", "Y"],
	["Greater Flamingo", 1, 1.2, 500, "greaterflamingo", "Y"],
	["Grizzly Bear", 4, 3, 1600, "grizzlybear", "Y"],
	["Hippopotamus", 4, 1.55, 1800, "hippopotamus", "Y"],
	["Indian Peafowl", 1, 5, 400, "indianpeafowl", "Y"],
	["Jaguar", 3, 3.5, 1200, "jaguar", "Y"],
	["Malayan Tapir", 3, 1.6, 1300, "malayantapir", "N"],
	["Moose", 3, 1.6, 1400, "moose", "Y"],
	["Mountain Gorilla", 5, 1.65, 2200, "mountaingorilla", "Y"],
	["Nile Crocodile", 2, 6, 900, "nilecrocodile", "Y"],
	["Okapi", 4, 1.6, 1700, "okapi", "Y"],
	["Ostrich", 2, 5, 800, "ostrich", "Y"],
	["Platypus", 4, 2.6, 1600, "platypus", "N"],
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
	    if (genotype.includes("W")) {
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
    } else if (species === "Alpine Ibex") {
        if (age < 2419200000) {
	    icon = "alpineibex-young";
	} else {
	    switch(now.getMonth()) {
		case 10:
		case 11:
		case 12:
                case 1:
                case 2:
		case 3:
                    if(sex === "Male") {
		        icon = "alpineibex-male-winter";
		    } else {
		        icon = "alpineibex-female-winter";
		    }
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    if(sex === "Male") {
		        icon = "alpineibex-male";
		    } else {
		        icon = "alpineibex-female";
		    }
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
    } else if (species === "Budgerigar") {
        if (age < 604800000) {
	    icon = "budgerigar-egg";
	} else if (age < 1209600000) {
	    icon = "budgerigar-young";
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
	        if (genotype.includes("G")) {
		    if (genotype.includes("aa")) {
		        icon = "budgerigar-male-greylutino";
		    } else if (genotype.includes("SS")) {
			icon = "budgerigar-male-yellowgreyspalding";
		    } else if (genotype.includes("S")) {
			if (genotype.includes("DD")) {
			    icon = "budgerigar-male-greyolivespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-darkgreygreenspalding";
			} else {
			    icon = "budgerigar-male-greygreenspalding";
			}
		    } else {
		    	if (genotype.includes("DD")) {
			    icon = "budgerigar-male-greyolive";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-darkgreygreen";
			} else {
			    icon = "budgerigar-male-greygreen";
			}
		    }
		} else {
		    if (genotype.includes("aa")) {
		        icon = "budgerigar-male-lutino";
		    } else if (genotype.includes("SS")) {
			icon = "budgerigar-male-yellowspalding";
		    } else if (genotype.includes("S")) {
			if (genotype.includes("DD")) {
			    icon = "budgerigar-male-olivespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-darkgreenspalding";
			} else {
			    icon = "budgerigar-male-spalding";
			}
		    } else {
		    	if (genotype.includes("DD")) {
			    icon = "budgerigar-male-olive";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-darkgreen";
			} else {
			    icon = "budgerigar-male";
			}
		    }
	        }
	    } else {
	        if (genotype.includes("aa")) {
		    icon = "budgerigar-male-albino";
		} else if (genotype.includes("SS")) {
		    icon = "budgerigar-male-whitespalding";
		} else if (genotype.includes("S")) {
		    if (genotype.includes("G")) {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-male-darkgreyspalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-greyspalding";
			} else {
			    icon = "budgerigar-male-greyspalding";
			}
		    } else {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-male-mauvespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-cobaltspalding";
			} else {
			    icon = "budgerigar-male-bluespalding";
			}		    
		    }
		} else {
		    if (genotype.includes("G")) {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-male-darkgrey";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-grey";
			} else {
			    icon = "budgerigar-male-grey";
			}
		    } else {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-male-mauve";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-male-cobalt";
			} else {
			    icon = "budgerigar-male-blue";
			}		    
		    }
		}
	    }
	} else {
	    if (genotype.includes("B")) {
	        if (genotype.includes("G")) {
		    if (genotype.includes("aa")) {
		        icon = "budgerigar-female-greylutino";
		    } else if (genotype.includes("SS")) {
			icon = "budgerigar-female-yellowgreyspalding";
		    } else if (genotype.includes("S")) {
			if (genotype.includes("DD")) {
			    icon = "budgerigar-female-greyolivespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-darkgreygreenspalding";
			} else {
			    icon = "budgerigar-female-greygreenspalding";
			}
		    } else {
		    	if (genotype.includes("DD")) {
			    icon = "budgerigar-female-greyolive";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-darkgreygreen";
			} else {
			    icon = "budgerigar-female-greygreen";
			}
		    }
		} else {
		    if (genotype.includes("aa")) {
		        icon = "budgerigar-female-lutino";
		    } else if (genotype.includes("SS")) {
			icon = "budgerigar-female-yellowspalding";
		    } else if (genotype.includes("S")) {
			if (genotype.includes("DD")) {
			    icon = "budgerigar-female-olivespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-darkgreenspalding";
			} else {
			    icon = "budgerigar-female-spalding";
			}
		    } else {
		    	if (genotype.includes("DD")) {
			    icon = "budgerigar-female-olive";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-darkgreen";
			} else {
			    icon = "budgerigar-female";
			}
		    }
	        }
	    } else {
	        if (genotype.includes("aa")) {
		    icon = "budgerigar-female-albino";
		} else if (genotype.includes("SS")) {
		    icon = "budgerigar-female-whitespalding";
		} else if (genotype.includes("S")) {
		    if (genotype.includes("G")) {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-female-darkgreyspalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-greyspalding";
			} else {
			    icon = "budgerigar-female-greyspalding";
			}
		    } else {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-female-mauvespalding";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-cobaltspalding";
			} else {
			    icon = "budgerigar-female-bluespalding";
			}		    
		    }
		} else {
		    if (genotype.includes("G")) {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-female-darkgrey";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-grey";
			} else {
			    icon = "budgerigar-female-grey";
			}
		    } else {
		        if (genotype.includes("DD")) {
			    icon = "budgerigar-female-mauve";
			} else if (genotype.includes("D")) {
			    icon = "budgerigar-female-cobalt";
			} else {
			    icon = "budgerigar-female-blue";
			}		    
		    }
		}
	    }
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
	        icon = "chimpanzee-male-splitface";
	    }
	} else {
	    if (genotype === "BB") {
	        icon = "chimpanzee-female";
	    } else if (genotype === "PP") {
	        icon = "chimpanzee-female-pink";
	    } else {
	        icon = "chimpanzee-female-splitface";
	    }
	}
    } else if (species === "Dromedary Camel") {
        if (age < 1209600000) {
	    if (genotype.includes("F")) {
	        icon = "dromedarycamel-young";
	    } else {
	        icon = "dromedarycamel-young-white";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("F")) {
	        icon = "dromedarycamel-male";
	    } else {
	        icon = "dromedarycamel-male-white";
	    }
	} else {
	    if (genotype.includes("F")) {
	        icon = "dromedarycamel-female";
	    } else {
	        icon = "dromedarycamel-female-white";
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
    } else if (species === "Giant Anteater") {
        if (age < 2419200000) {
	    icon = "giantanteater-young";
	} else if (sex === "Male") {
	    icon = "giantanteater-male";
	} else {
	    icon = "giantanteater-female";
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
    } else if (species === "Grant's Zebra") {
        if (age < 3628800000) {
	    icon = "grantszebra-young";
	} else if (sex === "Male") {
	    icon = "grantszebra-male";
	} else {
	    icon = "grantszebra-female";
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
    } else if (species === "Hippopotamus") {
        if (age < 4838400000) {
            icon = "hippopotamus-young";
	} else if (sex === "Male") {
	    icon = "hippopotamus-male";
	} else {
	    icon = "hippopotamus-female";
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
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male";
		    } else {
		        icon = "indianpeafowl-male-whiteeye";
		    }
		} else {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-blackshoulder";
		    } else {
		        icon = "indianpeafowl-male-blackshoulderwhiteeye";
		    }
		}
	    } else if (genotype.includes("W")) {
	        if (genotype.includes("B")) {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-split";
		    } else {
		        icon = "indianpeafowl-male-splitwhiteeye";
		    }
		} else {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-blackshouldersplit";
		    } else {
		        icon = "indianpeafowl-male-blackshouldersplitwhiteeye";
		    }
		}
	    } else if (genotype.includes("pp")) {
	        if (genotype.includes("B")) {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-pied";
		    } else {
		        icon = "indianpeafowl-male-piedwhiteeye";
		    }
		} else {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-blackshoulderpied";
		    } else {
		        icon = "indianpeafowl-male-blackshoulderpiedwhiteeye";
		    }
		}
	    } else if (genotype.includes("p")) {
	        if (genotype.includes("B")) {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-loudpied";
		    } else {
		        icon = "indianpeafowl-male-silverpied";
		    }
		} else {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-male-blackshoulderloudpied";
		    } else {
		        icon = "indianpeafowl-male-blackshouldersilverpied";
		    }
		}
	    } else {
	        icon = "indianpeafowl-male-white";
	    }
	} else {
	    if (genotype.includes("WW")) {
	        if (genotype.includes("B")) {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-female";
		    } else {
		        icon = "indianpeafowl-female-whiteeye";
		    }
		} else {
		    icon = "indianpeafowl-female-blackshoulder";
		}
	    } else if (genotype.includes("W")) {
	        if (genotype.includes("B")) {
		    if (genotype.includes("E")) {
		        icon = "indianpeafowl-female-split";
		    } else {
		        icon = "indianpeafowl-female-splitwhiteeye";
		    }
		} else {
		    icon = "indianpeafowl-female-blackshouldersplit";
		}
	    } else if (genotype.includes("pp")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-female-pied";
		} else {
		    icon = "indianpeafowl-female-blackshoulderpied";
		}
	    } else if (genotype.includes("p")) {
	        if (genotype.includes("B")) {
		    icon = "indianpeafowl-female-loudpied";
		} else {
		    icon = "indianpeafowl-female-blackshoulderloudpied";
		}
	    } else {
	        icon = "indianpeafowl-female-white";
	    }
	}
    } else if (species === "Jaguar") {
        if (age < 3628800000) {
	    if (genotype.includes("B")) {
	        icon = "jaguar-young-black";
	    } else {
	        icon = "jaguar-young";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
	        icon = "jaguar-male-black";
	    } else {
	        icon = "jaguar-male";
	    }
	} else {
	    if (genotype.includes("B")) {
	        icon = "jaguar-female-black";
	    } else {
	        icon = "jaguar-female";
	    }
	}
    } else if (species === "Malayan Tapir") {
        if (age < 3628800000) {
	    icon = "malayantapir-young";
	} else if (sex === "Male") {
	    icon = "malayantapir-male";
	} else {
	    icon = "malayantapir-female";
	}
    } else if (species === "Moose") {
        if (age < 3628800000) {
	    if (genotype.includes("B")) {
	        if (genotype == "BB") {
		    icon = "moose-young-dark";
		} else {
		    icon = "moose-young";
		}
	    } else {
	        icon = "moose-young-red";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("B")) {
	        if (genotype == "BB") {
		    icon = "moose-male-dark";
		} else {
		    icon = "moose-male";
		}
	    } else {
	        icon = "moose-male-red";
	    }
	} else {
	    if (genotype.includes("B")) {
	        if (genotype == "BB") {
		    icon = "moose-female-dark";
		} else {
		    icon = "moose-female";
		}
	    } else {
	        icon = "moose-female-red";
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
	    if (age < 6048000000) {
	        icon = "nilecrocodile-male-small";
	    } else if (age < 15768000000) {
	        icon = "nilecrocodile-male-mid";
	    } else if (age < 31536000000) {
	        icon = "nilecrocodile-male";
	    } else {
	        icon = "nilecrocodile-male-large";
	    }
	} else {
	    if (age < 6048000000) {
	        icon = "nilecrocodile-female-small";
	    } else if (age < 15768000000) {
	        icon = "nilecrocodile-female-mid";
	    } else if (age < 31536000000) {
	        icon = "nilecrocodile-female";
	    } else {
	        icon = "nilecrocodile-female-large";
	    }
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
    } else if (species === "Platypus") {
        if (age < 2419200000) {
            icon = "platypus-egg";
	} else if (age < 4838400000) {
	    icon = "platypus-young";
	} else if (sex === "Male") {
	    icon = "platypus-male";
	} else {
	    icon = "platypus-female";
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
	    if (genotype.includes("ww")) {
		icon = "redpanda-young-whiteface";
	    } else {
	        icon = "redpanda-young";
	    }
	} else if (sex === "Male") {
	    if (genotype.includes("ww")) {
		icon = "redpanda-male-whiteface";
	    } else {
	        icon = "redpanda-male";
	    }
	} else {
	    if (genotype.includes("ww")) {
		icon = "redpanda-female-whiteface";
	    } else {
	        icon = "redpanda-female";
	    }
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
	        sum = sum + Math.sqrt(gene_list[i][j]);
		j++;
	    }
	    for (j = 1; j < leng; j++) {
	        gene_list[i][j] = Math.sqrt(gene_list[i][j])/sum;
		j++;
	    }
        }
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
    if (gettribe() == animal_data.rights) {
        for (i = 1; i < len; i++) {
            var leng = gene_list[i].length;
	    var j;
	    var sum = 0;
	    for (j = 1; j < leng; j++) {
	        sum = sum + (gene_list[i][j]*gene_list[i][j]);
		j++;
	    }
	    for (j = 1; j < leng; j++) {
	        gene_list[i][j] = (gene_list[i][j]*gene_list[i][j])/sum;
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
