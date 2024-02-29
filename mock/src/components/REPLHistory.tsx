import '../styles/main.css';
import { Dispatch, SetStateAction, useState } from 'react';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    // CHANGED
    history: string[][]

    outputMode: boolean
    outputSetting: string

    command: string
}
export function REPLHistory(props : REPLHistoryProps) {
    let modeTextCommand = ""; 
    let modeTextOutput = ""; 

    if (props.outputMode){
        modeTextCommand = "Command:" + props.command
        modeTextOutput = "Output:" 
    }
    return (
        <div className="repl-history" >
            {'Mode:' + props.outputSetting}
            
            
            <table>
            {modeTextCommand}
                <tbody>
                {modeTextOutput}
                    {props.history.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div> 
    );
}
