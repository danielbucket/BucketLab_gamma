const GET_homeContent = (req, res) => {
  const homeContent = {
    title: 'BucketLab GammaTime!',
    text: 'Welcome to BucketLab GammaTime!',
  };

  res.status(200).send(homeContent);
};

module.exports = {
  GET_homeContent,
};