/**
 * This is one of the support branches of REPLInput, which contains an interface that defines
 * what a function is, a constant that stores the name of a function and its corresponding function
 * into a map called commandRegistry so it is easier to access all the functions just by the name.
 * There is also a getter method that returns the function by passing in the name of the function,
 * the user is looking for.
 */


/**
 * This interface defines that a function should take in a series of argument(s) and output either a
 * string or list of list of string. This makes sure that if a develop decides to add a function it
 * needs to follow these rules, but it is also easy to change if it wants to use different kinds of
 * functions
 * 
 * @param args the arguments used for the function
 */
export interface REPLFunction{
    (args: Array<string>) : string|string[][]
  }

/**
 * Map of function/command names to REPLFunction/Function
 */
const commandRegistry = new Map<string, REPLFunction>

/**
 * Like a method that stores a function/command name and its corresponding Function into the map
 */
export const registerCommand = (commandName: string, processor: REPLFunction) => {
    commandRegistry.set(commandName, processor)
};

/**
 * Like a getter method that retrieves the function using the function/command name
 */
export const getCommandProcessor = (commandName: string): REPLFunction | undefined => {
    return commandRegistry.get(commandName)
};


