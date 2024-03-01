import { Dispatch, SetStateAction, useState } from 'react';
import '../styles/main.css';
import { ControlledInput } from './ControlledInput';
import { registerCommand, getCommandProcessor} from './CommandRegistry';
import { loadedMap } from '../mockedJson';
import {viewedMap} from '../mockedJson';
import { searchedMap } from '../mockedJson';
import { resourceLimits } from 'worker_threads';

/**
 * This is one of the support branches of REPL that handles all the functions and then passes
 * it to REPLHistory to display. It also imports the CommandRegistry, which is like a global
 * variable that stores all the function names and its corresponding function in a map then there
 * is a getter method that finds the function that the user is looking for. 
 */


/**
 * This interface is stores the input and shares its state with other classes.
 * Making sure the stored input is the same across the program.
 * @prop history represents a list that contains the history of commands and outputs
 * @prop setHistory allows the history to change whenever there is a new addition
 * @prop outputMode whether the output mode is brief or verbose
 * @prop outputSetting allows the outputMode to change whenever there is a change in mode
 * @prop command the command that the user inputted
 * @prop setCommand allows the command to be changed to whatever new thing the user inputs for mode
 * @prop outputSetting is the mode that the user wanted
 * @prop settOutputSetting allows the outputSetting to be changed to whatever the user inputs for mode
 */
interface REPLInputProps{

  outputMode: boolean
  setOutputMode: Dispatch<SetStateAction<boolean>>

  outputSetting: string 
  setOutputSetting: Dispatch<SetStateAction<string>>

  command: string
  setCommand: Dispatch<SetStateAction<string>>

  history: string[][],
  setHistory: Dispatch<SetStateAction<string[][]>>,
}

/**
 * The main function that contains all the functions and handles its results and/or returns a message
 * showing if it was a success or failure and why
 * 
 * @param props the input props that the function access, checks, and changes
 * 
 * @return a button that when pushed, it reads the user's input and handles it pushing the 
 * results into history
 */
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

    /**
    * registering the command mode, which means the functionality to the name "mode" is added to the
    * map in CommandRegistry so we can easily access it
    * 
    * Can be deleted without affecting, the code so developer can easily add or remove functions
    * 
    * @return either a string or list of list of strings, which will be a message notifying the user
    * if the command worked
    */
    registerCommand("mode", (args: Array<string>) : string | string[][] => {
      props.setCommand("mode " + args.join(" ")); 
      const modeType = args[0]; 
      props.setOutputSetting(modeType)
      if (modeType == "verbose"){
        props.setOutputMode(true); 
        return "Mode switched to verbose"
      } else if (modeType == "breif"){
        props.setOutputMode(false); 
        
        return "Mode switched to breif"
      }else{
        return "No mode for " + modeType + ". Available modes are breif or verbose"
      }

    })

    /**
    * registering the command load_file, which means the functionality to the name "load_file" is 
    * added to the map in CommandRegistry so we can easily access it
    * 
    * Can be deleted without affecting, the code so developer can easily add or remove functions
    * 
    * @return either a string or list of list of strings, which will be a message notifying the user
    * if the command worked and the result of loading the file
    */
    registerCommand("load_file", (args: Array<string>): string | string[][] => {
      props.setCommand("load_file " + args.join(" ")); 
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
  
    /**
    * registering the command view, which means the functionality to the name "view" is added to the
    * map in CommandRegistry so we can easily access it
    * 
    * Can be deleted without affecting, the code so developer can easily add or remove functions
    * 
    * @return either a string or list of list of strings, which will be a message notifying the user
    * if the command worked and the result of viewing the file
    */
    registerCommand("view", (args: Array<string>): string | string[][] => {
      props.setCommand("view " + args.join(" ")); 
      var message = ""
      
      if (loadedFile == ""){
        message = "No file loaded, please load then try again"
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
  
    /**
    * registering the command search, which means the functionality to the name "search" is added to the
    * map in CommandRegistry so we can easily access it
    * 
    * Can be deleted without affecting, the code so developer can easily add or remove functions
    * 
    * @return either a string or list of list of strings, which will be a message notifying the user
    * if the command worked and the result of searching the file
    */
    registerCommand('search', (args: Array<string>): string | string[][] => {
      props.setCommand("search " + args.join(" ")); 
      var message = ""
      if (loadedFile == ""){
        message = "No file loaded, please load then try again"
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

    /**
    * handles what the program is supposed to do when the user clicks submit, taking in the 
    * command line as a string, splits it, and uses it to find the function they are looking
    * for and to find the result the user is looking for.
    * 
    * @params commandString is the command that was inputted by the user
    */
    function handleSubmit(commandString:string) {
      
      const [command, ...args] = commandString.split(' ');
      const processor = getCommandProcessor(command.toLowerCase());
      setCommandString('')
      
      if (processor){
        
        const result = processor(args)
        
        if(typeof result === "string"){
          
          props.setHistory([...props.history, [result]])
          setCount(count+1)
          setCommandString('')
        } else if(Array.isArray(result)){
          props.setHistory([
              ...props.history,
              ...result])
          //   let updatedHistory = [...props.history]; 
          //   result.forEach((list) => {
          //       list.forEach((value) => {
          //         updatedHistory = [...updatedHistory, [value]]; 
          //       setCount(count+1)
          //       setCommandString('')
          //       })
          //       // props.setHistory(list)
          //       // setCount(count+1)
          //       // setCommandString('')
          //       props.setHistory(updatedHistory); 
          // }
          
          // );
         // props.setHistory(updatedHistory); 
        } 
      } else{
        props.setHistory([["Command Not Found!"]])
        setCommandString('')
      }
  
      // setCount(count+1)
      // props.setHistory([...props.history, commandString])
    }
    return (
        <div className="repl-input">
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* Pushes the contents of the results to history?*/}
            <button onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    );
  }