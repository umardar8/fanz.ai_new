import React, { useEffect, useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Layout } from "antd";
import WebHeader from "../header";
import WebFooter from "../footer";
import PrimaryButton from "../../components/button";
import zIndex from "@mui/material/styles/zIndex";
import { BsLaptop } from "react-icons/bs";
import { wishlist } from "../../assets";
import { AiOutlineClose } from "react-icons/ai";

const { Header, Footer, Content } = Layout;

const WebLayout = (props) => {
  const { children, styles, classNames } = props;
  const cursorRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (cursor) {
        const cursorWidth = cursor.offsetWidth;
        const cursorHeight = cursor.offsetHeight;
        cursor.style.transform = `translate3d(${x - cursorWidth / 2}px, ${
          y - cursorHeight / 2
        }px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout style={{ backgroundColor: "#000" }}>
      <Header
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          backgroundColor: "transparent",
        }}
        className="position-fixed fixed-top"
      >
        <WebHeader />
      </Header>
      <Content
        className={classNames}
        style={
          styles
            ? styles
            : {
                margin: 0,
                padding: 0,
                width: "100%",
                height: "auto",
                zIndex: 2,
                position: "relative",
              }
        }
      >
        {children}
      </Content>
      <div className="blob" ref={cursorRef}></div>

      <PrimaryButton
        btnStyle={{
          position: "fixed",
          bottom: "20px",
          right: "100px",
          zIndex: 5,
          fontSize: "18px",
          border: "none",
          outline: "none",
          color: "black",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "4px",
          background: "rgba(255,255,255, 0.9)",
          paddingLeft: "15px",
        }}
        onClick={handleShow}
        leftIcon={<img src={wishlist} height="22px" width="22px" />}
      />

      <PrimaryButton
        btnStyle={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          zIndex: 5,
          fontSize: "18px",
          border: "none",
          outline: "none",
          color: "black",
          cursor: "pointer",
          padding: "8px",
          borderRadius: "4px",
          background: "rgba(255,255,255, 0.9)",
          paddingLeft: "15px",
        }}
        leftIcon={<BsLaptop size={25} />}
      />

      <Footer
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      >
        <WebFooter />
      </Footer>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="text-light wishlist"
        placement="end"
      >
        <Offcanvas.Header>
          <AiOutlineClose size={20} onClick={handleClose} color="white" />
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
        </Offcanvas.Body>
      </Offcanvas>
    </Layout>
  );
};

export default WebLayout;
