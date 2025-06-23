// form-handler.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("support-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const tier = document.getElementById("tier").value;

    if (!email || !tier) {
      alert("Please fill out all fields.");
      return;
    }

    const data = { email, tier };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxXoXfp6bnhbDn7FsHvU-65FEEK_y_y8AfPEmpK1UUYMWcN8BmqV0NVaDDKp_zKp01Gtw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("🎉 Thank you for supporting Maum! We'll be in touch soon.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to server.");
    }
  });
});

