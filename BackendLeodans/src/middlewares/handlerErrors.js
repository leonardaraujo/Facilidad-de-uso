const ERROR_HANDLERS = {
  CastError: (res) => {
    res.status(400).send({ error: 'id used is malformed' });
  },
  ValidationError: (res) => {
    res.status(400).send({ error: 'Some field is missing ' });
  },
  JsonWebTokenError: (res) => {
    res.status(401).json({ error: 'token missing or invalid' });
  },
  TokenExpiredError: (res) => {
    res.status(498).json({ error: 'token expired' });
  },
  DefaultError: (res) => {
    res.status(500).end();
  },
};
export default (error, req, res, next) => {
  console.log(error);
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError;
  handler(res);
};
