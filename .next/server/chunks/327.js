"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l2": () => (/* binding */ NavBar),
/* harmony export */   "zS": () => (/* binding */ DefaultNavBar)
/* harmony export */ });
/* unused harmony export NavBarVertical */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9822);
/* harmony import */ var _radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);






const DefaultNavBar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavBar, {
        items: [
            {
                name: "About",
                route: "/app"
            },
            {
                name: "Projects",
                route: "/app/projects"
            },
            {
                name: "Posts",
                route: "/app/posts"
            }
        ]
    });
};
const NavBar = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const path = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!router) return "";
        console.log(router.asPath);
        return router.asPath;
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-1 rounded items-center font-sans py-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-rows-2 justify-center w-[100%]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-5xl content-center font-lobster text-Jet",
                        children: "Nick White"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-center items-center gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://www.linkedin.com/in/nick-white-a4ba63110/",
                                target: "_blank",
                                className: "justify-end p-2",
                                title: "Github",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiLinkedin, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://github.com/whitenick",
                                target: "_blank",
                                className: "p-2",
                                title: "Github",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiGithub, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Root, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.List, {
                    className: "grid grid-rows-1 grid-flow-col justify-center gap-4",
                    children: props.items?.length > 0 && props.items?.map((item)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.route ?? "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_navigation_menu__WEBPACK_IMPORTED_MODULE_1__.Item, {
                                className: `${path.toLowerCase() === item.route?.toLowerCase() ? "border-b border-Jet text-Jet" : "text-gray-500"} hover:border-b hover:cursor-pointer font-mono p-4`,
                                children: item?.name
                            })
                        });
                    })
                })
            })
        ]
    });
};
const NavBarVertical = (props)=>{
    const router = useRouter();
    const path = useMemo(()=>{
        if (!router) return "";
        console.log(router.asPath);
        return router.asPath;
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ _jsx("div", {
        className: "w-60 bg-Gray-Gray p-1 rounded font-montserrat text-[#FFFFFF]",
        children: /*#__PURE__*/ _jsx(NavigationMenu.Root, {
            children: /*#__PURE__*/ _jsx(NavigationMenu.List, {
                className: "flex flex-col max-w-12 justify-start gap-4",
                children: props.items?.length > 0 && props.items?.map((item)=>{
                    return /*#__PURE__*/ _jsx(Link, {
                        href: item.route ?? "",
                        children: /*#__PURE__*/ _jsx(NavigationMenu.Item, {
                            className: `${path.toLowerCase() === item.route?.toLowerCase() ? "bg-dark-green text-white" : ""} hover:bg-dark-green hover:text-white font-semibold hover:cursor-pointer text-Jet p-4 text-center rounded`,
                            children: item?.name
                        })
                    });
                })
            })
        })
    });
};


/***/ })

};
;