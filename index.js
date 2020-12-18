const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');

const crud = require('express-sequelize-crud')
const { sequelizeCrud } = require('express-sequelize-crud')

const bodyParser = require('body-parser');
//const loginService = require('./src/main/services/LoginService');

app.use(express.json({limit: '50mb'}));//Pass json body data;
app.use(express.urlencoded({limit: '50mb', extended:true}));//Accept data from forms
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
const path =require('path');
global.appRoot = path.resolve(__dirname);

const routes = require('./src/main/routes/')

app.use('/api/', routes);

app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
      try {
        const accessToken = req.headers["x-access-token"];
        const {
          userId,
          exp
        } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        // If token has expired
        if (exp < Date.now().valueOf() / 1000) {
          return res.status(401).json({
            error: "JWT token has expired, please login to obtain a new one"
          });
        }
        res.locals.loggedInUser = await loginService.getUser({where: {
            id: userId
        }});
        next();
      } catch (error) {
        next(error);
      }
    } else {
      next();
    }
  });

  app.get('/',(req,res) => {
      console.log('Hit');
      res.json('hey')
  })
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
