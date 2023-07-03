#!/usr/bin/env python3
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Customers(db.Model):
    __tablename__ = 'customers'

    customer_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone_number = db.Column(db.String)
    username = db.Column(db.String)
    password_hash = db.Column(db.String)

    def __init__(self, customer_id, name, email, phone_number, username, password_hash):
        self.customer_id = customer_id
        self.name = name
        self.email = email
        self.phone_number = phone_number
        self.username = username
        self.password_hash = password_hash


class Buyers(db.Model):
    __tablename__ = 'buyers'

    buyer_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'))

    def __init__(self, buyer_id, customer_id):
        self.buyer_id = buyer_id
        self.customer_id = customer_id


class Sellers(db.Model):
    __tablename__ = 'sellers'

    seller_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'))

    def __init__(self, seller_id, customer_id):
        self.seller_id = seller_id
        self.customer_id = customer_id


class Orders(db.Model):
    __tablename__ = 'orders'

    order_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'))
    order_details = db.Column(db.String)
    order_status = db.Column(db.String)

    def __init__(self, order_id, customer_id, order_details, order_status):
        self.order_id = order_id
        self.customer_id = customer_id
        self.order_details = order_details
        self.order_status = order_status


class Shipments(db.Model):
    __tablename__ = 'shipments'

    tracking_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'))
    shipment_status = db.Column(db.String)
    shipment_details = db.Column(db.String)
    estimated_time_of_arrival = db.Column(db.String)

    def __init__(self, tracking_id, order_id, customer_id, shipment_status, shipment_details, estimated_time_of_arrival):
        self.tracking_id = tracking_id
        self.order_id = order_id
        self.customer_id = customer_id
        self.shipment_status = shipment_status
        self.shipment_details = shipment_details
        self.estimated_time_of_arrival = estimated_time_of_arrival
