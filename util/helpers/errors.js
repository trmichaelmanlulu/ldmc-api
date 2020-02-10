const HttpStatus = require('http-status-codes');

class ExtendableError extends Error {
  constructor(data) {
    if (new.target === ExtendableError)
      throw new TypeError('Abstract class "ExtendableError" cannot be instantiated directly.');
    super(data);
    this.name = this.constructor.name;
    this.data = data;
    Error.captureStackTrace(this, this.contructor);
  }
}

// 400 Bad Request
class BadRequest extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('bad request');
    else
      super(d);
  }
}

// 401 Unauthorized
class Unauthorized extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('unauthorized');
    else
      super(d);
  }
}

// 403 Forbidden
class Forbidden extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('forbidden');
    else
      super(d);
  }
}

// 404 Not Found
class NotFound extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('not found');
    else
      super(d);
  }
}

// 409 Conflict
class Conflict extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('conflict');
    else
      super(d);
  }
}

// 422 Unprocessable Entity
class UnprocessableEntity extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('unprocessable entity');
    else
      super(d);
  }
}

// 500 Internal Server Error
class InternalServerError extends ExtendableError {
  constructor(d) {
    if (arguments.length === 0)
      super('internal server error');
    else
      super(d);
  }
}

function errorHandler(err, res) {
  // handle all possible http errors
  if (err instanceof BadRequest)
    return res.status(HttpStatus.BAD_REQUEST).json({ type: err.name, error: err.data }); // 400

  if (err instanceof Forbidden)
    return res.status(HttpStatus.FORBIDDEN).json({ type: err.name, error: err.data }); // 403

  if (err instanceof NotFound)
    return res.status(HttpStatus.NOT_FOUND).json({ type: err.name, error: err.data }); // 404

  if (err instanceof UnprocessableEntity)
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ type: err.name, error: err.data }); // 422

  // return the error as status instead of just throwing error
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ type: err.name, error: err.data });
}

module.exports.BadRequest = BadRequest;
module.exports.Unauthorized = Unauthorized;
module.exports.Forbidden = Forbidden;
module.exports.NotFound = NotFound;
module.exports.Conflict = Conflict;
module.exports.UnprocessableEntity = UnprocessableEntity;
module.exports.InternalServerError = InternalServerError;
module.exports.errorHandler = errorHandler;