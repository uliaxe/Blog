document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/articles')
        .then(response => response.json())
        .then(articles => {
            const articlesContainer = document.getElementById("articles");
            const latestPostsContainer = document.getElementById("latest-posts");

            articles.forEach((article, index) => {
                const articleElement = document.createElement("div");
                articleElement.classList.add("col-md-4");
                articleElement.setAttribute('id', `article-${index}`); // Attribuer un ID unique à l'article

                const cardElement = document.createElement("div");
                cardElement.classList.add("card", "article-preview");

                const cardBodyElement = document.createElement("div");
                cardBodyElement.classList.add("card-body", "article-content");

                const titleElement = document.createElement("h2");
                titleElement.classList.add("card-title");
                titleElement.textContent = article.title;

                const excerptElement = document.createElement("p");
                excerptElement.classList.add("card-text");
                excerptElement.textContent = article.content.substring(0, 100) + '...'; // Aperçu du contenu

                const readMoreLink = document.createElement("a");
                readMoreLink.classList.add("btn", "btn-primary");
                readMoreLink.textContent = "Lire la suite";
                readMoreLink.href = `article.html?id=${index}`;

                cardBodyElement.appendChild(titleElement);
                cardBodyElement.appendChild(excerptElement);
                cardBodyElement.appendChild(readMoreLink);

                cardElement.appendChild(cardBodyElement);

                articleElement.appendChild(cardElement);

                // Ajoute l'article aux deux conteneurs (page d'accueil et page blog)
                if (articlesContainer) articlesContainer.appendChild(articleElement.cloneNode(true));
                if (latestPostsContainer && index < 3) latestPostsContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});
