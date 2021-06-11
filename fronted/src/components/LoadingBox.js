import React from "react";

export default function LoadingBox() {
  const style = {
    circle: {
      marginTop: "35vh",
      textAlign: "center",
      color: "#39a9cb",
    },
    loaderSize: {
      fontSize: "5rem",
    },
    loaderHelper: {
      fontSize: "3rem",
    },
  };
  return (
    <div style={style.circle} className="circle1" className="loading">
      <i style={style.loaderSize} className="fas fa-spinner fa-pulse"></i>
      <br /> <span style={style.loaderHelper}>Hold it🖐here..</span>
    </div>
  );
}
