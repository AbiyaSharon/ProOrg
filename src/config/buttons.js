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
    path: "/sysadmin/sysadminlogin",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Producer Org Admin",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Producer",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "Customer",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;