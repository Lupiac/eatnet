const handleRegister = (req, res, db, bcrypt) => {
  const { email, apiKey, password } = req.body;
  if (!email || !apiKey || !password) {
    return res.status(400).json('incorrect form submission');
  }
  const passwordHash = bcrypt.hashSync(password);
  const apikeyHash = bcrypt.hashSync(apiKey);
    db.transaction(trx => {
      trx.into('users').insert({
        email: email,
        plantnet_apikey: apikeyHash
      })
      .returning('*')
      .then(user => {
        trx.insert({
          hash: passwordHash,
          email: user[0].email
        })
        .into('logins')
        .returning('email')
        .then(() => {
          res.status(200).json(user[0]);
        })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
  handleRegister: handleRegister
};


