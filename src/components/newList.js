const NewList = {
    render() {
        const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";

        return fetch(API)
            .then((response) => response.json())
            .then((data) => /* html */ `
       
                ${data.map(
        (item) => `
                
                            <div class="col">
                                <a href="/news/${item.id}"><img class="mx-auto" src="${item.img}" alt=""></a>
                                <a href=""><h3 class="title_2">${item.title}</h3></a>
                                <p>${item.desc}</p>
                            </div>
                
                        `,
    )
        .join("")}
        `);
    },
};

export default NewList;