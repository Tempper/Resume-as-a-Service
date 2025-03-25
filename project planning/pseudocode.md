# Server.js
```
Import dependencies and enviroment variables
  load express, dotenv, mongoose, any other packages

Connect to mongoDB
  Call connectToDatabase()

Initilise express app
  -setup middleware (e.g JSON Parsing)

Mount resume routes at /resume

Start server and display status message with current port.
```

# config
## db.js
```
Connect to database function
  connect to database():
  Try to connect to MongoDB using MONGO_URI
  if sucessful, log sucess message
  if failure, log error message and exit process
```

# model
## Resume.js
```
Create model that will hold the resumes data (this model is subject to change)

name: String
title: String
contact: Object
experience: Array of job enteries
education: Array of education enteries
skills: Array of strings
updatedAt: timestamp
```

# controllers
## ResumeController.js
```
 get resume as JSON function:
  fetch resume from DB
  return as json

 get resume as HTML:
  Fetch resume and render with html template
  return html

 get as markdown:
  fetch resume and pass to markdown service
  return markdown string

 get as pdf:
  fetch resume
  generate html
  pass html to pdf service to create pdf
  return pdf file

  create or update resume:
    if resume exists update
    else create new
    Save version to versionService

  get resume version:
    fetch versioned resume from DB
    return 
  
```

# routes
## resumeRoutes.js
```
 import express nad resume Controller

 Define resume routes including user authentication and resume version
```
# services
## markdownService.js
```
convert resume to markdown function:
  for each section in resume
    convert data into Markdown syntax
  return combined markdown string
```
## versionService.js
```
function save resume version:
  copy current resume data into version history collection
  Add timestamp/version number
  save to DB
```