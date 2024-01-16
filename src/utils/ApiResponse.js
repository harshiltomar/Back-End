class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;

    // 100-199: information rep, 200-299: success resp, 300-399: redirect msg, 400-499: client error msg, 500-599: server error msg
    this.success = statusCode < 400;
  }
}
