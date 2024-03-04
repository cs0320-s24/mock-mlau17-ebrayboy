import '../styles/main.css';
import { Dispatch, SetStateAction, useState } from 'react';

/**
 * This is one of the support branches of REPL that handles the history and how it is outputted on
 * the page. We choose a html table to output it as we are often dealing with list of list of strings.
 */

/**
 * This interface is stores the input and shares its state with other classes.
 * Making sure the stored input is the same across the program.
 * @prop history represents a list that contains the history of commands and outputs
 * @prop outputMode whether the output mode is brief or verbose
 * @prop outputSetting allows the outputMode to change whenever there is a change in mode
 * @prop command the command that the user inputted
 */
interface REPLHistoryProps{
    history: string[][] 

    outputMode: boolean
    outputSetting: string

    command: string
}

/**
 * This is the main function that checks the mode that we are in and also how the result is outputted
 * 
 * @params props the history props that the function access, check and change
 * 
 * @return the history of the outputs and commands dependent on mode
 */
export function REPLHistory(props : REPLHistoryProps) {
    let modeTextCommand = ""; 
    let modeTextOutput = ""; 

    if (props.outputMode){
        // modeTextCommand = "Command:" + props.command
        // modeTextOutput = "Output:" 
    }
    let table = populateTable(props.history)
    return (
        <div className="repl-history" >
            {'Mode:' + props.outputSetting}
            
            
            {table}
            
        </div> 
        
    );
}

/**
 * This is a helper function that helps fill up a table to insert into the repl-history
 * 
 * @params our history prop, a 2d list of strings, that will be turned into an HTML table
 * 
 * @return a JSX.Element, or HTML table, with each inner list in the param represented as a row in the table
 */
function populateTable(twoDArray: string[][]): JSX.Element {
    return (
      <table>
        <tbody>
          {twoDArray.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
