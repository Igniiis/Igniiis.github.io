document.getElementById('stunning-guacamole-blog-link').addEventListener('click', function(){
    document.querySelector(".active-btn").classList.remove("active-btn");
    document.getElementById('blogs-button').classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById("blogs").classList.add("active");
})