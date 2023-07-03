import PropTypes from 'prop-types';

const Customers = ({ customers }) => {
  console.log(customers);
  return (
    <div className="ml-[20rem]">
      Customers
    </div>
  )
};

Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    customer_id: PropTypes.number.isRequired,
  }).isRequired
  ).isRequired
};

export default Customers
