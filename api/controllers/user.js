const handleUserUpdate = (req, res, db) => {
  const { userId } = req.params
  const apikeyHash = bcrypt.hashSync(req.body.apiKey);

  db('users')
  .where({ user_id: userId })
  .update({ plantnet_apikey: apikeyHash})
  .then(resp => {
    if (resp) {
      res.status(200).json("Success")
    } else {
      res.status(400).json('Not found')
    }
  })
  .catch(err => res.status(400).json('error updating user'))
}

module.exports = {
  handleUserUpdate: handleUserUpdate
}