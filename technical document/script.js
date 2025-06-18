
function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "none";
        
    } else {
        answer.style.display = "block";
    }
  }
  

document.addEventListener('DOMContentLoaded', function () {
    // 获取导航链接
    var navLinks = document.querySelectorAll('.nav-link');
    var mainSections = document.querySelectorAll('.main-section');
    
    // 添加点击事件处理程序
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 滚动到目标部分
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});