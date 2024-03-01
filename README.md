> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details
Project Name: Mock

Team Members and Contributors: mlau17 and ebrayboy

Total estimated time it took to complete project: 20 hours

Repo Link: 

# Design Choices
During this sprint, we utilized a total of seven files: App.tsx, CommandRegistry.ts, ControlledInput.tsx, LoginButton.tsx, REPL.tsx, REPLHistory.tsx, and REPLInput.tsx. At the program's top level is App.tsx, which incorporates LoginButton.tsx to verify user authentication. If the user is logged in, the program initiates REPL.tsx. REPL serves as the core component for storing information, enabling access to this data and various states at any subordinate level. Information and states are then conveyed from REPL to both REPLHistory.tsx and REPLInput.tsx. Among these, REPLInput.tsx is a little more important as it employs ControlledInput.tsx to generate an input field, subsequently capturing and managing the inputs. This input is used to interact with our command map in CommandRegistry.ts, which includes an interface defining a function, a map, a method for assigning a name to a function, and another method for retrieving a function by name. So when the submit button is clicked, this process locates the desired function, executes it, and forwards the output to the history, which is then displayed as a table in REPLHistory.tsx.

I primarily utilized a nested list of strings for my data structures because they align with the server's data format.

I introduced CommandRegistry.ts to act akin to a global variable, storing all functions and their respective names. This approach simplifies the process for developers to add or remove commands. By registering a new command, a developer specifies its functionality, while deletion is just as straightforward. This system effectively eliminates the need for extensive if-else statements, streamlining the creation and removal of functions as necessary. 

# Errors/Bugs

# Tests
One of the methods we employed to test our code's functionality was through mocking. We created a file named mockedJson.ts, which contains three maps populated with predefined inputs and their corresponding outputs, effectively simulating real-world data retrieval. To facilitate the implementation of mocking, we imported it into our REPLInput and integrated it within our load, view, and search methods to verify whether they returned the correct values. This approach allows us to assess our code's performance in the absence of a backend.

# How to

# Collaboration
https://react.dev/
