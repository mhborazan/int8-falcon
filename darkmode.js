const btnSwitch = document.getElementById("oscuro");
const r = document.querySelector(":root");


btnSwitch.addEventListener("click", () => {
    const isLightMode = getComputedStyle(r).getPropertyValue("--main-color") == "#edf2f9";
    if (isLightMode) {
        r.style.setProperty('--main-color', '#0e1c2f')
        r.style.setProperty('--secondary-color', '#132248')
        r.style.setProperty('--light-gray', '#b6c1d2')
        r.style.setProperty('--white-color', '#0e1c2f')
        r.style.setProperty("--text-color", "white")
    
        
    } else {
        r.style.setProperty('--main-color', '#edf2f9')
        r.style.setProperty('--secondary-color', '#f9fafd')
        r.style.setProperty('--light-gray', ' lightgray')
        r.style.setProperty('--white-color', ' white')
        r.style.setProperty("--text-color", "black")
    }


})


    


// :root {
//   --blue: #2c7be5;
//   --indigo: #727cf5;
//   --purple: #6b5eae;
//   --pink: #ff679b;
//   --red: #e63757;
//   --orange: #fd7e14;
//   --yellow: #f5803e;
//   --green: #00d27a;
//   --teal: #02a8b5;
//   --cyan: #27bcfd;
//   --white: #0e1c2f;
//   --gray: #748194;
//   --gray-dark: #b6c1d2;
//   --primary: #2c7be5;
//   --secondary: #748194;
//   --success: #00d27a;
//   --info: #27bcfd;
//   --warning: #f5803e;
//   --danger: #e63757;
//   --light: #132238;
//   --dark: #f9fafd;