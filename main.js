import productList from "./data.js";

const showProduct = () => {
    const productsElement = document.querySelector("#products");
    const productsElement2 = document.querySelector("#products2");
    if (productsElement) {
        // Tạo ra 1 vòng lặp mới và gán vào biến result

        const result = productList
            .map((item) => `
            <div class="col">
            <a href=""><img class="mx-auto" src="${item.img}" alt=""></a>
            <a href=""><h3 class="title_2">${item.title}</h3></a>
            <p>${item.noi_dung}</p>
          </div>

                `)
        // Chuyển đổi sang chuỗi và nối các phần tử lại với nhau
            .join("");
        // Hiển thị ra ngoài màn hình
        console.log("san pham: ", productsElement);
        productsElement.innerHTML = result;
        productsElement2.innerHTML = result;
    }
};
showProduct();