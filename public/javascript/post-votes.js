async function showVotesHandler(e) {
    // const id = e.target.getAttribute('id');
    // const voteEl = e.target.sibling;
    // select grandparent as post meta
    const postMetaEl = e.target.parentElement.parentElement;
    // select second child as vote el
    const voteEl = postMetaEl.querySelector('.post-votes');

    if (voteEl.style.display === 'none') {
        voteEl.style.display = 'block';
    } else {
        voteEl.style.display = 'none';
    }
};

document.querySelector('.btn-vote-count').addEventListener('click', showVotesHandler);