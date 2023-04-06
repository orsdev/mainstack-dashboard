import { ILocations } from "./types";

export const addColorsAndFlagsToData = (locations: ILocations[]) => {
  return locations?.reduce((accumulator, item, index) => {
    switch (item.country?.toLowerCase()) {
      case "nigeria":
        accumulator[index] = {
          ...item,
          flag: "fi fi-ng",
          color: "#599EEA",
        };
        break;
      case "united kingdom":
        accumulator[index] = {
          ...item,
          flag: "fi fi-gb",
          color: "#844FF6",
        };
        break;
      case "finland":
        accumulator[index] = {
          ...item,
          flag: "fi fi-fi",
          color: "#0FB77A",
        };
        break;
      case "germany":
        accumulator[index] = {
          ...item,
          flag: "fi fi-de",
          color: "#FAB70A",
        };
        break;
      case "ghana":
        accumulator[index] = {
          ...item,
          flag: "fi fi-gh",
          color: "#F09468",
        };
        break;
      default:
        accumulator[index] = {
          ...item,
          flag: "",
          color: "#599EEA",
        };
        break;
    }
    return accumulator;
  }, [] as any);
};

export const colorArray = (locations: ILocations[]) => {
  if (!locations || locations?.length === 0) return ["#F09468"]
  return locations?.reduce((accumulator, item) => {
    switch (item.country?.toLowerCase()) {
      case "nigeria":
        accumulator = accumulator.concat("#599EEA")
        break;
      case "united kingdom":
        accumulator = accumulator.concat("#844FF6")
        break;
      case "finland":
        accumulator = accumulator.concat("#0FB77A")
        break;
      case "germany":
        accumulator = accumulator.concat("#FAB70A")
        break;
      case "ghana":
        accumulator = accumulator.concat("#F09468")
        break;
      default:
        accumulator = [...accumulator]
        break;
    }
    return accumulator
  }, [] as string[])
};