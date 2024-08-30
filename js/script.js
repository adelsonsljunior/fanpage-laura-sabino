const items = [
    {
        title: "YouTube",
        imgSrc: "./images/youtube.png",
        link: "https://www.youtube.com/@mylaura_m"
    },
    {
        title: "Instagram",
        imgSrc: "./images/instagram.jpg",
        link: "https://www.instagram.com/mylaura_m"
    },
    {
        title: "Apoia.se",
        imgSrc: "./images/apoiase.png",
        link: "https://apoia.se/canallaurasabino"
    },
    {
        title: "Twitter",
        imgSrc: "./images/twitter.png",
        link: "https://www.twitter.com/mylaura_m"
    },
    {
        title: "Twitch",
        imgSrc: "./images/twitch.png",
        link: "https://www.twitch.tv/mylaura_m?lang=pt-br"
    }
];


/*
<div>
<a href="https://www.instagram.com/mylaura_m/" target="_blank">
    <div class="link">
        <img src="./images/redes.jpg" alt="photo_instagram">
        <div class="detalhe">
            <h1>Instagram</h1>
        </div>
    </div>
</a>
</div>
*/

function replicateDivs() {
    const container = document.getElementById('lista');

    items.forEach(item => {

        const div = document.createElement('div');
        const link = document.createElement('a');
        const linkDiv = document.createElement('div');
        const img = document.createElement('img');
        const detalheDiv = document.createElement('div');
        const h1 = document.createElement('h1');

        link.href = item.link;
        link.target = "_blank";

        linkDiv.className = "link";

        img.src = item.imgSrc;
        //img.alt = `photo_${item.title.toLowerCase()}`;

        detalheDiv.className = "detalhe";
        h1.textContent = item.title;

        detalheDiv.appendChild(h1);
        linkDiv.appendChild(img);
        linkDiv.appendChild(detalheDiv);
        link.appendChild(linkDiv);
        div.appendChild(link);

        container.appendChild(div);
    });
}

replicateDivs();

