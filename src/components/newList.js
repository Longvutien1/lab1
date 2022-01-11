import productList from "../data";

const NewList = {
    render() {
        return /* html */ `
       
        ${productList
        .map(
            (item) => `
         
          <div class="col">
             <a href="/news/${item.id}"><img class="mx-auto" src="${item.img}" alt=""></a>
            <a href=""><h3 class="title_2">${item.title}</h3></a>
             <p>${item.noi_dung}</p>
          </div>
        
`,
        )
        .join("")}
`;
    },
};

export default NewList;