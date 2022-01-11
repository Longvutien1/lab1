const Header = {
    render() {
        return /* html */ `  
        <div>
        <div class="header-top">
          <a href=""><img class="mx-auto py-4" src="https://picsum.photos/200/100" alt=""></a>
        </div>
        <div class="header-main">
          <div class="menu">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li><a href="tuyen_sinh">Tuyển sinh</a></li>
              <li><a href="dao_tao">Trương trình đào tạo</a></li>
              <li ><a href="sinh_vien">Góc sinh viên</a></li>
              <li ><a href="tuyen_dung">Tuyển dụng</a></li>
            </ul>
          </div>
  
          <div class="form">
            <form action="">
              <input type="text" class="outline-none px-1">
              <input class="btn_submit " type="submit" value="Tìm kiếm">
            </form>
          </div>
        </div>
       
      </div>`;
    },
};

export default Header;