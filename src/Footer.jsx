import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopButton = document.querySelector(".return-to-top");
      if (window.scrollY > 300) {
        scrollTopButton.style.display = "flex";
      } else {
        scrollTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Welcome animation support
  useEffect(() => {
    const welcomeTexts = document.querySelectorAll(
      ".welcome-hero-txt h2, .welcome-hero-txt p"
    );
    const welcomeButton = document.querySelector(".welcome-hero-txt button");

    welcomeTexts.forEach((el) => {
      el.classList.add("animated", "fadeInUp");
      el.style.opacity = "0";
    });

    if (welcomeButton) {
      welcomeButton.classList.add("animated", "fadeInDown");
      welcomeButton.style.opacity = "0";
    }
  }, []);
  return (
    <footer id="contact" class="contact">
      <div class="container">
        <div class="footer-top">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <a href="#concept">
                <div class="single-footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">sl studio</a>
                  </div>
                  <div>
                    <i class="fa-solid fa-phone"> </i>
                    <a href="tel:0985162202">Hotline 1: 0985.16.2202</a>
                  </div>
                  <div>
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:0352335336">Hotline 2: 0352.335.336</a>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-sm-6" style={{ textAlign: "end" }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fslstudio.vn&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                height="120"
                width="340px"
                style={{ border: NamedNodeMap, overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.5842487959742!2d105.80751293938594!3d20.985881793616855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3a67510ce7%3A0x157589c3f9db1549!2sSL%20Studio!5e0!3m2!1svi!2s!4v1736001210304!5m2!1svi!2s"
              width="100%"
              height="225"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="row">
            <div class="col-sm-6">
              <p>&copy; copyright.designed and developed by SL Studio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-buttons">
        <a
          href="https://www.facebook.com/slstudio.vn"
          target="_blank"
          rel="noreferrer"
          className="button fb-button"
        >
          <img
            src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
            alt="Facebook"
          />
        </a>
        <a
          href="https://zalo.me/0123456789"
          target="_blank"
          rel="noreferrer"
          className="button zalo-button"
        >
          <img
            src="https://img.icons8.com/?size=100&id=NURVLTWx6O1G&format=png&color=000000"
            alt="Zalo"
          />
        </a>
        <a href="tel:0985162202" className="button phone-button">
          <img
            src="https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000"
            alt="Phone"
          />
        </a>
        <div
          className="button return-to-top"
          onClick={scrollToTop}
          style={{ display: "none" }}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
