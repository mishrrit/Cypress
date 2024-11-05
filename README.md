# Cypress
Cypress Tutorials


# Cypress Architecture
Cypress is a test runner that runs tests in a browser. It is a wrapper around the browser. 

# Demo App
Navigate to app directory and run 
    npm run start

# Debugger
There are multiple ways to debug your tests.
    1. One would be to use the debugger keyword. 
        debugger;  //Cypress runs asynchronously, so this will pause the test at the debugger keyword.

    2. The other way is to use the debugger fucntion like this: and 
        .then(() => {
            debugger;
        });

    3. The other way is to use as debug like this
        .debug();

Preferably, use 2 or 3 for debugging, in orde to interact with the code, use developer console to pause or resume debugging and to interact with the code

    
# Environment Variables
There are multiple ways to set environment variables.
    1. Using the cypress.config.js file
        "env": {
            "MY_ENV_VARIABLE": "HELLO"
        }

    2. Using command line to set global variable through terminals
            export CYPRESS_MY_ENV_VARIABLE = "hello"
        Accessing the variable  
            alert(Cypress.env("MY_ENV_VARIABLE") -- alert is used to give a pop up for the user
        Unset variable
        unset CYPRESS_MY_ENV_VARIABLE

    3.Using command line
        npx cypress open --env MY_ENV-VARIABLE='hello'

    4. Using cypress.env.json
        {
            "MY_ENV_VARIABLE": "hello"
        }
    


