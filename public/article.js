document.addEventListener("DOMContentLoaded", function() {
    // Récupère l'ID de l'article à partir des paramètres de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    // Fetch l'article spécifique depuis l'API en utilisant l'ID
    fetch(`/api/articles/${articleId}`)
        .then(response => response.json())
        .then(article => {
            const articleContainer = document.getElementById("article");

            const titleElement = document.createElement("h2");
            const contentElement = document.createElement("p");

            // Remplit les éléments avec le titre et le contenu de l'article
            titleElement.textContent = article.title;

            // Remplace les sauts de ligne par des balises <br> pour conserver le formatage du texte
            const formattedContent = article.content.replace(/\n/g, '<br>');
            contentElement.innerHTML = formattedContent;

            // Ajoute les éléments au conteneur de l'article sur la page
            articleContainer.appendChild(titleElement);
            articleContainer.appendChild(contentElement);
        })
        .catch(error => console.error('Error fetching article:', error));
});
