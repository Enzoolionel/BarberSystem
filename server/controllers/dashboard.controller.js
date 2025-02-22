export const dashboardController = (req, res) => {
  console.log(req.session);

  res.json(req.session).redirect("/panel-admin");
};
