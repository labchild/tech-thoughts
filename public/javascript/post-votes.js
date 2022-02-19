async function showVotesHandler(e) {
    e.preventDefault();
    console.log(e.target);
    const id = e.target.getAttribute('id');
    const voteEl = document.querySelector('#post-votes');

    if (voteEl.style.display === 'block') {
        voteEl.style.display = 'none';
    } else {
        voteEl.style.display = 'block';
        const dbPostVotes = await fetch(`/api/posts/votes/${id}`);
        console.log(dbPostVotes);

        // const votes = dbPostVotes.get({plain:true});
        // console.log(votes);
        let votes = `Liked by ${dbPostVotes.user.username}`;
        console.log(votes);
    }
};

document.querySelector('.btn-vote-count').addEventListener('click', showVotesHandler);