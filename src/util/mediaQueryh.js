import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 993, maxWidth: 1223 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 200, maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768, maxWidth: 992 });
  return isNotMobile ? children : null;
};

export const ScreenType = ({ children }) => {
  return [
    Tablet({ children }),
    Mobile({ children }),
    Default({ children }),
    Desktop({ children })
  ];

  //return screens.map(ele => {
  //  return ele;
  //});
};
