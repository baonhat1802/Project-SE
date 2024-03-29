import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Bold Locks",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
      isEmployee: false,
      isSuspened: false,
    },
    {
      name: "John Employee",
      email: "emp@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      isEmployee: true,
      isSuspened: false,
    },
    {
      name: "Italic Locks",
      email: "admin2@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
      isEmployee: false,
      isSuspened: false,
    },
    {
      name: "Robussy",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      isEmployee: false,
      isSuspened: false,
    },
    {
      name: "Sugon deez",
      email: "ligma@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      isEmployee: false,
      isSuspended: true,
    },
  ],
  products: [
    {
      // https://www.bachhoaxanh.com/rau-sach/tia-to-goi-100g?preFreshType=preorder
      name: "Tía tô gói 100g",
      slug: "tia-to",
      category: "Rau",
      image:
        "https://cdn.tgdd.vn/Products/Images/8820/299255/bhx/tia-to-goi-100g-202212090843354492.jpg", // 679px × 829px
      price: 3,
      countInStock: 1,
      brand: "Việt Nam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Tía tô là một loại rau ăn kèm với các món ăn của người Việt. Vị cay cay, chát nhẹ của loại rau này được rất nhiều người yêu thích. Ngoài là một loại thực phẩm thì tía tô còn có thể hỗ trợ điều vị một số bệnh như: giúp đầu óc tỉnh táo, giảm stress, giảm đau kháng viêm....",
    },
    {
      // _id: '2',
      name: "Rau thơm các loại gói 200g",
      slug: "rau-thom",
      category: "Rau",
      image:
        "https://cdn.tgdd.vn/Products/Images/8820/271489/bhx/rau-thom-cac-loai-goi-200g-202205190840079141.jpg",
      price: 2,
      countInStock: 0,
      brand: "Việt Nam",
      rating: 4.0,
      numReviews: 10,
      description:
        "Rau thơm các loại tại Bách hoá XANH bao gồm rau rau diếp cá, rau quế, rau tía tô, rau húng,... Đây là loại rau thơm không thể thiếu giúp tạo thêm hương vị cho các món ăn như bánh xèo, bánh khọt, bánh ướt,... Rau thơm tại Bách hoá XANH tươi ngon, xanh mơn mởn.",
    },
    {
      // https://www.bachhoaxanh.com/rau-sach/rau-muong-tuoi-xanh-4kfarm-goi-500g
      name: "Rau muống tươi xanh gói 500g",
      slug: "rau-muong",
      category: "Rau",
      image:
        "https://cdn.tgdd.vn/Products/Images/8820/267916/bhx/rau-muong-tuoi-xanh-4kfarm-goi-500g-202112310902459201.jpg",
      price: 5,
      countInStock: 15,
      brand: "Việt Nam",
      rating: 4.5,
      numReviews: 14,
      description:
        "Rau muống là loại rau phổ biến và ưa chuộng trong bữa ăn gia đình vì có vị ngọt, tính mát và chứa một lượng lớn vitamin A, C, các chất dinh dưỡng và đặc biệt là hàm lượng chất sắt dồi dào.",
    },
    {
      // _id: '4',
      // https://www.bachhoaxanh.com/rau-sach/xa-lach-lo-lo-xanh-goi-500g?preFreshType=preorder
      name: "Xà lách lô lô xanh",
      slug: "xa-lach",
      category: "Rau",
      image:
        "https://cdn.tgdd.vn/Products/Images/8820/271485/bhx/xa-lach-lo-lo-xanh-goi-500g-202211220937160621.jpg",
      price: 10,
      countInStock: 5,
      brand: "Lâm Đồng",
      rating: 4.5,
      numReviews: 10,
      description:
        "Rau xà lách lô lô xanh được trồng tại Lâm Đồng và đóng gói theo những tiêu chuẩn nghiêm ngặt, bảo đảm các tiêu chuẩn xanh - sach. Xà lách lô lô nhiều chất xơ, hàm lượng dinh dưỡng cao, vị ngọt, giòn nên thường dùng làm rau ăn kèm cho các món cuốn",
    },
    {
      // https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/tao-fuji-mini-new-zealand-hop-1kg-8-10-trai
      name: "Táo fuji mini New Zealand hộp 1kg (8 - 10 trái)",
      slug: "tao-dai",
      category: "Trái cây",
      image:
        "https://cdn.tgdd.vn/Products/Images/8788/296231/bhx/tao-fuji-mini-new-zealand-hop-1kg-8-10-trai-202210290835060876.jpg",
      price: 10,
      countInStock: 5,
      brand: "New Zealand",
      rating: 4.5,
      numReviews: 10,
      description:
        "Loại trái cây nhập khẩu từ New Zealand ngọt thanh nhiều nước và có hương thơm đặc trưng quyến rũ. Táo Fuji mini giàu chất xơ, kẽm và vitamin C, B1, B2, tốt cho người muốn cải thiện hệ tiêu hoá,... Táo ngọt, giòn nhất khi chín sáng, màu đậm, vỏ cứng không bị mềm.",
    },
    {
      // https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/buoi-da-xanh-tui-1-trai
      name: "Bưởi da xanh trái từ 1.7kg trở lên",
      slug: "buoi-da-xanh",
      category: "Trái cây",
      image:
        "https://cdn.tgdd.vn/Products/Images/8788/271694/bhx/buoi-da-xanh-trai-tu-17kg-tro-len-202211160927469440.jpg",
      price: 30,
      countInStock: 5,
      brand: "Bến Tre",
      rating: 4.5,
      numReviews: 10,
      description:
        "Bưởi Da xanh là trái cây đặc sản nổi tiếng của Việt Nam. Bưởi da xanh có đặc điểm vỏ có màu xanh đến xanh hơi vàng khi chín.Tép bưởi màu hồng đỏ, vị ngọt thanh, màu sắc đẹp mắt, là một trong những loại trái cây cực tốt cho sức khoẻ với nhiều công dụng thần kỳ khác nhau đã được khoa học chứng minh.",
    },
    {
      // https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/tao-fuji-mini-new-zealand-hop-1kg-8-10-trai
      name: "Lê - ngọt (Singo) Trung Quốc thùng 13.5kg",
      slug: "le-singo",
      category: "Trái cây",
      image:
        "https://cdn.tgdd.vn/Products/Images/8788/294604/bhx/le-ngot-singo-trung-quoc-thung-135kg-202211102044410677.jpg",
      price: 50,
      countInStock: 5,
      brand: "New Zealand",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/chuoi-gia-giong-nam-my-tui-1kg?preFreshType=preorder
      name: "Chuối già giống Nam Mỹ hộp 1kg (6-7 trái)",
      slug: "chuoi",
      category: "Trái cây",
      image:
        "https://cdn.tgdd.vn/Products/Images/8788/272140/bhx/chuoi-gia-giong-nam-my-thung-1kg-6-7-trai-202212060835088317.jpg",
      price: 15,
      countInStock: 5,
      brand: "Nam Mỹ",
      rating: 4.5,
      numReviews: 10,
      description:
        "Loại chuối già được nhiều khách hàng ưa chuộng. Chuối chứa nhiều chất dinh dưỡng như kali, chất xơ, vitamin,... Chuối ăn ngon nhất khi chín vàng, trên vỏ bắt đầu có đốm nâu, khi đó chuối sẽ rất ngọt...Cam kết đúng khối lượng, bao bì kín đáo, an toàn và bảo đảm hợp vệ sinh.",
    },
    {
      // https://www.bachhoaxanh.com/trai-cay-tuoi-ngon/dua-luoi-tron-ruot-cam-tui-1-trai-tu-11kg-tro-len?preFreshType=preorder
      name: "Dưa lưới tròn ruột cam trái từ 1.2kg trở lên",
      slug: "dua-luoi",
      category: "Trái cây",
      image:
        "https://cdn.tgdd.vn/Products/Images/8788/273734/bhx/dua-luoi-tron-ruot-cam-trai-tu-13kg-tro-len-202205111919076870.jpg",
      price: 20,
      countInStock: 5,
      brand: "Việt nam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Là loại trái cây được rất nhiều người ưa thích vì màu sắc đẹp mắt và vị ngon ngọt, mang giá trị dinh dưỡng cao và nhiều công dụng tuyệt vời cho sức khỏe như ngừa ung thư, bổ mắt, chống viêm khớp và làm đẹp da… Dưa lưới ngon nhất khi phần cuống lõm tròn, có hình răng cưa.",
    },
    {
      // https://www.bachhoaxanh.com/cu/bau-sao-trai-500g-600g
      name: "Bầu sao trái 500g - 600g",
      slug: "bau-duoi",
      category: "Củ, quả",
      image:
        "https://cdn.tgdd.vn/Products/Images/8785/278286/bhx/bau-sao-trai-500g-600g-202205201651191146.jpg",
      price: 25,
      countInStock: 5,
      brand: "Việt nam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Bầu sao là một loại quả có thể biến thành các món ăn ngon cho gia đình. Trái bầu thon dài, bề mặt có ít lông tơ, vỏ màu xanh tươi. Bầu có thể chế biến thành các món ăn như luộc, xào, nấu canh đều rất ngon",
    },
    {
      // https://www.bachhoaxanh.com/cu/bau-sao-trai-500g-600g
      name: "Khoai tây túi 500g(3-7 củ)",
      slug: "khoai-tay",
      category: "Củ, quả",
      image:
        "https://cdn.tgdd.vn/Products/Images/8785/271510/bhx/khoai-tay-tui-500g-3-7-cu-202205260854534847.jpg",
      price: 10,
      countInStock: 5,
      brand: "Trung Quốc",
      rating: 4.5,
      numReviews: 10,
      description:
        "Khoai tây trồng tại Trung Quốc đã quá quen thuộc với mỗi chúng ta. Loại củ này được xuất hiện thường xuyên trên mâm cơm này có rất nhiều công dụng hữu ích. Khoai tây không chỉ có thể chế biến nhiều món ăn ngon mà còn tốt cho sức khỏe, làm đẹp hiệu quả mà còn có rất nhiều tác dụng bổ ích khác.",
    },
    {
      // https://www.bachhoaxanh.com/cu/bau-sao-trai-500g-600g
      name: "Khoai lang Nhật xuất khẩu (thùng 5kg)",
      slug: "khoai-lang",
      category: "Củ, quả",
      image:
        "https://cdn.tgdd.vn/Products/Images/8785/275443/bhx/khoai-lang-nhat-loai-dac-biet-thung-5kg-202203301106501498.jpg",
      price: 20,
      countInStock: 5,
      brand: "Nhật bản",
      rating: 4.5,
      numReviews: 10,
      description:
        "Khoai lang Nhật xuất khẩu siêu ngọt, siêu dẻo được chọn từ những củ khoai lang to, chất lượng nhất. Loại củ này có vị ngọt ngào như mật, tan tan trên đầu lưỡi, ngon nhất là khi được nướng lên trên một bếp than đổ hồng Khoai lang Nhật chứa nhiều vitamin A, B, C và nhiều khoáng chất cần thiết.",
    },
    {
      // https://www.bachhoaxanh.com/cu/bi-do-tron-vi-300g
      name: "Bí đỏ tròn túi 500g",
      slug: "bi-do",
      category: "Củ, quả",
      image:
        "https://cdn.tgdd.vn/Products/Images/8785/226885/bhx/bi-do-tron-tui-500g-202205201646498041.jpg",
      price: 4,
      countInStock: 5,
      brand: "Trung Quốc",
      rating: 4.5,
      numReviews: 10,
      description:
        "Bí đỏ tròn bùi ngậy, thơm ngon và bảo quản theo tiêu chuẩn nghiêm ngặt để giữ được độ tươi ngon của thực phẩm. Sự kết hợp giữa bí đỏ béo bùi với xương heo ngọt, canh bí đỏ xương heo luôn là sự lựa chọn tuyệt vời cho mâm cơm mỗi ngày của bạn.",
    },
  ],
};
export default data;
