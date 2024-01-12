import express from "express";

const app = express();

app.route('/apii/a')
  .get( function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Content-Language', 'en')
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`)
  })
  .options( function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Content-Language', 'en')
    res.writeHead(204);
    res.end();
  });

const port = process.env.PORT || 10100

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
