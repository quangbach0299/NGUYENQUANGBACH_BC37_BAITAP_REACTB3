import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, image, price, description, shortDescription, quantity } =
      this.props.setSelectedItem;
    return (
      <div
        className="modal_detail "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        //bắt buộc set width height
      >
        <div
          className="modal_content w-50 bg-light p-5 "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <button
            className="btn btn-info"
            style={{
              position: "absolute",
              padding: "5px 12px",
              marginBottom: "5px",
              top: "10px",
              right: "10px",
            }}
            onClick={this.props.hideDetail}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h1 style={{ fontSize: "16px" }}>{name}</h1>
          <img src={image} style={{ height: "50%" }} alt="" />
          <p style={{ fontWeight: "bold" }}>Description: {description}</p>
          <p style={{ fontWeight: "bold" }}>
            Short Description: {shortDescription}
          </p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price} $</p>
        </div>
      </div>
    );
  }
}
