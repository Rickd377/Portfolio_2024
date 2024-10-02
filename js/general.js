document.addEventListener('DOMContentLoaded', function() {
    const experienceSpan = document.getElementById('experience-years');
    const startDate = new Date(2023, 8); // September 2023 (month is 0-indexed)
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30)); // Convert time difference to months
    const diffYears = (diffMonths / 12).toFixed(1); // Convert months to years and keep one decimal place

    experienceSpan.textContent = diffYears;

    // Update star icons based on years of experience
    const starIcons = document.querySelectorAll('.icon-wrapper i');
    const years = Math.floor(diffYears); // Get the integer part of the years
    const hasHalfYear = diffYears - years >= 0.5; // Check if there is a half year

    starIcons.forEach((icon, index) => {
        icon.classList.remove('fa-solid', 'fa-star-half-stroke'); // Reset classes

        if (index < years) {
            icon.classList.add('fa-solid');
        } else if (index === years && hasHalfYear) {
            icon.classList.add('fa-star-half-stroke');
        }
    });
});