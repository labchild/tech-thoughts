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
    } else {
        alert('Please enter your email and password.')
    }
};

async function signupFormHandler(e) {
    e.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        if (response.ok) {
            alert('Thanks for signing up! Login to start sharing your thoughts.');
            document.location.reload();
        } else {
            alert(`${response.statusText}
            Username or email is already being used for an account.`);
        }
    } else {
        alert('Enter a username, email, and password to sign up for an account.');
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);