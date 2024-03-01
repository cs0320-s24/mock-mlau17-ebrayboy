//Mocked file path to csv data
const filePathMap = new Map <string, string>();
filePathMap.set("/path/to/file1.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/file2.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/error.csv", "Failure: Filepath Error")
filePathMap.set("", "Failure: File Cannot be Found")
filePathMap.set("/path/to/fruitAndVegData.csv", "Success: File Found and Loaded")
filePathMap.set("/path/to/constellations.csv", "Success: File Found and Loaded")

export const loadedMap = filePathMap

const tableMap = new Map<string, string[][]>();

const fruitAndVegData = [
  ["Apple", "red", "fruit"],
  ["Orange", "orange", "fruit"],
  ["Potato", "gold", "vegetable"],
];

const personAndAddress = [
    ["Name", "Age", "Address"],
    ["Maize", "30", "Portland, ME"],
    ["John", "27", "Providence, RI"],
    ["Bob", "60", "Miami, FL"],
  ];

const constellations = [
    ["Sign", "Color", "Animal"],
    ["Aries", "yellow", "sheep"],
    ["Taurus", "orange", "cow"],
    ["Gemini", "teal", "twins"],
    ["Cancer", "red", "crab"],
    ["Leo", "gold", "lion"],
    ["Virgo", "purple", "maiden"],
    ["Libra", "green", "scale"],
    ["Scorpio", "black", "scorpion"],
    ["Sagittarius", "brown", "horse"],
    ["Capicorn", "mauve", "goat"],
    ["Aquarius", "aquamarine", "mermaid"],
    ["Pisces", "sapphire", "fish"],
    ["Leo", "gold", "lion"],
    ["Taurus", "orange", "cow"],
    ["Gemini", "teal", "twins"],
    ["Ursa Minor", "silver", "stars"],
    ["Orion", "tan", "hunter"],
    ["Andromeda", "black", "box"],
    ["Gemini", "teal", "twins"],
    ["Gemini", "teal", "twins"],
    ["Auriga", "maroon", "myth"],
    ["Aquila", "aqua", "bottle"],
    ["Canis Major", "ocean blue", "bear"],
    ["Gemini", "teal", "twins"], 
  ];

tableMap.set("/path/to/fruitAndVegData.csv", fruitAndVegData);
tableMap.set("/path/to/constellations.csv", constellations)
tableMap.set("/path/to/empty.csv",[["Error: Empty CSV File"]])
tableMap.set("/path/to/malformed.csv",[["Error: Malformed CSV File"]])


export const viewedMap = tableMap

const valueMap = new Map<string, string[][]>();
valueMap.set("0 Apple", [fruitAndVegData[0]]);
valueMap.set("Name Bob", [personAndAddress[3]]);
valueMap.set("Age 27", [personAndAddress[2]]);
valueMap.set("1 27", [personAndAddress[2]]);
valueMap.set("Bob", [["Error: Incorrect Format, Please re-enter"]]); // Incorrect Format
valueMap.set("0 maize", [personAndAddress[1]]); // Lowercase name
valueMap.set("1 orange", [fruitAndVegData[1]])
valueMap.set("5 orange", [["Error: Index Out of Bounds"]]) //Out of bounds
valueMap.set("0 corn", [["Error: Value not found"]]) //Value not found
valueMap.set("Sign Gemini", [constellations[3], constellations[15], constellations[19], constellations[20],
constellations[24]]); // Multiple rows
valueMap.set("Number 5", [["Error: Non-existent column name"]]) //Non-existent column name

export const searchedMap = valueMap
