function getRepositories() {
    const req = new XMLHttpRequest();
    req.addEventListener("load", showRepositories)
    req.open("GET", "https://api.github.com/users/yoheezus/repos")
    req.send()
}


function showRepositories(event, data) {
    console.log(this.responseText)
}
