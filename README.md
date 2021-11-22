# eStoreBack

  ## Description
  A backend node.js server application used to create, connect to and manage a mysql database geared for online commerce companies. Uses Node.js, express, mysql2, sequelize, and dotenv.

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  First download or clone my repo, and navigate in terminal to the project parent folder. Run command 'npm install' to install required dependencies. You must then create a `.env` file in the root folder and enter your mysql server logins as per dotenv documentation. The app is instructed to use your `.env` file to login, sync and connect to the database, or JAWSDB if hosted on heroku.

  ## Usage
  After dependencies are installed, you must open mysql CLI from the root folder and run 'source db/schema.sql;' to create the database, then command 'use ecommerce_db;' to instruct mysql server to use that database. Quit mysql, and from terminal run 'npm run seed' to seed the database, and run 'npm start' to start the server. The database can then be managed through api endpoints.  </br>
  Feel free to watch my demo video here: https://watch.screencastify.com/v/ShP61Pu5Oq5cE9gkmoVm
  ## Licenses
  Unlicense
  Copyright Notice 2021 alexm1937 under The Unlicense License: </br>
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.
    
    In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    https://unlicense.org/

  

  

  ## Questions
  You can find my github at: https://github.com/alexm1937 </br>
  
  