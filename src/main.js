import Navigo from "navigo";

import HomePage from "./pages/home";
import tuyeSinh from "./pages/tuyen_sinh";
import DaoTao from "./pages/dao_tao";
import SinhVien from "./pages/sinh_vien";
import TuyenDung from "./pages/tuyen_dung";
import Header from "./components/header";
import Footer from "./components/footer";
import detailNewPage from "./pages/detailNew";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },

    "/tuyen_sinh": () => {
        print(tuyeSinh.render());
    },

    "/dao_tao": () => {
        print(DaoTao.render());
    },

    "/sinh_vien": () => {
        print(SinhVien.render());
    },

    "/tuyen_dung": () => {
        print(TuyenDung.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(detailNewPage.render(id));
    },
});

router.resolve();

// const showProduct = () => {
//     const productsElement = document.querySelector("#products");
//     const productsElement2 = document.querySelector("#products2");
//     if (productsElement) {
//         // Tạo ra 1 vòng lặp mới và gán vào biến result

//         const result = productList
//             .map((item) => `
//             <div class="col">
//             <a href=""><img class="mx-auto" src="${item.img}" alt=""></a>
//             <a href=""><h3 class="title_2">${item.title}</h3></a>
//             <p>${item.noi_dung}</p>
//           </div>

//                 `)
//         // Chuyển đổi sang chuỗi và nối các phần tử lại với nhau
//             .join("");
//         // Hiển thị ra ngoài màn hình
//         console.log("san pham: ", productsElement);
//         productsElement.innerHTML = result;
//         productsElement2.innerHTML = result;
//     }
// };
// showProduct();