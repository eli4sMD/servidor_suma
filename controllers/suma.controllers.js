const suma = {};

suma.sumar = async (req, res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    const result = num1 + num2;
    res.send(`El resultado de la suma es: ${result}`);
  };

module.exports = suma