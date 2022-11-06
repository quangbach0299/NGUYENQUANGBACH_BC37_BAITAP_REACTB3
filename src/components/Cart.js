import React, { Component } from "react";

export default class Cart extends Component {
  mapTBody = () => {
    return this.props.cart.map((item) => {
      return (
        <tr key={item.prod.id}>
          <td style={{ paddingLeft: "50px" }}>{item.prod.id}</td>
          <td>
            <img
              style={{ width: "150px", height: "150px" }}
              src={item.prod.image}
              alt=""
            />
          </td>
          <td>{item.prod.name}</td>
          <td className="d-flex align-items-baseline">
            <button
              onClick={() => {
                this.props.changeQuantity(item.prod, -1);
              }}
              className="btn"
            >
              <i className="fa-solid fa-minus fa-sm"></i>
            </button>
            <p>{item.quantity}</p>
            <button className="btn">
              <i
                onClick={() => {
                  this.props.changeQuantity(item.prod, 1);
                }}
                className="fa-solid fa-plus fa-sm"
              ></i>
            </button>
          </td>
          <td>{item.prod.price} $</td>
          <td>{item.prod.price * item.quantity} $</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.removeProduct(item.prod.id);
              }}
            >
              <i className="fa-solid fa-trash-can fa-lg"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="cart  "
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="cart_content bg-light   "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "50%",
            height: "50%",
            overflowY: "scroll",
          }}
        >
          <h3 className="text-center">Giỏ hàng</h3>
          <button
            className="btn btn-info"
            style={{
              position: "absolute",
              padding: "5px 12px",
              marginBottom: "5px",
              top: "10px",
              right: "10px",
            }}
            onClick={this.props.hideCart}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>{this.mapTBody()}</tbody>
            <tfoot>
              <tr>
                <td>Tổng tiền: {this.props.caclcTotalPrice()} $</td>
                <td className="text-center" colSpan="5">
                  <button
                    onClick={this.props.checkOutCart}
                    className="btn btn-dark w-100"
                  >
                    Check Out
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
