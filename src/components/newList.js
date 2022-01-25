import { getAllPost } from "../api/posts";

const NewList = {

    async render() {
        const { data } = await getAllPost();
        console.log(data);
        return /* html */ `
                ${data.map(
        (item) => `
                
                            <div class="col">
                                <a href="/news/${item.id}"><img class="mx-auto" src="${item.img}" alt=""></a>
                                <a href=""><h3 class="title_2">${item.title}</h3></a>
                                <p>${item.desc}</p>
                            </div>
                
                        `,
    )
        .join("")}`;
    },
};

export default NewList;