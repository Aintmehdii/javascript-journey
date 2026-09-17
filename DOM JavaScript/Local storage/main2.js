const score = document.querySelector("#score")
let currentscore = Number(localStorage.getItem("score")) 
score.textContent = `Score: ${currentscore}`

document.addEventListener("keydown", (event)=>{
    if (event.key === "ArrowUp") {
        score.textContent = `Score: ${currentscore += 10}`
        localStorage.setItem("score", currentscore)
    }else if (event.key === "ArrowDown"){
        score.textContent = `Score: ${Math.max(0, currentscore -= 5)}`
        localStorage.setItem("score", currentscore)
    }
})

