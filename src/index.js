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
    // Handle date parameter
    let date;
    const decodedDateString = decodeURIComponent(dateString);

    if (!isNaN(decodedDateString)) {
      // If decodedDateString is a valid timestamp
      date = new Date(parseInt(decodedDateString));
    } else {
      // If decodedDateString is a date string
      date = new Date(decodedDateString);
    }

    if (date.toString() === "Invalid Date") {
      response = { error: "Invalid Date" };
    } else {
      response = {
        unix: date.getTime(),
        utc: date.toUTCString(),
      };
    }
  } else {
    response = { error: "Invalid Date" };
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://www.freecodecamp.org",
  });
  res.end(JSON.stringify(response));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
