const btn = document.getElementById('btn');
const password = document.getElementById('yourPassword')
btn.onclick = function () {
   if (password.type == "password" && btn.classList.contains("bxs-lock-alt")) {
      password.setAttribute("type", "text");
      btn.classList.remove("bxs-lock-alt");
      btn.classList.add("bxs-lock-open-alt");
   }
   else {
      password.setAttribute("type", "password");
      btn.classList.remove("bxs-lock-open-alt");
      btn.classList.add("bxs-lock-alt");
   }
}