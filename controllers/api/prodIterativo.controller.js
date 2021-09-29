var express = require('express');
var config = require('config');
var router = express.Router();

// routes
router.get('/', prodIterativo);

module.exports = router;

function prodIterativo(req, res) {
   
   try {

      let _min       = Number(req.query.min);
      let _max       = Number(req.query.max);
      let prodTotal  = 1;
      let prodInt    = 0;

      console.log("MINIMO: ",_min)
      console.log("MAXIMO: ",_max)

      if (_min < 1 || (_max < _min) || !Number.isInteger(_max) || !Number.isInteger(_min)) {
         res.status(400).send(
            {
               message: "Parametros incorretos!!!"
            });
      }
   
      for(; _min<= _max; _min++){
   
         prodInt = (_min + (1 / _min));
         prodTotal *= prodInt
         console.log(prodInt)
         
      }
   
      
      res.status(200).send(
         {
            Minimo: Number(req.query.min),
            Maximo: Number(req.query.max),
            prodTotal: prodTotal.toFixed(2)
         }
      );
   } catch (erro) {
      res.status(400).send(
         {
            message: erro
         });
   }


}
