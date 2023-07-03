import PropTypes from 'prop-types';
import { BiGridAlt, BiX } from 'react-icons/bi';

const SidebarHeader = ({ toggleSidebar }) =>
(
  <div className="p-2.5 mt-1 flex items-center">
    <BiGridAlt className="px-2 py-1 rounded-md bg-blue-600" />
    <h1 className="font-bold text-gray-200 text-[15px] ml-3">Shipments Tracker</h1>
    <BiX className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar} />
  </div>
);

SidebarHeader.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarHeader;