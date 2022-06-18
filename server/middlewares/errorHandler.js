function logError(err,req,res,next) {
if(err) {
  console.log(err);
}
next();
}

function boomErrorHandler(err,req,res,next) {
if(err.isBoom) {
  const {output} = err;
  res.status(output.statusCode).json(output.payload);
}

next(err);
}


module.exports = {logError, boomErrorHandler};
