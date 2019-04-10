import AsideDirection from "./AsideDirection";
import AsideShift from "./AsideShift";

let asideL:HTMLElement = document.getElementById('gc-aside-l');
let asideLControls:HTMLCollection = document.getElementsByClassName('gc-aside-l-handler');
new AsideDirection(asideL, asideLControls);

let elementSidebar:HTMLElement = document.querySelector('.gc-sidebar');
let sidebarControl:HTMLElement = document.querySelector('.gc-sidebar__menu-btn');
new AsideShift(elementSidebar, sidebarControl,['gc-main','gc-top-line']);
