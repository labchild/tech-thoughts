async function editPostFormHandler(e) {
    e.preventDefault();
};

async function deletePostHandler(e) {
    e.preventDefault();
};

document.querySelector('.edit-post-form').addEventListener('submit', editPostFormHandler);
document.querySelector('.btn-delete').addEventListener('click', deletePostHandler);