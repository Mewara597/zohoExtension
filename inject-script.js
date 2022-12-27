if (location.hostname == "people.zoho.com") {
    console.log("tension mat lo me sambhal lunga")
    const url = "https://people.zoho.com/httpsspicegemscom/zp#home/dashboard"

    setInterval(() => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        if (((hours == 10) && (minutes == 59)) || ((hours == 19) && (minutes == 30))) {
            if (window.location.href == url) {
                const signIn = document.querySelector("#ZPD_Top_Att_Stat");
                signIn ? signIn.click() : '';
            } else window.open(url)
        }
    }, 40000)
}