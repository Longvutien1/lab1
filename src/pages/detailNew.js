import Footer from "../components/footer";
import Header from "../components/header";
import productList from "../data";

const detailNewPage = {
    render(id) {
        const found = productList.find((element) => element.id === id);
        console.log(found);
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
        <p>ID: ${found.id}</p>
            <h1>${found.title}</h1>
            <img src="${found.img}" />
           
        </div>
        ${Footer.render()}
        `;
    },
};

export default detailNewPage;