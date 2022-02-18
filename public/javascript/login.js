async function loginFormHandler(e) {
    e.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // success sends to homepage, bad data sends alert
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Incorrect email or password');
        }
    }
};

async function signupFormHandler(e) {
    e.preventDefault();

    console.log(e.target);
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);