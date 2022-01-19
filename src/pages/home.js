import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
    async render() {
        return /* html */`
        ${Header.render()}
        <div class="banner ">
            <a href=""><img src="https://picsum.photos/2000/400" alt=""></a>
            <div class="row mt-8">${await NewList.render()}</div>
        </div>
        ${Footer.render()}
      
`;
    },
};

export default HomePage;