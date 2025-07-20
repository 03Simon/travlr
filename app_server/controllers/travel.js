module.exports.travelInfo = function(req, res) {
  res.render('travel', {
    title: 'Travel Page',
    destination: 'Bahamas',
    description: 'A sunny getaway with crystal-clear water and fresh seafood!'
  });
};
