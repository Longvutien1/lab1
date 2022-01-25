import Navigo from "navigo";

import HomePage from "./pages/home";
import tuyeSinh from "./pages/tuyen_sinh";
import DaoTao from "./pages/dao_tao";
import SinhVien from "./pages/sinh_vien";
import TuyenDung from "./pages/tuyen_dung";
import detailNewPage from "./pages/detailNew";

import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";

import adminNewAdd from "./pages/admin/news/add";
import adminNewEdit from "./pages/admin/news/edit";
import adminDashBoard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },

    "/tuyen_sinh": () => {
        print(tuyeSinh);
    },

    "/dao_tao": () => {
        print(DaoTao);
    },

    "/sinh_vien": () => {
        print(SinhVien);
    },

    "/tuyen_dung": () => {
        print(TuyenDung);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(detailNewPage, id);
    },
    "/admin": () => {
        print(adminDashBoard);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(adminNewAdd);
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(adminNewEdit, id);
    },
    "/sign_in": () => {
        print(SignIn);
    },
    "/sign_up": () => {
        print(SignUp);
    },
});

router.resolve();