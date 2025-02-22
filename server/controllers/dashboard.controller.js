export const dashboardController = (req, res) => {
  console.log(req.params);
  console.log(req.session);

  res.json(req.session);
};
