import PropTypes from 'prop-types';
import { BiBookmark, BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const OrdersSidebarMenu = ({
  isOrderSubmenuHidden,
  toggleOrderSubmenu,
  setDisplayOrderPending,
  setDisplayOrderDelivered,
  setDisplayOrderCancelled,
  displayOrderPending,
  displayOrderDelivered,
  displayOrderCancelled
}) => (
  <div
    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer relative ${isOrderSubmenuHidden ? '' : 'open'}`}
  >
    <BiBookmark className='text-gray-200' />
    <Link to="/orders" className="text-[15px] ml-4 text-gray-200 font-bold">Orders</Link>
    <BiChevronDown className={`text-gray-200 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform ${isOrderSubmenuHidden ? '' : 'rotate-180'}`} onClick={toggleOrderSubmenu} />
    <div className={`absolute top-full left-0 mt-2 p-2 bg-gray-800 rounded-md overflow-hidden transition-all ${isOrderSubmenuHidden ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleOrderSubmenu();
          setDisplayOrderPending(false);
          setDisplayOrderCancelled(false);
          setDisplayOrderDelivered(false);
        }}
      >
        All
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleOrderSubmenu();
          setDisplayOrderPending(true);
          setDisplayOrderCancelled(false);
          setDisplayOrderDelivered(false);
        }}
      >
        Pending
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleOrderSubmenu();
          setDisplayOrderPending(false);
          setDisplayOrderCancelled(false);
          setDisplayOrderDelivered(true);
        }}
      >
        Completed
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleOrderSubmenu();
          setDisplayOrderPending(false);
          setDisplayOrderCancelled(true);
          setDisplayOrderDelivered(false);
        }}
      >
        Cancelled
      </h1>
    </div>
  </div>
);

OrdersSidebarMenu.propTypes = {
  isOrderSubmenuHidden: PropTypes.bool.isRequired,
  toggleOrderSubmenu: PropTypes.func.isRequired,
  setDisplayOrderPending: PropTypes.func.isRequired,
  setDisplayOrderDelivered: PropTypes.func.isRequired,
  setDisplayOrderCancelled: PropTypes.func.isRequired,
  displayOrderPending: PropTypes.bool.isRequired,
  displayOrderDelivered: PropTypes.bool.isRequired,
  displayOrderCancelled: PropTypes.bool.isRequired
};

export default OrdersSidebarMenu;
