import { courses } from "../data/course-data.js";

console.log("Courses", courses);

// Function to populate checkboxes dynamically
function populateCheckboxes(filteredCourses = courses) {
  const coursesCheckboxesDiv = document.getElementById("courses-checkboxes");
  coursesCheckboxesDiv.innerHTML = ""; // Clear previous checkboxes

  filteredCourses.forEach((course) => {
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add(
      "bg-white",
      "p-4",
      "mb-2",
      "rounded-lg",
      "shadow-md",
      "hover:shadow-lg",
      "transition-shadow",
      "cursor-pointer",
      "border",
      "border-gray-200"
    );

    checkboxWrapper.innerHTML = `
      <label class="flex items-center space-x-3">
        <input
          type="checkbox"
          name="courses"
          value="${course.id}"
          class="cursor-pointer w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <div>
          <h3 class="text-gray-800 font-semibold">${course.name}</h3>
        </div>
      </label>
    `;
    coursesCheckboxesDiv.appendChild(checkboxWrapper);
  });

  // Attach event listener to track changes on checkboxes
  const checkboxes = document.querySelectorAll("input[name='courses']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", onCheckboxChange);
  });
}

// Function to handle checkbox changes
function onCheckboxChange() {
  const selectedCourseIds = Array.from(
    document.querySelectorAll("input[name='courses']:checked")
  ).map((checkbox) => parseInt(checkbox.value)); // Collect IDs of selected courses

  const selectedCourses = courses.filter((course) =>
    selectedCourseIds.includes(course.id)
  ); // Filter courses based on selection

  renderCourses(selectedCourses); // Update course grid with selected courses
}

// Function to render courses dynamically
function renderCourses(filteredCourses) {
  const coursesGrid = document.getElementById("courses-grid");
  coursesGrid.innerHTML = ""; // Clear previous courses

  if (filteredCourses.length === 0) {
    coursesGrid.innerHTML = `<p class="text-center text-gray-500">No courses found. Try selecting different checkboxes or searching again.</p>`;
    return;
  }

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("lg:w-1/3", "md:w-1/2", "p-4", "course-card");

    courseCard.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img class="w-full h-48 object-cover object-center mb-4 rounded-lg" src="${course.image}" alt="${course.name}" loading="lazy">
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          ${course.name}
        </h3>
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold text-gray-900">${course.price}</span>
          <span class="text-sm text-gray-500">${course.duration}</span>
        </div>
        <a href="./course-details.html?id=${course.id}" aria-label="View details of ${course.name}">
        <button class="mt-4 bg-red-600 text-white w-full py-2 rounded-full hover:bg-red-700">
          View Details
        </button>
        </a>
      </div>
    `;

    coursesGrid.appendChild(courseCard);
  });
}

// Function to handle course search on keypress
function searchCourses() {
  const searchText = document.getElementById("search").value.toLowerCase();

  // Filter courses based on search text
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchText)
  );

  populateCheckboxes(filteredCourses); // Update checkboxes
  renderCourses(filteredCourses); // Update course grid
}

// Initialize the checkboxes and render courses
document.addEventListener("DOMContentLoaded", () => {
  populateCheckboxes(); // Populate checkboxes on page load
  renderCourses(courses); // Render all courses by default

  // Attach search handler to keypress
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", searchCourses);
});