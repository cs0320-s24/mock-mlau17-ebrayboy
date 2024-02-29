import '../styles/main.css';
import { Dispatch, SetStateAction, useState } from 'react';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    // CHANGED
    history: string[]

    outputMode: boolean
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history" >
            {'Mode:'}
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {/* CHANGED */}
            {props.history.map((command) => (
            <div>
                <p>{command}</p>
                </div>
            ))}
        </div> 
        );    
}