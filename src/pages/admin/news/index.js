import { remove } from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";
import adminList from "./list";

const AdminNewsPage = {
    async render() {
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Quản lý tin tức
                    </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news/add" class="sm:ml-3">
                        <button type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm mới
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </header>
            <main>
                ${await adminList.render()}
            </main>
        </div>
    
                    `;
    },

    afterRender() {
        // console.log(2);
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((btn) => {
            const { id } = btn.dataset;
            // console.log(id);
            btn.addEventListener("click", () => {
                // console.log(id);
                const confirm = window.confirm("Bạn có muốn xóa bài viết này không ?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        alert("Bạn đã xóa thành công");
                    });
                }
            });
        });
    },
};
export default AdminNewsPage;