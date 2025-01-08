import { Button, Carousel, Form, Image, Input, Row, Select } from "antd";
import { options, allConcept } from "./data";
import Footer from "./Footer";
import { useEffect, useState } from "react";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const newConcept = [
    {
      a: "assets/images/new-cars-model/ncm1.jpg",
      b: "assets/images/new-cars-model/ncm1.jpg",
    },
    {
      a: "assets/images/new-cars-model/ncm2.jpg",
      b: "assets/images/new-cars-model/ncm2.jpg",
    },
    {
      a: "assets/images/new-cars-model/ncm3.jpg",
      b: "assets/images/new-cars-model/ncm3.jpg",
    },
    {
      a: "assets/images/new-cars-model/ncm4.jpg",
      b: "assets/images/new-cars-model/ncm4.jpg",
    },
  ];

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const res = await fetch("https://sl-studio-be.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log("🚀 ~ onFinish ~ res:", res)
  };

  return (
    <div className="App">
      <section id="home" class="welcome-hero">
        <div className={`top-area`}>
          <div class="header-area">
            <nav
              class={`navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy ${
                isSticky ? "sticked" : ""
              }`}
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div class="container">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="index.html">
                    sl studio<span></span>
                  </a>
                </div>

                <div
                  class="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    class="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li class="scroll active">
                      <a href="#home">trang chủ</a>
                    </li>
                    <li class="scroll">
                      <a href="#newconcept">concept mới</a>
                    </li>
                    <li class="dropdown close-dropdown" id="close-dropdown">
                      <a class="dropdown-toggle">Concept</a>
                      <ul
                        class="dropdown-menu-custom"
                        id="dropdown-menu-custom"
                      >
                        <li class="scroll">
                          <a href="#tetnc">Tết ngoại cảnh</a>
                        </li>
                        <li class="scroll">
                          <a href="#tetstu">Tết trong studio</a>
                        </li>
                        <li class="scroll">
                          <a href="#sinhnhat">Sinh nhật</a>
                        </li>
                        <li class="scroll">
                          <a href="#couple">Couple</a>
                        </li>
                        <li class="scroll">
                          <a href="#profile">Profile</a>
                        </li>
                        <li class="scroll">
                          <a href="#beauty">Beauty</a>
                        </li>
                        <li class="scroll">
                          <a href="#nangtho">Nàng thơ</a>
                        </li>
                        <li class="scroll">
                          <a href="#hocsinh">Học sinh</a>
                        </li>
                      </ul>
                    </li>
                    <li class="scroll">
                      <a href="#contact">Liên hệ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="container">
          <div class="welcome-hero-txt">
            <h2>chụp một bộ bất kì - tặng một bộ beauty</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section id="newconcept" class="new-concept">
        <div class="section-header">
          <h2>concept tết 2025</h2>
        </div>
        <div className="container">
          <Carousel autoplay arrows>
            {newConcept.map((e) => (
              <div className="new-concept-item">
                <Image src={e.a} height={"60%"} width={"50%"} />
                <Image src={e.b} height={"60%"} width={"50%"} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {allConcept.map((e) => (
        <section id={e.id}>
          <div class="container">
            <div class="section-header">
              <h2>{e.title}</h2>
            </div>
            <div class="featured-cars-content">
              <div id="photo-gallery-tet-nc" class="photo-gallery">
                {e.img.map((photo) => (
                  <Image src={photo} className="gallery-item" />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="register" class="register">
        <div className="container">
          <div class="section-header">
            <h2>đăng kí tư vấn</h2>
          </div>
          <div className="register-content">
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Form.Item
                name="concept"
                label="Concept"
                rules={[{ required: true, message: "Chưa chọn concept" }]}
              >
                <Select
                  placeholder="Chọn concept"
                  allowClear
                  options={options}
                />
              </Form.Item>
              <Form.Item
                name="fullname"
                label="Họ tên"
                rules={[{ required: true, message: "Chưa điền họ tên" }]}
              >
                <Input placeholder="00000000000" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[{ required: true, message: "Chưa điền số điện thoại" }]}
              >
                <Input placeholder="Nguyễn Văn A" />
              </Form.Item>
              <Form.Item
                name="time"
                label="Thời gian"
                rules={[{ required: true, message: "Chưa điền thời gian" }]}
              >
                <Input placeholder="08h30 - 01/01/2025" />
              </Form.Item>

              <Row justify={"center"}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-register"
                >
                  Đăng kí tư vấn
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
