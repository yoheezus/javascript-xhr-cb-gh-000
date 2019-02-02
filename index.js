function getRepositories() {
    const req = new XMLHttpRequest();
    req.open("GET", "https://api.github.com/users/yoheezus/repos")
    req.send()
}
