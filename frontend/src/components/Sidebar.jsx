import React from "react";
import {
  FaShieldAlt,
  FaTachometerAlt,
  FaRobot,
  FaExclamationTriangle,
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaFileAlt,
  FaSearch
} from "react-icons/fa";

import "../styles/dashboard.css";

function Sidebar() {
  const menuItems = [
    { icon: <FaTachometerAlt />, text: "Dashboard", active: true },
    { icon: <FaRobot />, text: "AI Agents" },
    { icon: <FaExclamationTriangle />, text: "Threats" },
    { icon: <FaSearch />, text: "Monitoring" },
    { icon: <FaShieldAlt />, text: "Trust Engine" },
    { icon: <FaChartLine />, text: "Analytics" },
    { icon: <FaClipboardList />, text: "Logs" },
    { icon: <FaFileAlt />, text: "Reports" },
    { icon: <FaCog />, text: "Settings" },
  ];

  return (
    <div className="sidebar">

      <div className="logo">
        <FaShieldAlt className="logo-icon" />
        <div>
          <h2>SHADOWAGENT</h2>
          <span>Trust Dashboard</span>
        </div>
      </div>

      <div className="menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={item.active ? "menu-item active" : "menu-item"}
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="status-card">
        <FaShieldAlt className="status-icon" />
        <h3>System Status</h3>
        <p>All Systems Operational</p>
      </div>

    </div>
  );
}

export default Sidebar;