import Navigo from "navigo";

import HomePage from "./pages/home";
import tuyeSinh from "./pages/tuyen_sinh";
import DaoTao from "./pages/dao_tao";
import SinhVien from "./pages/sinh_vien";
import TuyenDung from "./pages/tuyen_dung";
import detailNewPage from "./pages/detailNew";

import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";

import adminNewAdd from "./admin/news/add";
import adminNewEdit from "./admin/news/edit";
import adminDashBoard from "./admin/dashboard";
import AdminNewsPage from "./admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
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
    "/admin": () => {
        print(adminDashBoard.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        print(adminNewAdd.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(adminNewEdit.render(id));
    },
    "/sign_in": () => {
        print(SignIn.render());
    },
    "/sign_up": () => {
        print(SignUp.render());
    },
});

router.resolve();