import '../styles/main.css';
import { Dispatch, SetStateAction } from 'react';

/**
 * This is controls the text box/command line where the user inputs in the command they want
 * and the other data.
 */

/**
 * This interface is stores the input and shares its state with other classes.
 * Making sure the stored input is the same across the program.
 * @prop value represents the command string
 * @prop setvalue allows the command string to be updated when a change to the input changes
 * @prop ariaLabel, used to indicate an interactive property
 */
interface ControlledInputProps {
    value: string, 
    setValue: Dispatch<SetStateAction<string>>,
    ariaLabel: string 
  }
  
/**
 * This is the main function that controls what it looks like and showing the value when the user types
 * @param param0
 * 
 * @return where the user inputs commands and the prompt visible to the user
 */
  export function ControlledInput({value, setValue, ariaLabel}: ControlledInputProps) {
    return (
      <input type="text" className="repl-command-box"
            value={value} 
            placeholder="Enter command here!"
            onChange={(ev) => setValue(ev.target.value)}
            aria-label={ariaLabel}>
      </input>
    );
  }