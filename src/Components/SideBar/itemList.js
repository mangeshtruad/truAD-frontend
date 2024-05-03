import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LockIcon from "@mui/icons-material/Lock";
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const list = [
  {
    name: "Dashboard",
    targetLink: "/dashboard",
    icon: <HomeIcon/>,
    isActive: false,
  },
  {
    name: "Popular Picks",
    targetLink: "/dashboard/popularpicks/",
    icon: <WhatshotOutlinedIcon />,
    isActive: false,
  },
  {
    name: "Resource Management",
    targetLink: "/dashboard/resource",
    icon: <BarChartIcon />,
    isActive: true,
  },
  {
    name: "Material Management",
    targetLink: "/dashboard/material",
    icon: <DashboardIcon />,
    isActive: false,
  },
  {
    name: "Invoices",
    targetLink: "/dashboard/invoices/",
    icon: <ReceiptLongIcon />,
    isActive: false,
  },
  {
    name: "Place Promotion",
    targetLink: "/dashboard/placepromotion",
    icon: <CurrencyExchangeIcon />,
    isActive: false,
  },
  {
    name: "Data Report",
    targetLink: "/dashboard/analytics",
    icon: <LockIcon />,
    isActive: false,
  },
];

export default list;
