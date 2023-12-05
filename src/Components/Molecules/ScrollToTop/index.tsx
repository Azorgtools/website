import { FunctionComponent, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop: FunctionComponent = () => {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === 'PUSH' && !location.hash) {
            window.scrollTo(0, 0);
        }
    }, [navigationType, location]);

    return null;
};

export default ScrollToTop;