import { Dispatch, SetStateAction, useState } from 'react';
import '../styles/main.css';
import { ControlledInput } from './ControlledInput';
import { registerCommand, getCommandProcessor} from './CommandRegistry';
import { loadedMap } from '../mockedJson';
import {viewedMap} from '../mockedJson';
import { searchedMap } from '../mockedJson';


interface REPLInputProps{

  outputMode: boolean
  setOutputMode: Dispatch<SetStateAction<boolean>>

  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>,
  
}

export function REPLInput(props : REPLInputProps) {
    
    const [commandString, setCommandString] = useState<string>('');
    const [count, setCount] = useState<number>(0)
    const [filePath, setfilePath] = useState<string>('')
    const [loadedFile, setLoadedFile] = useState<string>('')

    // function changeMode(){
    //   var results = ""
    //   if (!props.outputMode){
    //     results = "Brief"
    //   } else{
    //     results = "Verbose"
    //   }
    //   props.setHistory([results])
    // }

    // function loadCSV(command: string){
    //   const filePath = command.split(" ")[1]
    //   const resultOfLoad = csvDataMap.get(filePath)
    //   setLoadedFile(filePath)

    //   if (typeof resultOfLoad == "string"){
    //     if (props.outputMode){
    //       props.setHistory([resultOfLoad])
    //     } else{
    //       props.setHistory([resultOfLoad])
    //     }
    //   }
    // }

    // function viewCSV(){
    //   if (loadedFile == ""){
    //     props.setHistory(["No file loaded, please load then try again"])
    //   }

    //   const resultOfView = viewMap.get(loadedFile)

    //   if (Array.isArray(resultOfView)){
    //     if (props.outputMode){
    //       resultOfView.forEach((list) => {
    //         props.setHistory(list)
    //     });
    //     } else{
    //       resultOfView.forEach((list) => {
    //         props.setHistory(list)
    //       });
    //     }
    //   }
    // }

    // function searchCSV(columnIdentifier: string, value: string){
    //   if (loadedFile == ""){
    //     props.setHistory(["No file loaded, please load then try again"])
    //   }

    //   const identifiers = commandString.split(" ");
    //   const resultOfSearch = searchMap.get(identifiers[1])

    //   if (Array.isArray(resultOfSearch)){
    //     if (props.outputMode){
    //       resultOfSearch.forEach((list) => {
    //         props.setHistory(list)
    //     });
    //     } else{
    //       resultOfSearch.forEach((list) => {
    //         props.setHistory(list)
    //       });
    //     }
    //   }
    // }

    registerCommand("load_file", (args: Array<string>): string | string[][] => {
      const filePath = args[0]
      const resultOfLoad = loadedMap.get(filePath)
      var message = ""
      setLoadedFile(filePath)

      if (typeof resultOfLoad == "string"){
        if (props.outputMode){
          message = "Load Completed!"
          return resultOfLoad
        } else{
          message = "Load Completed!"
          return resultOfLoad
        }
      }
      return message
    });
  
    registerCommand("view", (args: Array<string>): string | string[][] => {
      var message = ""

      if (loadedFile == ""){
        return message = "No file loaded"
      }

      const resultOfView = viewedMap.get(loadedFile)
      if (Array.isArray(resultOfView)){
        if (props.outputMode){
          return resultOfView
        } else{
          return resultOfView
        }
      }
      return message
    });
  
    registerCommand('search', (args: Array<string>): string | string[][] => {
      var message = ""
      if (loadedFile == ""){
        return message = "No file loaded, please load then try again"
      }

      const identifiers = commandString.split(" ");
      const resultOfSearch = searchedMap.get(identifiers[1])

      if (Array.isArray(resultOfSearch)){
        if (props.outputMode){
          return resultOfSearch
        } else{
          return resultOfSearch
        }
      }

      return message
    });

    function handleSubmit(commandString:string) {
      const [command, ...args] = commandString.split(' ');
      const processor = getCommandProcessor(command.toLowerCase());
      setCommandString('')
      
      if (processor){
        const result = processor(args)
        
        if(typeof result === "string"){
          props.setHistory([result])
          setCount(count+1)
          setCommandString('')
        } else if(Array.isArray(result)){
            result.forEach((list) => {
                props.setHistory(list)
                setCount(count+1)
                setCommandString('')
          });
        }
      } else{
        props.setHistory(["Command Not Found!"])
        setCommandString('')
      }
  
      // setCount(count+1)
      // props.setHistory([...props.history, commandString])
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
            <button onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    );
  }