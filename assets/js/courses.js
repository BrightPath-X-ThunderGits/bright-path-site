import { courses } from "../data/course-data.js";

console.log("Courses", courses);


// Pagination settings
let currentPage = 1;
const coursesPerPage = 6;
const totalCourses = courses.length;
const totalPages = Math.ceil(totalCourses / coursesPerPage);

// Function to render courses dynamically
function renderCourses(filteredCourses) {
    const coursesGrid = document.getElementById("courses-grid");
    coursesGrid.innerHTML = ""; // Clear previous courses
  
    if (filteredCourses.length === 0) {
      coursesGrid.innerHTML = `<p class="text-center text-gray-500">No courses found. Try adjusting your filters.</p>`;
      return;
    }
  
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    if (currentPage > totalPages) {
      currentPage = 1;
    }
  
    filteredCourses
      .slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage)
      .forEach((course) => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("lg:w-1/3", "md:w-1/2", "p-4", "course-card");
  
        courseCard.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <img class="w-full h-48 object-cover object-center mb-4 rounded-lg" src="${course.image}" alt="Course Image" loading="lazy">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            <a href="course-details.html?id=${course.id}" class="hover:underline">${course.name}</a>
          </h3>
          <p class="leading-relaxed text-base text-gray-600 mb-4">${course.type} in ${course.stream}</p>
          <p class="text-sm text-gray-500 mb-4">${course.description}</p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-gray-900">₹${course.price}</span>
            <span class="text-sm text-gray-500">${course.duration}</span>
          </div>
          <a href="./course-details.html?id=${course.id}" aria-label="View details of ${course.name}">
            <button class="mt-4 bg-red-600 text-white w-full py-2 rounded-full hover:bg-red-700">View Details</button>
          </a>
        </div>
      `;
  
        coursesGrid.appendChild(courseCard);
      });
  
    updatePaginationStatus();
  }

// Function to update pagination status
function updatePaginationStatus() {
  document.getElementById(
    "pagination-status"
  ).textContent = `Page ${currentPage} of ${totalPages}`;
}

// Function to handle course search on keypress
function searchCourses() {
  const searchText = document.getElementById("search").value.toLowerCase();
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchText)
  );
  renderCourses(filteredCourses);
}

// Function to apply filters
function applyFilters() {
  const stream = document.getElementById("course-stream").value.toLowerCase();
  const type = document.getElementById("course-type").value.toLowerCase();
  const price = document.getElementById("price-range").value.toLowerCase();
  const duration = document.getElementById("duration").value.toLowerCase();
  const session = document.getElementById("session").value.toLowerCase();

  const filteredCourses = courses.filter((course) => {
    return (
      (stream === "" || course.stream.toLowerCase().includes(stream)) &&
      (type === "" || course.type.toLowerCase().includes(type)) &&
      (price === "" ||
        (price === "under-30000" && course.price < 30000) ||
        (price === "30000-50000" &&
          course.price >= 30000 &&
          course.price <= 50000) ||
        (price === "above-50000" && course.price > 50000)) &&
      (duration === "" || course.duration.toLowerCase().includes(duration)) &&
      (session === "" || course.session.toLowerCase().includes(session))
    );
  });

  renderCourses(filteredCourses);
}

// Pagination navigation
document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderCourses(courses);
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderCourses(courses);
  }
});

// Initial render
renderCourses(courses);
