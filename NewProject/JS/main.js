// This is a function of search-header
// Show search panel on tab click if it's hidden
document.addEventListener('DOMContentLoaded', function () {
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    const searchPanel = document.querySelector('.search-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Toggle the search panel with smooth effect
            searchPanel.classList.add('active');
        });
    });
});