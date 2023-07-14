import poison from "../assets/icons-types/poison.png";
import grass from "../assets/icons-types/grass.png";
import fire from "../assets/icons-types/fire.png";
import flying from "../assets/icons-types/flying.png";
import water from "../assets/icons-types/water.png";
import bug from "../assets/icons-types/bug.png";
import normal from "../assets/icons-types/normal.png";
import dark from "../assets/icons-types/dark.png";
import dragon from "../assets/icons-types/dragon.png";
import electric from "../assets/icons-types/electric.png";
import fairy from "../assets/icons-types/fairy.png";
import fighting from "../assets/icons-types/fighting.png";
import ghost from "../assets/icons-types/ghost.png";
import ground from "../assets/icons-types/ground.png";
import ice from "../assets/icons-types/ice.png";
import psychic from "../assets/icons-types/psychic.png";
import rock from "../assets/icons-types/rock.png";
import steel from "../assets/icons-types/steel.png";

export const iconType = (type) => {
  switch (type) {
    case "poison":
      return poison;
    case "grass":
      return grass;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "water":
      return water;
    case "bug":
      return bug;
    case "normal":
      return normal;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "ghost":
      return ghost;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;

    default:
      return dark;
  }
};
