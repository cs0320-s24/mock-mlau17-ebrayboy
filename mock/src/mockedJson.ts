//Mocked file path to csv data
const filePathMap = new Map <string, string>();
filePathMap.set("/path/to/file1.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/file2.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/error.csv", "Failure: Filepath Error")
filePathMap.set(" ", "Failure: File Cannot be Found")
filePathMap.set("/path/to/fruitAndVegData.csv", "Success: File Found and Loaded")

export const loadedMap = filePathMap

const tableMap = new Map<string, string[][]>();

const fruitAndVegData = [
  ["Apple", "red", "fruit"],
  ["Orange", "orange", "fruit"],
  ["Potato", "gold", "vegetable"],
];

const constellations = [
    ["Aries", "yellow", "fruit"],
    ["Taurus", "orange", "fruit"],
    ["Gemini", "teal", "vegetable"],
    ["Cancer", "red", "vegetable"],
    ["Leo", "gold", "fruit"],
    ["Virgo", "purple", "fruit"],
    ["Libra", "green", "vegetable"],
    ["Scorpio", "black", "vegetable"],
    ["Sagittarius", "brown", "fruit"],
    ["Capicorn", "mauve", "fruit"],
    ["Aquarius", "aquamarine", "vegetable"],
    ["Pisces", "sapphire", "vegetable"],
    ["Leo", "gold", "fruit"],
    ["Taurus", "orange", "fruit"],
    ["Gemini", "teal", "vegetable"],
    ["Ursa Minor", "silver", "vegetable"],
    ["Orion", "tan", "fruit"],
    ["Andromeda", "", "fruit"],
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
