> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details
Project Name: Mock

Team Members and Contributors: mlau17 and ebrayboy

Total estimated time it took to complete project: 20 hours

Repo Link: 

# Design Choices
During this sprint, we utilized a total of seven files to create a web front-end interface that will be able to call user commands like load, view, and search CSV files. The seven files are App.tsx, CommandRegistry.ts, ControlledInput.tsx, LoginButton.tsx, REPL.tsx, REPLHistory.tsx, and REPLInput.tsx. At the program's top level is App.tsx, which incorporates LoginButton.tsx to verify user authentication. If the user is logged in, the program initiates REPL.tsx. REPL serves as the core component for storing information, enabling access to this data and various states at any subordinate level. Information and states are then conveyed from REPL to both REPLHistory.tsx and REPLInput.tsx. Among these, REPLInput.tsx is a little more important as it employs ControlledInput.tsx to generate an input field, subsequently capturing and managing the inputs. This input is used to interact with our command map in CommandRegistry.ts, which includes an interface defining a function, a map, a method for assigning a name to a function, and another method for retrieving a function by name. So when the submit button is clicked, this process locates the desired function, executes it, and forwards the output to the history, which is then displayed as a table in REPLHistory.tsx.

I primarily utilized a nested list of strings for my data structures because they align with the server's data format.

I introduced CommandRegistry.ts to act akin to a global variable, storing all functions and their respective names. This approach simplifies the process for developers to add or remove commands. By registering a new command, a developer specifies its functionality, while deletion is just as straightforward. This system effectively eliminates the need for extensive if-else statements, streamlining the creation and removal of functions as necessary. 

# Errors/Bugs

# Tests
One of the methods we employed to test our code's functionality was through mocking. We created a file named mockedJson.ts, which contains three maps populated with predefined inputs and their corresponding outputs, effectively simulating real-world data retrieval. To facilitate the implementation of mocking, we imported it into our REPLInput and integrated it within our load, view, and search methods to verify whether they returned the correct values. This approach allows us to assess our code's performance in the absence of a backend.

To create our e2e testing suite, we used the Playwright test library to stimulate a user calling various commands of the web interface. By running checks on the expected output of these hypothetical user interactions, we can make sure our front-end interface is functioning properly. To create a comprehensive testing suite, we re-created cases where the output might be successful but also those that might be unsuccessful. We also checked edge cases for all the commands such as incorrect inputs, missing inputs, incorrect format, data is non-existent, etc. We also tested that our HTML table was displayed correctly along with any messages in response to the commands.

To run our testing suite, in the terminal enter: "npx playwright test".

# How to
1.) In the terminal, run "npm start," and click on the link that appears in the terminal.
2.) Before using the web interface, you will have to log in, which you can do by clicking the log-in button at the top of the page. Then you will see the input box that says "Enter Command Here!" Along with a place that says what output mode you are in, the default output mode is brief and if you want to change it enter the command: "mode verbose". And to change it back enter the command: "mode brief". Make sure to click submit after inputting your command. The brief mode only displays the result of the command, while verbose displays the command used and the result of the command.
3.) Now to use the web functionalities, you will have to load a file first. To load a file you would enter this command: "load_file <file-path>." Then click submit and an appropriate message will appear near the top of the screen. 
4.) To view the file that you loaded, use the command: "view". Then click submit and it should be displayed to you in a table format. 
5.) To search the file that you loaded or viewed, use the command: "search <column identifier>,<value>". Then click submit and the rows that match the value, and the column identifier if you used it, will be displayed as a table. (Note: Please only use column name or column index for a column identifier or else it will not work. Also, make sure the identifier and value you are looking for are only separated by a comma and not any spaces. If the value you are looking for is two or more separate words use "_" instead of a space.)

# Collaboration
https://react.dev/
