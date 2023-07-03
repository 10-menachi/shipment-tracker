import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { BiArrowToRight, BiHomeAlt } from "react-icons/bi";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import OrdersSidebarMenu from './OrdersSidebarMenu';
import ShipmentsSidebarMenu from './ShipmentSidebarMenu';
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";

const SideBar = ({
  setDisplayPending,
  setDisplayDelivered,
  setDisplayCancelled,
  displayPending,
  displayDelivered,
  displayCancelled,
  setDisplayOrderPending,
  setDisplayOrderDelivered,
  setDisplayOrderCancelled,
  displayOrderPending,
  displayOrderDelivered,
  displayOrderCancelled
}) => {
  const [isShipmentSubmenuHidden, setIsShipmentSubmenuHidden] = useState(true);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isOrderSubmenuHidden, setIsOrderSubmenuHidden] = useState(true);

  const toggleShipmentSubmenu = () => {
    setIsShipmentSubmenuHidden(!isShipmentSubmenuHidden);
  };

  const toggleOrderSubmenu = () => {
    setIsOrderSubmenuHidden(!isOrderSubmenuHidden)
  }

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <IoGridOutline
          className={`px-2 bg-gray-900 rounded-md ${isSidebarHidden ? "hidden" : ""
            }`}
        />
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${isSidebarHidden ? "hidden" : ""
          }`}
      >
        <SidebarHeader
          isSidebarHidden={isSidebarHidden}
          toggleSidebar={toggleSidebar}
        />
        <div className="text-gray-100 text-xl">
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <SidebarSearch />
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BiHomeAlt />
          <Link to="/" className="text-[15px] ml-4 text-gray-200 font-bold">
            Home
          </Link>
        </div>
        <ShipmentsSidebarMenu
          isShipmentSubmenuHidden={isShipmentSubmenuHidden}
          toggleShipmentSubmenu={toggleShipmentSubmenu}
          setDisplayPending={setDisplayPending}
          setDisplayDelivered={setDisplayDelivered}
          setDisplayCancelled={setDisplayCancelled}
          displayPending={displayPending}
          displayDelivered={displayDelivered}
          displayCancelled={displayCancelled}
        />
        <OrdersSidebarMenu
          isOrderSubmenuHidden={isOrderSubmenuHidden}
          toggleOrderSubmenu={toggleOrderSubmenu}
          setDisplayOrderPending={setDisplayOrderPending}
          setDisplayOrderDelivered={setDisplayOrderDelivered}
          setDisplayOrderCancelled={setDisplayOrderCancelled}
          displayOrderPending={displayOrderPending}
          displayOrderDelivered={displayOrderDelivered}
          displayOrderCancelled={displayOrderCancelled}
        />
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BiArrowToRight />
          <Link to='/customers' className="text-[15px] ml-4 text-gray-200 font-bold">
            Customers
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BiHomeAlt />
          <Link to="/" className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Customer
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BiHomeAlt />
          <Link to="/" className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Order
          </Link>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BiHomeAlt />
          <Link to="/" className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Shipment
          </Link>
        </div>
      </div>
    </>
  );
};

SideBar.propTypes = {
  setDisplayPending: PropTypes.func.isRequired,
  setDisplayDelivered: PropTypes.func.isRequired,
  setDisplayCancelled: PropTypes.func.isRequired,
  displayPending: PropTypes.bool.isRequired,
  displayDelivered: PropTypes.bool.isRequired,
  displayCancelled: PropTypes.bool.isRequired,
  setDisplayOrderPending: PropTypes.func.isRequired,
  setDisplayOrderDelivered: PropTypes.func.isRequired,
  setDisplayOrderCancelled: PropTypes.func.isRequired,
  displayOrderPending: PropTypes.bool.isRequired,
  displayOrderDelivered: PropTypes.bool.isRequired,
  displayOrderCancelled: PropTypes.bool.isRequired,
};
export default SideBar;
