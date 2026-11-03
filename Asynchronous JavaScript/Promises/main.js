const downloadGame = new Promise((success, failure)=>{
    const downloaded = true
    if (downloaded) {
        success("Game downloaded successfully!")
    }else {
        failure("Download failed!")
    }
})

downloadGame
    .then((print)=>{
        console.log(print)
    })

    .catch((print)=>{
        console.log(print)
    })





const serverConnection = new Promise((connect, disconnect)=>{
    const serverOnline = false

    if (serverOnline) {
        connect("Connected to server!")
    }else {
        disconnect("Server is offline!")
    }
})

serverConnection
    .then((print)=>{
        console.log(print)
    })

    .catch((print)=>{
        console.log(print)
    })

    .finally((print)=>{
        console.log("Connection attempt finished!")
    })
