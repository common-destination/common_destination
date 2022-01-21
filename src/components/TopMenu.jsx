import React from 'react';
import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";

function TopMenu(props) {
    return (
        <>
        <ul className="topMenu">
          <li
            onClick={() => {
              props.handleValidationToggle();
            }}
            style={{ cursor: "pointer" }}
          >
            <SiGnuprivacyguard className="reactIcons" id="loginIcon" />
            LOG IN
          </li>
          <li
            onClick={() => {
              props.setValidationMenuToggle(false);
            }}
          >
            <NavLink to="/">
              <FcHome className="reactIcons" />
            </NavLink>
          </li>
          <li
            onClick={() => {
              props.setValidationMenuToggle(false);
              props.handleMenuAccountToggle();
            }}
          >
            <MdManageAccounts
              className="reactIcons"
              style={{ margin: "0" }}
            />
            <TiArrowSortedDown style={{ margin: "-20% -10%" }} />
          </li>
        </ul>
        <GiHamburgerMenu className="menuIcon" onClick={props.handleToggles} />
      </>
    );
}

export default TopMenu;