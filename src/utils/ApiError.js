/**
 * Định nghĩa riêng một Class ApiError kế thừa class Error sẵn (điều này cần thiết và là Best Practice vì class Error nó là class built-in sẵn)
 */
class ApiError extends Error {
  constructor(statusCode, message) {
    // Gọi tới hàm khởi tạo của class Error (class cha) để còn dùng this (kiến thức OOP lập trình hướng đối tượng căn bản)
    // Thằng cha (Error) có property message rồi nên gọi nó luôn trong super cho gọn
    super(message)

    // Tên của cái custom Error này, nếu không set thì mặc định nó sẽ kế thừa là "Error"
    this.name = 'ApiError'

    // Gán thêm http status code của chúng ta ở đây
    this.statusCode = statusCode

    // Ghi lại Stack Trace (dấu vết ngăn xếp) để thuận tiện cho việc debug
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ApiError

console.log("TEST GIT COMMIT 1")

console.log("TEST GIT COMMIT 1, sữa lại code trong test git lần 1")

console.log("TEST GIT COMMIT 2, sữa lại code trong test git lần 2")

console.log("TEST GIT COMMIT 3, sữa lại code trong test git lần 3")

console.log("TEST GIT COMMIT 4, sữa lại code trong test git lần 4")

console.log("TEST GIT COMMIT 5, sữa lại code trong test git lần 5")

console.log("TEST GIT COMMIT 6, sữa lại code trong test git lần 6")

console.log("TEST GIT COMMIT 7, sữa lại code trong test git lần 7")

console.log("TEST GIT COMMIT 8, sữa lại code trong test git lần 8")

console.log("TEST GIT COMMIT 9, sữa lại code trong test git lần 9")