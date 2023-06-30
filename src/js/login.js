const loginFormEl = document.querySelector("form#loginForm");

const checkIfUserLoggedIn = () => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    if (userObj) {
        window.location.replace("/src/dashboard.html");
    }
};

checkIfUserLoggedIn();

const handleLoginForm = (event) => {
    event.preventDefault();
    const formData = new FormData(loginFormEl);
    const { email, password } = Object.fromEntries(formData);
    loginUser(email, password)
        .then((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            window.location.replace("/src/dashboard.html");
        })
        .catch(({ errorCode }) => {
            if (errorCode === "auth/user-not-found") {
                alert(`UserName/Password doesn't exist`);
            }

            loginFormEl.reset();
        });
};

loginFormEl.addEventListener("submit", handleLoginForm);