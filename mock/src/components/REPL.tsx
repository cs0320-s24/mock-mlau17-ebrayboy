import { useState } from 'react';
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';

/**
 * This is REPL that contains multiple constants where we store the important information like 
 * command history and its corresponding output, the mode the output is in, and the command that
 * the user inputted. All of this is passed into REPLHistory which is where we display our history
 * and REPLInput which is where we take the input and find the corresponding function and then
 * pass the result to the history. 
 */

/**
 * This function runs REPL
 * 
 * @return display of REPLHistory and the input box
 */
export default function REPL() {
  const [history, setHistory] = useState<string[][]>([])
  const [outputMode, setOutputMode] = useState<boolean>(false)
  const [outputSetting, setOutputSetting] = useState<string>("brief")
  const [command, setCommand] = useState<string>("")

  return (
    <div className="repl">  
      <REPLHistory history={history} outputMode={outputMode} outputSetting = {outputSetting} 
      command = {command}/>
      <hr></hr>
      <REPLInput history={history} setHistory={setHistory} outputMode={outputMode} 
      setOutputMode={setOutputMode} outputSetting = {outputSetting} setOutputSetting = {setOutputSetting}
      command = {command} setCommand = {setCommand}
      />
    </div>
  );
}
