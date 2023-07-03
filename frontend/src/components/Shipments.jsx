import PropTypes from 'prop-types';
import ShipmentCard from './ShipmentCard';

const Shipments = ({
  shipments,
  displayPending,
  displayDelivered,
  displayCancelled,
}) => {
  let filteredShipments = displayPending
    ? shipments.filter(shipment => shipment.shipment_status === 'pending')
    : displayDelivered ? shipments.filter(shipment => shipment.shipment_status === 'delivered')
      : displayCancelled ? shipments.filter(shipment => shipment.shipment_status === 'cancelled')
        : shipments
  if (!displayCancelled && displayPending && displayDelivered) filteredShipments = shipments
  return (
    <div className='flex gap-8 m-4 flex-wrap ml-[20rem]'>
      {filteredShipments.map((shipment) => (
        <ShipmentCard
          key={shipment.tracking_id}
          details={shipment.shipment_details}
          status={shipment.shipment_status}
          id={shipment.tracking_id}
          pending={shipment.shipment_status === 'pending'}
          delivered={shipment.shipment_status === 'delivered'}
          cancelled={shipment.shipment_status === 'cancelled'}
        />
      ))}
    </div>
  );
};

Shipments.propTypes = {
  shipments: PropTypes.arrayOf(
    PropTypes.shape({
      shipment_details: PropTypes.string.isRequired,
      shipment_status: PropTypes.string.isRequired,
      tracking_id: PropTypes.number.isRequired,
      order_id: PropTypes.number.isRequired,
      customer_id: PropTypes.number.isRequired,
      estimated_time_of_arrival: PropTypes.string.isRequired,
    }).isRequired,
  ),
  displayPending: PropTypes.bool.isRequired,
  displayDelivered: PropTypes.bool.isRequired,
  displayCancelled: PropTypes.bool.isRequired,
};

export default Shipments;
