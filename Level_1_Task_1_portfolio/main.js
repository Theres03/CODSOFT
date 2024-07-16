var typed=new Typed(".text",{
    strings:["Frontend Developer","Web Developer","Data Analyst"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function toggleDetails(projectId) {
    var projectDetails = document.getElementById(projectId + '-details');
    if (projectDetails.style.display === 'block') {
        projectDetails.style.display = 'none';
    } else {
        projectDetails.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('.radial-bar .path');
    paths.forEach(path => {
        const percentage = path.getAttribute('data-percentage');
        path.style.setProperty('--percentage', percentage);
    });
});
