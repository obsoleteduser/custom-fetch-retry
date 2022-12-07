const URL = 'https://wtf.com'



const retry = (URL, time) => {

    let i = 0
    const retryEngine = (URL) => {
        fetch(URL)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(() => {
                i++
                if (i === time) {
                    throw new Error("Fuck!")

                }
                else retryEngine()

            })

    }


    retryEngine(URL)

}



retry(URL, 5)