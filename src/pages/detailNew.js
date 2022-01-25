import { getById } from "../api/posts";
import Footer from "../components/footer";
import Header from "../components/header";

const detailNewPage = {
    async render(id) {
        const found = await getById(id);
        const { data } = found;
        // console.log(data);
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
        <p>ID: ${data.id}</p>
            <h1>${data.title}</h1>
            <img src="${data.img}" />
           
        </div>
        ${Footer.render()}
        `;
    },
};

export default detailNewPage;