import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "System Admin",
    path: "/sysadmin/sysadminhome",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Producer Org Admin",
    path: "/prodorgadmin/prodorgadminhome",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Producer",
    path: "/producer/producerhome",
    icon: <FontAwesomeIcon icon={faUser} />
  },
  {
    label: "Customer",
    path: "/customer/customerhome",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;