import PropTypes from 'prop-types';
import { BiBookmark, BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ShipmentsSidebarMenu = ({
  isShipmentSubmenuHidden,
  toggleShipmentSubmenu,
  setDisplayPending,
  setDisplayDelivered,
  setDisplayCancelled,
  displayPending,
  displayDelivered,
  displayCancelled
}) => (
  <div
    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer relative ${isShipmentSubmenuHidden ? '' : 'open'}`}
  >
    <BiBookmark className='text-gray-200' />
    <Link to="/shipments" className="text-[15px] ml-4 text-gray-200 font-bold">Shipments</Link>
    <BiChevronDown className={`text-gray-200 absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform ${isShipmentSubmenuHidden ? '' : 'rotate-180'}`} onClick={toggleShipmentSubmenu} />
    <div className={`absolute top-full left-0 mt-2 p-2 bg-gray-800 rounded-md overflow-hidden transition-all ${isShipmentSubmenuHidden ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleShipmentSubmenu()
          setDisplayPending(displayPending = false)
          setDisplayCancelled(displayCancelled = false)
          setDisplayDelivered(displayDelivered = false)
        }}
      >
        All
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleShipmentSubmenu()
          setDisplayPending(displayPending = true)
          setDisplayCancelled(displayCancelled = false)
          setDisplayDelivered(displayDelivered = false)
        }}
      >
        Pending
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleShipmentSubmenu()
          setDisplayPending(displayPending = false)
          setDisplayCancelled(displayCancelled = false)
          setDisplayDelivered(displayDelivered = true)
        }}
      >
        Delivered
      </h1>
      <h1
        className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 text-gray-200"
        onClick={() => {
          toggleShipmentSubmenu()
          setDisplayPending(displayPending = false)
          setDisplayCancelled(displayCancelled = true)
          setDisplayDelivered(displayDelivered = false)
        }}
      >
        Cancelled
      </h1>
    </div>
  </div>
);

ShipmentsSidebarMenu.propTypes = {
  isShipmentSubmenuHidden: PropTypes.bool.isRequired,
  toggleShipmentSubmenu: PropTypes.func.isRequired,
  setDisplayPending: PropTypes.func.isRequired,
  setDisplayDelivered: PropTypes.func.isRequired,
  setDisplayCancelled: PropTypes.func.isRequired,
  displayPending: PropTypes.bool.isRequired,
  displayDelivered: PropTypes.bool.isRequired,
  displayCancelled: PropTypes.bool.isRequired
};

export default ShipmentsSidebarMenu;