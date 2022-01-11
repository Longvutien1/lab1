import NewList from "../components/newList";

const HomePage = {
    render() {
        return /* html */`
        <div class="banner my-2">
        <a href=""><img src="https://picsum.photos/2000/400" alt=""></a>
         <div class="row">${NewList.render()}</div>
      </div>
      
`;
    },
};

export default HomePage;