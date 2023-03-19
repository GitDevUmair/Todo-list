import React from "react";

const footer = () => {
  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30px",
        }}
      >
        <p className="text-center">Copyright &copy; MyTodoList.com</p>
      </footer>
    </>
  );
};

export default footer;
