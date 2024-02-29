//Mocked file path to csv data
const filePathMap = new Map <string, string>();
filePathMap.set("/path/to/file1.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/file2.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/error.csv", "Failure: Filepath Error")
filePathMap.set(" ", "Failure: File Cannot be Found")
export const loadedMap = filePathMap

const tableMap = new Map<string, string[][]>();

const fruitAndVegData = [
  ["Apple", "red", "fruit"],
  ["Orange", "orange", "fruit"],
  ["Potato", "gold", "vegetable"],
];

const constellations = [
    ["Aries", "", "fruit"],
    ["Taurus", "orange", "fruit"],
    ["Gemini", "gold", "vegetable"],
    ["Cancer", "gold", "vegetable"],
    ["Leo", "red", "fruit"],
    ["Virgo", "orange", "fruit"],
    ["Libra", "gold", "vegetable"],
    ["Scorpio", "gold", "vegetable"],
    ["Sagittarius", "red", "fruit"],
    ["Capicorn", "orange", "fruit"],
    ["Aquarius", "gold", "vegetable"],
    ["Pisces", "gold", "vegetable"],
    ["Leo", "red", "fruit"],
    ["Taurus", "orange", "fruit"],
    ["Gemini", "gold", "vegetable"],
    ["Ursa Minor", "gold", "vegetable"],
    ["Orion", "red", "fruit"],
    ["Andromeda", "orange", "fruit"],
    ["Gemini", "gold", "vegetable"],
    ["Gemini", "gold", "vegetable"],
    ["Auriga", "red", "fruit"],
    ["Aquila", "orange", "fruit"],
    ["Canis Major", "gold", "vegetable"],
    ["Gemini", "gold", "vegetable"], 
  ];

tableMap.set("/path/to/fruitAndVegData.csv", fruitAndVegData);

export const viewedMap = tableMap

const valueMap = new Map<string, string[][]>();
valueMap.set("0,Apple", [fruitAndVegData[0]]);

export const searchedMap = valueMap
