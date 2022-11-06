import React, { Component } from "react";
import styles from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.item;
    return (
      <div className={styles.col}>
        <div className={styles.cart}>
          <div className={styles.basicInfo}>
            <div className={styles.title}>
              <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.images}>
              <img style={{ width: "100%" }} src={image} alt="" />
            </div>
            <div className={styles.addCard}>
              <button
                onClick={() => {
                  this.props.addToCart(this.props.item);
                }}
                style={{ width: "100%" }}
              >
                Thêm vào giỏ hàng{" "}
                <i className="fa-solid fa-basket-shopping"></i>
              </button>
              <br />
              <button
                onClick={() => {
                  this.props.doBothJob(this.props.item);
                }}
                style={{ width: "100%" }}
              >
                Xem chi tiết <i className="fa-solid fa-circle-info"></i>
              </button>
            </div>
          </div>
          <div className={styles.mores}>
            <div className="price text-white text-center">
              <span>Price: ${price}</span>
            </div>
            {/* <div className="quantity text-white text-center">
              <p>Quantity: {quantity}</p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
