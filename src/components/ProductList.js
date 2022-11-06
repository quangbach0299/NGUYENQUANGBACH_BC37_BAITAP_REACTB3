import React, { Component } from "react";
import Data from "../data.json";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import styles from "./ProductList.module.css";

export default class ProductList extends Component {
  renderProductItem = () => {
    const html = Data.map((item) => {
      return (
        <ProductItem
          key={item.id}
          item={item}
          showDetail={this.showDetail}
          doBothJob={this.doBothJob}
          addToCart={this.addToCart}
        ></ProductItem>
      );
    });
    return html;
  };

  state = {
    mDetail: false,
    mCart: false,
    selectedItem: null,
    cart: [],
  };

  doBothJob = (dataFromChild) => {
    this.showDetail();
    this.setSelectedItem(dataFromChild);
  };

  setSelectedItem = (dataFromChild) => {
    this.setState({ selectedItem: dataFromChild }, () => {
      // console.log(this.state.selectedItem);
    });
  };

  showDetail = () => {
    this.setState({ mDetail: true });
  };

  hideDetail = () => {
    this.setState({ mDetail: false });
  };

  showCart = () => {
    this.setState({ mCart: true });
  };

  hideCart = () => {
    this.setState({ mCart: false });
  };

  addToCart = (prod) => {
    let cloneCart = [...this.state.cart];
    const cartItem = { prod: prod, quantity: 1 };
    const foundItem = cloneCart.find((item) => prod.id === item.prod.id);
    //Đây là dạng địa chỉ nên sẽ thông với object trong mảng cloneCart
    // console.log(foundItem);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }
    this.setState({ cart: cloneCart }, () => {
      console.log(this.state.cart);
    });
  };

  calcProduct = () => {
    return this.state.cart.reduce((totalProduct, item) => {
      return totalProduct + item.quantity;
    }, 0);
  };

  caclcTotalPrice = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity * item.prod.quantity;
    }, 0);
  };

  removeProduct = (prodID) => {
    let cloneCart = [...this.state.cart];
    console.log(prodID);
    const foundIndex = cloneCart.findIndex((item) => item.prod.id === prodID);
    cloneCart.splice(foundIndex, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  changeQuantity = (prod, size) => {
    let cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => item.prod.id === prod.id);
    console.log(foundItem);
    foundItem.quantity += size;
    this.setState({
      cart: cloneCart,
    });
  };

  checkOutCart = () => {
    let cloneCart = [...this.state.cart];
    cloneCart = [];
    alert("Bạn đã thanh toán thành công");
    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    return (
      <div style={{ padding: "15px" }}>
        <h3 className="text-end">
          Giỏ hàng ({this.calcProduct()})
          <button
            style={{ border: "none" }}
            className="btn btn-danger ms-1"
            onClick={this.showCart}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </h3>
        <br />
        <div className={styles.row}>{this.renderProductItem()}</div>
        {this.state.mDetail && (
          <ProductDetail
            hideDetail={this.hideDetail}
            setSelectedItem={this.state.selectedItem}
          ></ProductDetail>
        )}
        {this.state.mCart ? (
          <Cart
            cart={this.state.cart}
            hideCart={this.hideCart}
            removeProduct={this.removeProduct}
            changeQuantity={this.changeQuantity}
            caclcTotalPrice={this.caclcTotalPrice}
            checkOutCart={this.checkOutCart}
          ></Cart>
        ) : null}
      </div>
    );
  }
}
