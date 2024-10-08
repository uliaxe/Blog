document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    fetch(`/api/articles/${articleId}`)
        .then(response => response.json())
        .then(article => {
            const articleContainer = document.getElementById("article");

            const titleElement = document.createElement("h2");
            const contentElement = document.createElement("p");

            titleElement.textContent = article.title;

            const formattedContent = article.content.replace(/\n/g, '<br>');
            contentElement.innerHTML = formattedContent;

            articleContainer.appendChild(titleElement);
            articleContainer.appendChild(contentElement);
        })
        .catch(error => console.error('Error fetching article:', error));
});
