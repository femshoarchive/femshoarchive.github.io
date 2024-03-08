let chat
let video
let playing
let data
let follow = true
let ghpagewarn

// all hail stack overflow
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function stampToTime(substring) {
    substring = ":" + substring.substring(0, substring.search(" "))
    let seconds = 0
    let iter = substring.matchAll(":[0-9]+")
    for (let val = iter.next(); val.done == false; val = iter.next()) {
        seconds = seconds * 60 + Number(val.value[0].substring(1, val.value[0].length))
    }
    return seconds
}

async function chatLoop() {
    while (true) {
        if (playing) {
            for (let substring = data.substring(0, data.search("\n")); stampToTime(substring) <= video.currentTime; substring = data.substring(0, data.search("\n"))) {
                let p = document.createElement("p")
                p.innerText = substring
                chat.appendChild(p)
                data = data.substring(data.search("\n") + 1, data.length)
                if (follow)
                    chat.scrollTop = chat.scrollHeight
                if (typeof(ghpagewarn) != "undefined") {
                    ghpagewarn.remove()
                    ghpagewarn = null
                }
            }
        }
        // i hate this but i want to have some sanity left when i finish this
        chat.style.height = `${video.getBoundingClientRect().height - 10}px`
            
        await sleep(100)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    video = document.querySelector("div#player video")
    if (typeof(video) == 'undefined') {
        console.error("Can't find div#player video!")
        return
    }
    // hotfix cuz github pages
    if (video.baseURI.search("github.io") != -1) {
        src = video.children[0].src
        src = "https://media.githubusercontent.com/media/femshoearchive/femshoearchive.github.io/main" + src.substring(src.search("/assets"), src.length)
        ghpagewarn = document.createElement("p")
        ghpagewarn.innerText = "Because Github Pages CDN is kinda slow expect drawn out loading times. There is nothing I can do..."
        document.querySelector("div#player").appendChild(ghpagewarn)
    }

    fetch(video.children[0].src.replace("/mp4/", "/chat/").replace(".mp4", ".txt")).then(resp => {
	    if (resp.status != 200)
		    return
	    video.style.width = "80%"
        chat = document.createElement("div")
        document.querySelector("div#player").appendChild(chat)
        resp.text().then(ogdata => {
            chatLoop()
            data = ogdata
            video.addEventListener("play", () => {
                playing = true
            })
            video.addEventListener("seeked", () => {
                if (!playing)
                    playing = true
            })
            video.addEventListener("pause", () => {
                playing = false
            })
            video.addEventListener("keydown", ev => {
                if (ev.key == "," || ev.key == ".") {
                    playing = false
                    video.pause()
                    if (ev.key == ",")
                        video.currentTime -= 0.2
                    if (ev.key == ".")
                        video.currentTime += 0.2
                }
            })
            chat.addEventListener("scrollend", () => {
		    follow = chat.scrollTop > chat.scrollTopMax * 0.99
            })
        }).catch(reason => {
            let p = document.createElement("p")
            p.innerText = "Couldn't read chat replay! Open DevTools for more info"
            chat.appendChild(p)
            console.error(`Couldn't read chat replay, reason: ${reason}`)
            return
        })
    }).catch(reason => {
        let p = document.createElement("p")
        p.innerText = "Couldn't load chat replay! Open DevTools for more info"
        chat.appendChild(p)
        console.error(`Couldn't load chat replay, reason: ${reason}`)
        return
    })
})
