import PropTypes from 'prop-types';
import OrderCard from './OrderCard';

const Orders = ({
  orders,
  displayOrderPending,
  displayOrderDelivered,
  displayOrderCancelled,
}) => {
  let filteredOrders = [];

  if (displayOrderPending) {
    filteredOrders = orders.filter((order) => order.order_status === 'pending');
  } else if (displayOrderDelivered) {
    filteredOrders = orders.filter((order) => order.order_status === 'completed');
  } else if (displayOrderCancelled) {
    filteredOrders = orders.filter((order) => order.order_status === 'cancelled');
  } else {
    filteredOrders = orders;
  }

  return (
    <div className='flex gap-8 m-4 flex-wrap ml-[20rem]'>
      {filteredOrders.map((order) => (
        <OrderCard
          key={order.order_id}
          details={order.order_details}
          status={order.order_status}
          id={order.order_id}
          pending={order.order_status === 'pending'}
          completed={order.order_status === 'completed'}
          cancelled={order.order_status === 'cancelled'}
        />
      ))}
    </div>
  );
};


Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      order_details: PropTypes.string.isRequired,
      order_status: PropTypes.string.isRequired,
      order_id: PropTypes.number.isRequired,
      customer_id: PropTypes.number.isRequired,
    }).isRequired
  ),
  displayOrderPending: PropTypes.bool.isRequired,
  displayOrderDelivered: PropTypes.bool.isRequired,
  displayOrderCancelled: PropTypes.bool.isRequired,
};

export default Orders;
