# Timestamp Microservice

This is a Timestamp Microservice built as a test task for the FreeCodeCamp course "Back End Development and APIs".

## Description

This microservice accepts date strings and timestamps as input and returns the corresponding Unix timestamp and UTC date. It handles various date formats and can also provide the current date and time if no date is provided.

## Usage

### Endpoints

- `GET /api/:date?`

### Examples

- `GET /api/2015-12-25`
  Response:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

- `GET /api/1451001600000`
  Response:

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

- `GET /api/05%20October%202011,%20GMT`
  Response:

```json
{
  "unix": 1317772800000,
  "utc": "Wed, 05 Oct 2011 00:00:00 GMT"
}
```

- `GET /api/invalid-date`
  Response:

```json
{
  "error": "Invalid Date"
}
```

- `GET /api`
  Response:

```json
{
  "unix": 1625580655476,
  "utc": "Thu, 06 Jul 2021 14:50:55 GMT"
}
```

## Running the Project

1. Clone the repository:

```sh
	git clone <repository-url>
	cd timestamp-microservice

```

2. Install dependencies:

```sh
	npm install

```

3. Start the server:

```sh
	npm start

```

4. Visit the endpoints in your browser or use a tool like Postman to test the API.

## License

This project is licensed under the MIT License.
