import MobileNav from "./navi/mobilenav";
import DesktopNav from "./navi/desktopnav";
import { NavProps } from  '@/theme/aeonian/interface/global/nav'

const Nav = (props: NavProps) => {
    const nav = props
    return (
        <>
            <DesktopNav nav={nav} />
            <MobileNav nav={nav} />
        </>
        
    );
}

export default Nav