import PropTypes from 'prop-types';
import CustomerCard from './CustomerCard';

const Customers = ({ customers }) => {
  return (
    <div className="flex gap-8 m-4 flex-wrap ml-[20rem]">
      {customers.map(customer => (
        <CustomerCard
          key={customer.customer_id}
          name={customer.name}
          email={customer.email}
        />
      ))}
    </div>
  )
};

Customers.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    customer_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired
};

export default Customers
