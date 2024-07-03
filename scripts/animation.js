function reveal() {
    const reveals = document.querySelectorAll(".animated");
  
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementBottom = reveals[i].getBoundingClientRect().bottom;
        const elementVisible = 30;

        if ((elementTop < windowHeight - elementVisible) && elementBottom > 0){
            reveals[i].classList.add("_active");
        } else {
            reveals[i].classList.remove("_active");
        }
    }
}
  
window.addEventListener("scroll", reveal);
reveal();
