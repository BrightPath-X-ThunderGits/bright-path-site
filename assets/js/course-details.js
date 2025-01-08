import { courses } from "../data/course-data.js";

console.log("Courses", courses);

// Fetch course ID from URL
const courseId = new URLSearchParams(window.location.search).get("id");

// Dummy courses array (replace with an API call if needed)
const course = courses.find((c) => c.id === parseInt(courseId));

console.log("Course", course);

// Populate data dynamically
if (course) {
  // Update Hero Section
  document.getElementById(
    "hero-section"
  ).style.backgroundImage = `url('${course.image}')`;
  document.getElementById("course-title").innerText = course.name;
  document.getElementById("course-short-description").innerText =
    course.description;
  document.getElementById(
    "course-duration"
  ).innerText = `Duration: ${course.duration}`;
  document.getElementById("course-price").innerText = `Price: ₹${course.price}`;
  document.getElementById(
    "course-session"
  ).innerText = `Session: ${course.session}`;

  // Populate Key Features Section
  const featuresGrid = document.getElementById("features-grid");

  if (course.details && course.details.keyFeatures) {
    featuresGrid.innerHTML = ""; // Clear existing content

    course.details.keyFeatures.forEach((feature) => {
      const featureDiv = document.createElement("div");
      featureDiv.classList.add("p-4", "lg:w-1/3");

      featureDiv.innerHTML = `
        <div class="h-full bg-white p-6 rounded-lg shadow-lg">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
              ${feature.icon}
            </svg>
          </div>
          <h2 class="text-lg font-medium title-font mb-2">${feature.title}</h2>
          <p class="leading-relaxed text-base">${feature.description}</p>
        </div>
      `;

      featuresGrid.appendChild(featureDiv);
    });
  }

  if (course.details && course.details.courseInformation) {
    const { title, image, detailsDescription } =
      course.details.courseInformation;

    // Select the course info section
    const courseInfoSection = document.getElementById("course-info-section");

    // Build the dynamic HTML
    courseInfoSection.innerHTML = `
    <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col lg:flex-row">
      <!-- Image Section -->
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
        <img
          class="object-cover object-center rounded-lg"
          src="${image}"
          alt="${title} Image"
        />
      </div>

      <!-- Course Information Section -->
      <div class="lg:w-1/2 w-full lg:pl-10">
        <h1 class="text-3xl font-bold title-font text-gray-900 mb-4">
          ${title}
        </h1>
        <div class="mb-6">
          <h2 class="text-lg font-semibold text-gray-700">Duration</h2>
          <p class="text-gray-800">${course.duration || "N/A"}</p>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold text-gray-700">Course Information</h2>
          <p class="leading-relaxed text-gray-800">
            ${detailsDescription}
          </p>
        </div>
        <a href="tel:+1234567890" class="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-orange-600">
  Call Us Now
</a>
      </div>
    </div>
  `;
  }

  if (course.details && course.details.whatIsThis) {
    const { title, image, detailsDescription } = course.details.whatIsThis;

    // Select the placeholder section
    const whatIsThisSection = document.getElementById("what-is-this-section");

    // Build the dynamic HTML
    whatIsThisSection.innerHTML = `
      <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col lg:flex-row-reverse">
        <!-- Image Section -->
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            class="object-cover object-center rounded-lg"
            src="${image}"
            alt="${title} Image"
          />
        </div>
  
        <!-- Content Section -->
        <div class="lg:w-1/2 w-full lg:pr-10">
          <h2 class="text-3xl font-bold title-font text-gray-900 mb-4">
            ${title}
          </h2>
          <p class="leading-relaxed text-gray-800 text-base">
            ${detailsDescription}
          </p>
        </div>
      </div>
    `;
  }

  if (course.details && course.details.whyChooseThis) {
    const { title, image, detailsDescription } = course.details.whyChooseThis;

    // Select the placeholder section
    const whyChooseThisSection = document.getElementById(
      "why-choose-this-section"
    );

    // Build the dynamic HTML
    whyChooseThisSection.innerHTML = `
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
        <!-- Image Section -->
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            class="object-cover object-center rounded-lg"
            src="${image}"
            alt="${title} Image"
          />
        </div>
  
        <!-- Content Section -->
        <div class="lg:w-1/2 w-full lg:pl-10">
          <h2 class="text-3xl font-bold title-font text-gray-900 mb-4">
            ${title}
          </h2>
          <p class="leading-relaxed text-gray-800 text-base">
            ${detailsDescription}
          </p>
        </div>
      </div>
    `;
  }

  if (course.details && course.details.who) {
    const { title, image, detailsDescription } = course.details.who;

    // Select the placeholder section
    const whoShouldDoSection = document.getElementById("who-should-do-section");

    // Build the dynamic HTML
    whoShouldDoSection.innerHTML = `
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row-reverse">
        <!-- Image Section -->
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            class="object-cover object-center rounded-lg"
            src="${image}"
            alt="${title} Image"
          />
        </div>
  
        <!-- Content Section -->
        <div class="lg:w-1/2 w-full lg:pr-10">
          <h2 class="text-3xl font-bold title-font text-gray-900 mb-4">
            ${title}
          </h2>
          <p class="leading-relaxed text-gray-800 text-base">
            ${detailsDescription}
          </p>
        </div>
      </div>
    `;
  }

  document.getElementById("course-name").value = course.name;
  document.getElementById("course-title-cta").innerText = course.name;
} else {
  document.body.innerHTML = `<p class="text-center text-gray-500">Course not found.</p>`;
}

// Handle form submission
document.getElementById("apply-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const applicationData = {
    courseName: formData.get("course-name"),
    fullName: formData.get("full-name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  console.log("Application Data:", applicationData);

  // You can add API logic here to send the form data to a server
  alert("Your application has been submitted!");
});
