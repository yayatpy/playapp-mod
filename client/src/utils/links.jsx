import React from "react";

import { RiBillLine } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { text: "my rincian", path: ".", icon: <RiBillLine /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "stats ", path: "stats", icon: <IoBarChartSharp /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
