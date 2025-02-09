import { courses } from "../data/course-data.js";

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("inquiry-modal");
    const closeButton = document.getElementById("close-modal");
    const courseDropdown = document.getElementById("course");

    // Populate Course Dropdown
    courses.forEach((course) => {
        const option = document.createElement("option");
        option.value = course.name;
        option.textContent = course.name;
        courseDropdown.appendChild(option);
    });

    // Show modal on load
    modal.classList.remove("hidden");

    // Close modal on click
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    // Handle form submission
    document
      .getElementById("inquiry-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const selectedCourse = document.getElementById("course").value;

        // Create WhatsApp message
        const whatsappMessage = `Hello Team! I am ${name}. My mobile number is ${mobile} and my email is ${email}. I am interested in the course: ${selectedCourse}`;

        const whatsappNumber = "918825273988";

        // WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        // Open WhatsApp
        window.open(whatsappLink, "_blank");

        // Close the modal
        modal.classList.add("hidden");
      });
  });