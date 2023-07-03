#!/usr/bin/env python3
from flask import Flask, jsonify, render_template
from flask_cors import CORS
from models import Buyers, Customers, Orders, Sellers, Shipments, db

app = Flask(__name__)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Christian2002@localhost/shipment-tracker'
db.init_app(app)

CORS(app)


@app.route('/customers')
def customers():
    with app.app_context():
        customers = Customers.query.all()
        customers_list = []
        for customer in customers:
            customers_list.append(
                {'customer_id': customer.customer_id, 'name': customer.name, 'email': customer.email,
                 'phone_number': customer.phone_number, 'username': customer.username,
                 'password_hash': customer.password_hash})
        return customers_list

@app.route('/buyers')
def buyers():
    with app.app_context():
        buyers = Buyers.query.all()
        buyers_list = []
        for buyer in buyers:
            buyers_list.append({
                'buyer_id': buyer.buyer_id,
                'customer_id': buyer.customer_id
            })
        return buyers_list

@app.route('/sellers')
def sellers():
    with app.app_context():
        sellers = Sellers.query.all()
        sellers_list = []
        for seller in sellers:
            sellers_list.append({
                'seller_id': seller.seller_id,
                'customer_id': seller.customer_id
            })
        return sellers_list
    
@app.route('/orders')
def orders():
    with app.app_context():
        orders = Orders.query.all()
        orders_list = []
        for order in orders:
            orders_list.append({
                'order_id': order.order_id,
                'customer_id': order.customer_id,
                'order_details': order.order_details,
                'order_status': order.order_status
            })
        return orders_list


@app.route('/shipments')
def shipments():
    with app.app_context():
        shipments = Shipments.query.all()
        shipments_list = []
        for shipment in shipments:
            shipments_list.append({
                'tracking_id': shipment.tracking_id,
                'order_id': shipment.order_id,
                'customer_id': shipment.customer_id,
                'shipment_details': shipment.shipment_details,
                'shipment_status': shipment.shipment_status,
                'estimated_time_of_arrival': shipment.estimated_time_of_arrival,
            })
        return shipments_list


@app.route('/customers/add_customer')
def add_customer():
    pass

@app.route('buyers/add_buyer')
def add_buyer():
    pass

@app.route('/sellers/add_seller')
def add_seller():
    pass

@app.route('/orders/add_order')
def add_order():
    pass

@app.route('shipments/add_shipment')
def add_shipment():
    pass

if __name__ == '__main__':
    app.run()
