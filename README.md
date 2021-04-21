# tworks-recruiting-system-client
T-Works Recruiting System Client Code

## Setup
1. Run ```npm install``` to load the node dependencies
2. Run ```bower install``` to load the project related dependencies
3. Run ```http-server``` or any client hosting to host the project


## Routes
1. /home 
    - default root , user can upload file from this stage itself.
2. /prestage 
    - Application will be rediected to PreStage route after the file upload
    - Here user can review the applicaiton and save it in database
    - User can perform Sort and Filter actions in this stage.
3. /activeStage 
    - Once the data is saved in database, application will be redirected to active stage
    - URL can be shared in this stage and same data will be fetched using help of url parameters
    - User can perform Sort and Filer actions in this stage.

## Assumptions & Approach

Considered each file upload as a batch and upon each save of a batch and will be generating random batch ID,

all the applications are tracked against the generated batch ID

and the application is developed considering the above approach.
