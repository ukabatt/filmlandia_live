// Function to add hover effect to navigation links
function addNavHoverEffect() {
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Function to add "Return to Blogs" link for individual blog posts
function addReturnToBlogsLink() {
    if (window.location.pathname.includes('blog-post')) {
        const main = document.querySelector('main');
        const returnLink = document.createElement('a');
        returnLink.href = 'blog.html';
        returnLink.textContent = '← Return to Blogs';
        returnLink.classList.add('return-link');
        main.insertBefore(returnLink, main.firstChild);
    }
}

// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    addNavHoverEffect();
    addReturnToBlogsLink();
});