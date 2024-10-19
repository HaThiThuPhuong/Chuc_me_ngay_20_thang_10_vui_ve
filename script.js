// Kiểm tra mật khẩu
function checkPassword() {
    var inputPassword = document.getElementById("password").value;
    var correctPassword = "ConYeuMeNhieu";  // Đặt mật khẩu của bạn ở đây
    if (inputPassword === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-screen").style.display = "block";
        playMusic();  // Phát nhạc ngay khi đăng nhập
        typeText();   // Hiệu ứng chữ chạy cho màn chúc mừng
        document.body.classList.add("logged-in"); // Thay đổi background khi đăng nhập
    } else {
        document.getElementById("error-message").textContent = "Sai mật khẩu!";
    }
}

// Bắt đầu phát nhạc nền
function playMusic() {
    var audio = document.getElementById("background-music");
    audio.play();
}

// Hiệu ứng xóa và viết lại cho hai dòng văn bản
function typeText() {
    var messages = [
        "Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10!",
        "Happy VietNamese Women's Day"
    ];
    
    var messageIndex = 0; // Chỉ số của dòng văn bản hiện tại
    var message = messages[messageIndex]; // Dòng văn bản hiện tại
    var i = 0; // Chỉ số ký tự hiện tại
    var speed = 200; // Tốc độ viết
    var isDeleting = false; // Biến trạng thái xóa

    function typeWriter() {
        var displayText = message.substring(0, i); // Lấy phần tử hiện tại của message

        // Nếu đang xóa
        if (isDeleting) {
            displayText = message.substring(0, i - 1); // Xóa một chữ
            i--; // Giảm chỉ số
        } else {
            displayText = message.substring(0, i); // Viết một chữ
            i++; // Tăng chỉ số
        }

        document.getElementById("welcome-message").textContent = displayText; // Cập nhật nội dung hiển thị

        // Nếu đã hoàn thành việc viết hoặc xóa
        if (i === message.length) {
            isDeleting = true; // Chuyển sang chế độ xóa
        } else if (i === 0) {
            isDeleting = false; // Chuyển sang chế độ viết lại
            messageIndex = (messageIndex + 1) % messages.length; // Chuyển sang dòng văn bản tiếp theo
            message = messages[messageIndex]; // Cập nhật dòng văn bản mới
        }

        // Điều chỉnh tốc độ dựa trên chế độ
        var timeout = isDeleting ? speed / 2 : speed;

        setTimeout(typeWriter, timeout);
    }

    typeWriter();
}



// Hiệu ứng nhảy cho từng chữ
function animateLetters() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = 'bounce 0.3s ease infinite';
        }, index * 500); // Thời gian giữa các chữ
    });
}

// Gọi hàm animateLetters khi trang tải
window.onload = function() {
    animateLetters();
};
// Hiện bức thư
function showLetter() {
    document.getElementById("letter-image").style.display = "block"; // Hiện bức thư
    document.getElementById("open-button").style.display = "block"; // Hiện nút mở thư
}
// Mở thư
function openLetter() {
    var envelope = document.getElementById("letter-image");
    envelope.classList.add("open"); // Thêm class để mở bức thư
    setTimeout(function() {
        envelope.style.display = "none"; // Ẩn bức thư
        document.querySelector("#main-screen p").style.display = "none"; // Ẩn đoạn "Coi thư"
        document.getElementById("letter-paper").style.display = "block"; // Hiện tờ giấy
        typeDynamicContent(); // Bắt đầu hiệu ứng chữ chạy cho nội dung
    }, 300); // Thời gian trễ cho hiệu ứng mở
}

// Hiệu ứng chữ chạy cho nội dung
function typeDynamicContent() {
    var message = "Mẹ ơi! Người ta hay nói 'Mẹ làm gì có ước mơ!', nhưng con biết mẹ cũng có những ước mơ riêng. Ngày bé, mẹ ước mơ được tới trường, nên mẹ cho con học con chữ. Mẹ ước mơ được một bữa no, nên dẫu có phải đi làm vất vả khổ cực đến đâu mẹ cũng cho con được bữa cơm ngon. Mẹ đã dành cả thanh xuân để lo cho con, để con có cơ hội được học, được biết những điều mà mẹ chưa từng có, mẹ luôn mong cuộc sống của con tốt hơn như ước mơ của mẹ cho chính mình ngày bé. Chỉ khác một điều ước mơ của mẹ là chúng con mất rồi. Hiện tại, con còn đang đi học, chưa thể báo đáp cho mẹ nhiều. Nhưng con luôn mong nụ cười sẽ mãi ở trên môi mẹ. Đây là một món quà nhỏ gửi đến mẹ nhân ngày 20 tháng 10. Món quà được tạo ra bằng chính những đánh đổi của mẹ hàng ngày cho con biết và tiếp cận. Con yêu mẹ và biết ơn mẹ nhiều lắm.";
    var i = 0;
    var speed = 50; // Tốc độ chạy chữ

    // Làm cho chữ chạy ra mà không xóa
    function typeWriter() {
        if (i < message.length) {
            document.getElementById("dynamic-content").style.display = "block"; // Hiện nội dung
            document.getElementById("dynamic-content").textContent += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } 
    }
    typeWriter();
}