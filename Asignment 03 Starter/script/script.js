// check email
const personalInfoSubmit = document.querySelector(".submit-btn");
let message = document.querySelector(".message");
let email;
// regex
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//tạo sự kiện khi nhấn gửi email để check
personalInfoSubmit.addEventListener("click", function () {
  // đặt email = giá trị ở input
  email = document.querySelector(".email-box").value;
  if (!email) {
    // nếu input trống
    message.textContent = `Vui lòng nhập email`;
  } else {
    // nếu input không trống -> kiểm tra có phải là email không
    const isEmail = regex.test(email);
    if (!isEmail) {
      // nếu không phải email
      message.textContent = `Email đã nhập không đúng với định dạng. Vui lòng nhập lại`;
    } else {
      // nếu là email -> so sánh với email người dùng
      if (email === "thanglmfx29033@funix.edu.vn") {
        // nếu là email của người dùng -> hiện thông tin
        document.querySelector(".hidden").classList.toggle("hidden");
        document.querySelector(".right-content").classList.add("hidden");
      } else {
        message.textContent = `Email đã nhập không chính xác. Vui lòng nhập lại`;
      }
    }
  }
});

//view more
const jobInfo = document.querySelectorAll(".item");
let content;
// tạo kí tự đặc biệt
const arrowUp = String.fromCharCode(9650);
const arrowDown = String.fromCharCode(9660);
// sử dụng for để quét tất cả các item trong job-info
for (i = 0; i < jobInfo.length; i++) {
  let content = jobInfo[i].querySelector(".bot__content");
  // chạy sự kiện khi nhấn vào nút view more hoặc view less
  jobInfo[i].querySelector(".bot__btn").addEventListener("click", function () {
    // nếu nội dung đã hiện -> ẩn nội dung và ngược lại
    content.classList.toggle("hidden");
    // biến đổi nội dung trên nút cho phù hợp
    if (this.textContent === `${arrowUp} View less`) {
      this.textContent = `${arrowDown} View more`;
    } else {
      this.textContent = `${arrowUp} View less`;
    }
  });
}
