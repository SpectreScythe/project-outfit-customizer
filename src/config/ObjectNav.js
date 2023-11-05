import { FaFire, FaHome, FaPlus, FaShoppingCart } from "react-icons/fa";
import { FaMessage, FaPerson, FaWandMagicSparkles } from "react-icons/fa6";

export const NavLinksLeft = [
  {
    icon: <FaWandMagicSparkles />,
    title: "--project-name--",
    path: "/",
  },
  {
    icon: <FaHome />,
    title: "Home",
    path: "/",
  },
  {
    icon: <FaFire />,
    title: "Trending",
    path: "/trending",
  },
  {
    icon: <FaPlus />,
    title: "Create",
    path: "/create",
  },
];

export const NavLinksRight = [
  {
    icon: <FaShoppingCart />,
    title: "Cart",
    path: "/cart",
  },
  {
    icon: <FaMessage />,
    title: "Contact",
    path: "/contact",
  },
  {
    icon: <FaPerson />,
    title: "Account",
    path: "/account",
  },
];
