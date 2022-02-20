async function editPostFormHandler(e) {
    e.preventDefault();
    const formEl = e.target;
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const post_title = formEl.querySelector('#edit-title').value.trim();
    const post_body = formEl.querySelector('#edit-body').value.trim();
    
    if (post_title && post_body) {
        // send updated post to database, await response
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                post_title,
                post_body
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        console.log(response);
        // send back to dashboard or alert to error
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(`${response.statusText}
            Something went wrong...`);
        }
    }
};

async function deletePostHandler(e) {
    e.preventDefault();
};

document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler);
document.querySelector('.btn-delete').addEventListener('click', deletePostHandler);