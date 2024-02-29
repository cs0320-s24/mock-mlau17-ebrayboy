import { Dispatch, SetStateAction, useState } from 'react';
import '../styles/main.css';
import { ControlledInput } from './ControlledInput';
import { registerCommand, getCommandProcessor} from './CommandRegistry';

export interface REPLFunction{
  (args: Array<string>) : String|String[][]
}

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED

  outputMode: boolean
  setOutputMode: Dispatch<SetStateAction<boolean>>

  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>,
  
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    
    //Mocked file path to csv data
    const csvDataMap = new Map <string, string>();
    csvDataMap.set("/path/to/file1.csv", "Failure")
    csvDataMap.set("/path/to/file2.csv", "Success")

    const viewMap = new Map<string, string[][]>();
    const fruitData = [
      ["Apple", "spoiled", "red"],
      ["Pear", "fresh", "green"],
      ["Banana", "rotten", "yellow"],
    ];
    viewMap.set("/path/to/fruitData.csv", fruitData);

    const searchMap = new Map<string, string[][]>();
    searchMap.set("0,Apple", [fruitData[0]]);
    

    const [commandString, setCommandString] = useState<string>('');
    const [count, setCount] = useState<number>(0)
    const [filePath, setfilePath] = useState<string>('')
    const [loadedFile, setLoadedFile] = useState<string>('')

    // registerCommand('load_file', (args: Array<string>) => {
    //   loadCSV(args[0])
    // });
  
    // registerCommand('view', (args: Array<String>) => {
    //   return [["header"]]
    // });
  
    // registerCommand('search', (args: Array<String>) => {
    //   return "result"
    // });

    function changeMode(){
      var results = ""
      if (!props.outputMode){
        results = "Brief"
      } else{
        results = "Verbose"
      }
      props.setHistory([results])
    }
    // This function is triggered when the button is clicked.

    function loadCSV(command: string){
      const filePath = command.split(" ")[1]
      const resultOfLoad = csvDataMap.get(filePath)
      setLoadedFile(filePath)

      if (typeof resultOfLoad == "string"){
        if (props.outputMode){
          props.setHistory([resultOfLoad])
        } else{
          props.setHistory([resultOfLoad])
        }
      }
    }

    function viewCSV(){
      if (loadedFile == ""){
        props.setHistory(["No file loaded, please load then try again"])
      }

      const resultOfView = viewMap.get(loadedFile)

      if (Array.isArray(resultOfView)){
        if (props.outputMode){
          resultOfView.forEach((list) => {
            props.setHistory(list)
        });
        } else{
          resultOfView.forEach((list) => {
            props.setHistory(list)
          });
        }
      }
    }

    function searchCSV(columnIdentifier: string, value: string){
      if (loadedFile == ""){
        props.setHistory(["No file loaded, please load then try again"])
      }

      const identifiers = commandString.split(" ");
      const resultOfSearch = searchMap.get(identifiers[1])

      if (Array.isArray(resultOfSearch)){
        if (props.outputMode){
          resultOfSearch.forEach((list) => {
            props.setHistory(list)
        });
        } else{
          resultOfSearch.forEach((list) => {
            props.setHistory(list)
          });
        }
      }
    }

    function handleSubmit(commandString:string) {
      // const [command, ...args] = commandString.split(' ');
      // const processor = getCommandProcessor(command.toLowerCase());
      setCount(count+1)
      props.setHistory([...props.history, commandString])
      setCommandString('')
    }

    


    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button onClick={() => loadCSV(commandString)}>Submitted {count} times</button>
        </div>
    );
  }