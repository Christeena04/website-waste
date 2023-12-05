document.addEventListener('DOMContentLoaded', function () {
    var postForm = document.getElementById('post-form');
    var postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values and create a new post element
        var postTitle = document.getElementById('post-title').value;
        var postContent = document.getElementById('post-content').value;

        var newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = '<h2>' + postTitle + '</h2><p>' + postContent + '</p>';

        // Append the new post to the posts container
        postsContainer.appendChild(newPost);

        // Clear the form
        postForm.reset();
    });
});