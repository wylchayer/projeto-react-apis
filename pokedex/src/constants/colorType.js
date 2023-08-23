export const colorType = (type) => {
  switch (type) {
    case "poison":
      return "#9D419E";
    case "grass":
      return "#509853";
    case "fire":
      return "#D42900";
    case "flying":
      return "#487290";
    case "water":
      return "#1384D5";
    case "bug":
      return "#114500";
    case "normal":
      return "#6A6A6A";
    case "dark":
      return "#3C3345";
    case "dragon":
      return "#0A4C9F";
    case "electric":
      return "#D4B21B";
    case "fairy":
      return "#CC6FC6";
    case "fighting":
      return "#AE2049";
    case "ghost":
      return "#32498C";
    case "ground":
      return "#B95725";
    case "ice":
      return "#54AEA0";
    case "psychic":
      return "#D65156";
    case "rock":
      return "#A7976B";
    case "steel":
      return "#9B9B9B";
    default:
      return "#5C5365"; //dark
  }
};
