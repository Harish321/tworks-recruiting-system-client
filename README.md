# tworks-recruiting-system-client
T-Works Recruiting System Client Code

## Setup
1. Run ```npm install```  cmd to load the node dependencies.
2. Run ```bower install``` cmd to load the project related dependencies.
3. Run ```http-server``` cmd or place the direcotry in any client hosting location to host the project.


## Routes
1. /home 
    - This is the default route, user can upload a file from this stage itself.
2. /prestage 
    - Page will be rediected to state called PreStage route after a successful file upload.
    - User can review the applicaiton in this stage and save it in database.
    - User can perform Sort and Filter actions starting from this stage.
3. /activeStage 
    - Once the data is saved in database, application will be redirected to state called active stage.
    - URL can be shared from this stage onwards and same data will be fetched using help of url parameters.
    - User can perform Sort and Filer actions in this stage as well.

## Assumptions & Approach

- Considered each file upload as a batch and upon clicking on save of a batch, will be generating random batch ID,
- All the applications will be tracked against the generated batch ID.
- The project is developed considering the above approach.
