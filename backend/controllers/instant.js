export const instant = (req, res) => {
  res.send("Instant Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  //set gpio to high/low
};
