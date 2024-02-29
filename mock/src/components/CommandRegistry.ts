export interface REPLFunction{
    (args: Array<string>) : String|String[][]
  }

const commandRegistry = new Map<string, REPLFunction>

export const registerCommand = (commandName: string, processor: REPLFunction) => {
    commandRegistry.set(commandName, processor)
};


export const getCommandProcessor = (commandName: string): REPLFunction | undefined => {
    return commandRegistry.get(commandName)
};


