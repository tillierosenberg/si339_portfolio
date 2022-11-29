for (let i = 0; i < document.querySelectorAll(".gallery img").length; i++) {
    document.querySelectorAll(".gallery img")[i].addEventListener("mouseover", function(){
        console.log("HI")
        this.style.width = "90%"
        this.style.borderImage = "url(images/border_image.jpeg)"
    })
    document.querySelectorAll(".gallery img")[i].addEventListener("mouseleave", function(){
        this.style.width = "75%"
        this.style.borderImage = ""
    })
}