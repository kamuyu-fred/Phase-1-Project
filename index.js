//API key
const API_KEY = `9cd0bcd2f17b504f42461dac3d0a5b5f`;
//login form consts
const loginBtn = document.getElementById("loginBtn")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const login = document.getElementById("login")

// Login Form
window.addEventListener("load", () => {

    loginBtn.addEventListener("click", () => {
        const username = usernameInput
        const password = passwordInput

        if (!username || username == "" && !password || password == "") {

            document.querySelector("locked").addEventListener("click", function () {
                let p = document.querySelector("locked");
                let visibility = getComputedStyle(p).visibility;
                if (visibility == "hidden")
                    p.style.visibility = "visible";
                else
                    p.style.visibility = "hidden";
            })

        } else {
            let access = document.getElementById("locked")
            login.style.visibility = "hidden"
            access.style.visibility = "visible"
        }
    })
})

//Weather fetch API code block
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    // weather icon settings 
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
