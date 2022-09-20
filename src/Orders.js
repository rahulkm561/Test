import React, { Component } from 'react';
import "./Orders.css";

class Orders extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      isOrderCompleted: false,
      orders: [
        {
          id: 1,
          name: "Car 1",
          img: "./images/car1.jpg",
          yearInsured: 4,
          address: "UK",
          vehicalNo: "UK-102K",
          vaildTill: "2026",
          primiumCost: 150,
        },
        {
          id: 2,
          name: "Car 2",
          img: "./images/car2.jpg",
          yearInsured: 5,
          address: "UK",
          vehicalNo: "UK-106K",
          vaildTill: "2027",
          primiumCost: 250,
        },
        {
          id: 3,
          name: "Car 3",
          img: "./images/car3.jpg",
          yearInsured: 3,
          address: "UK",
          vehicalNo: "UK-146K",
          vaildTill: "2024",
          primiumCost: 120,
        },
        {
          id: 4,
          name: "Car 4",
          img: "./images/car1.jpg",
          yearInsured: 2,
          address: "UK",
          vehicalNo: "UK-154K",
          vaildTill: "2024",
          primiumCost: 100,
        },
      ],
      totalPayment: 0,
      vehicalSelected: ''
    };
    this.updateQty = this.updateQty.bind(this);
    this.orderCompleted = this.orderCompleted.bind(this);
  }

  updateQty = (index, type) => {
    if (type == "Minus" && this.state.orders[index]["yearInsured"] > 0) {}
      this.state.orders[index]["yearInsured"] -= 1;
    if (type == "Plus") this.state.orders[index]["yearInsured"] += 1;

    this.setState({
      orders : this.state.orders
    })
  };

  orderCompleted = (number, cost) => {
    this.setState({
      isOrderCompleted: true,
      vehicalSelected: number,
      totalPayment: cost
    });
    alert("Your order is successfully complete.");
  };

  render() {
    if (!this.state.isOrderCompleted) {
      return (
        <div className="container-fluid" id="instanda-site-layout">
          <h2>Orders</h2>
          {this.state.orders.map((order, i) => {
            return (
              <div className="card">
                <img
                  className="card-img-top"
                  src={order.img}
                  alt={order.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                  <ul className="card-list">
                    <li>
                      <span>
                        <b>Location:</b>
                      </span>
                      <span>{order.address}</span>
                    </li>
                    <li>
                      <span>
                        <b>Vehical No:</b>
                      </span>
                      <span>{order.vehicalNo}</span>
                    </li>
                    <li>
                      <span>
                        <b>Vaild Till:</b>
                      </span>
                      <span>{order.vaildTill}</span>
                    </li>
                  </ul>
                  <div className="qty">
                    <h5>
                      <b>Year Insured:</b>
                    </h5>
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-danger btn-number"
                          data-type="minus"
                          data-field="quant[2]"
                          onClick={() => this.updateQty(i, "Minus")}
                        >
                          <span className="glyphicon glyphicon-minus"></span>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quant[2]"
                        className="form-control input-number"
                        value={order.yearInsured}
                        min="1"
                        max="100"
                      />
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-success btn-number"
                          data-type="plus"
                          data-field="quant[2]"
                          onClick={() => this.updateQty(i, "Plus")}
                        >
                          <span className="glyphicon glyphicon-plus"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={e => this.orderCompleted(order.vehicalNo, order.primiumCost)}
                  >
                    Get Insured - ${order.primiumCost}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div className="container-fluid" id="instanda-site-layout">
        <div className='text-center order-success'>
        <h6>Your order is successfully completed and received payment {this.state.totalPayment} for Vehical No: {this.state.vehicalSelected}  </h6>
         <p> Thanks Mr. John Deo for choosing Admiral.</p>
        </div>
        
      </div>;
    }
  }
}

export default Orders;
