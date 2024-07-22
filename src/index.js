const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const dateString = path.split("/api/")[1];
  let response;

  if (path === "/api" || path === "/api/") {
    // Handle empty date parameter
    const now = new Date();
    response = {
      unix: now.getTime(),
      utc: now.toUTCString(),
    };
  } else if (dateString) {
  } else {
    response = { error: "Invalid Date" };
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(response));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
