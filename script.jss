// Make all sections collapsible
const sections = document.querySelectorAll('.collapsible h2');

sections.forEach(section => {
    section.addEventListener('click', () => {
        const content = section.nextElementSibling;
        // Toggle display
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
