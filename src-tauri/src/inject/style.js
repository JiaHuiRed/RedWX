window.addEventListener("DOMContentLoaded", (_event) => {
  // Customize and transform existing functions
  const contentCSS = `
    #page #footer-wrapper,
    .drawing-board .toolbar .toolbar-action,
    .c-swiper-container,
    .download_entry,
    .lang, .copyright,
    .wwads-cn, .adsbygoogle,
    #Bottom > div.content > div.inner,
    #Rightbar .sep20:nth-of-type(5),
    #Rightbar > div.box:nth-child(4),
    #Main > div.box:nth-child(8) > div
    #Wrapper > div.sep20,
    #Main > div.box:nth-child(8),
    #masthead-ad,
    #app > header > div > div.menu,
    #root > div > div.fixed.top-0.left-0.w-64.h-screen.p-10.pb-0.flex.flex-col.justify-between > div > div.space-y-4 > a:nth-child(3),
    #app > div.layout > div.main-container > div.side-bar > li.divider,
    #Rightbar > div:nth-child(6) > div.sidebar_compliance,
    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside > div > div > a.ChatPageFollowTwitterLink_followLink__Gl2tt,
    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside > div > div > a.Button_buttonBase__0QP_m.Button_primary__pIDjn.ChatPageDownloadLinks_downloadButton__amBRh,
    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside > div > div > section a[href*="/contact"],
    .dc04ec1d .c7f51894 .a1e75851, .a7f3a288 .b91228e4, .efe408db .a24007f4{
      display: none !important;
    }

    #app > header .right .avatar.logged-in{
      opacity: 0;
      transition: opacity 0.3s;
    }

    #app > header .right .avatar.logged-in:hover{
      opacity: 1;
    }

    html::-webkit-scrollbar {
      display: none !important;
    }

    #__next .ChatPageSidebar_menuFooter__E1KTY,#__next > div.PageWithSidebarLayout_centeringDiv___L9br > div > aside > div > menu > section:nth-child(6) {
      display: none;
    }

    #__next > div.overflow-hidden.w-full.h-full  .min-h-\\[20px\\].items-start.gap-4.whitespace-pre-wrap.break-words {
      word-break: break-all;
    }

    #__next .PageWithSidebarLayout_mainSection__i1yOg {
      width: 100%;
      max-width: 1000px;
    }

    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside{
      min-width: 260px;
    }

    #__next > div.overflow-hidden.w-full.h-full.relative.flex.z-0 > div.relative.flex.h-full.max-w-full.flex-1.overflow-hidden > div > main > div.absolute.left-2.top-2.z-10.hidden.md\\:inline-block{
      margin-top:20px;
      margin-left: 10px;
    }

    .a7f3a288.f0d4f23d {
      padding-top: 34px;
    }

    .ec92d1d3 {
      padding-top: 48px;
    }

    #__next .overflow-hidden>.hidden.bg-gray-900 span.rounded-md.bg-yellow-200 {
      display: none;
    }

    #__next .absolute .px-3.pt-2.pb-3.text-center {
      visibility: hidden;
      padding-bottom: 4px;
    }

    #__next .h-full.w-full .text-center.text-xs.text-gray-600>span {
      visibility: hidden;
      height: 15px;
    }

    #__next > div.overflow-hidden.w-full.h-full.relative.flex > div.dark.hidden.flex-shrink-0.bg-gray-900.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div > div > nav {
      width: 100%;
    }

    .panel.give_me .nav_view {
      top: 164px !important;
    }

    #Wrapper{
      background-color: #F8F8F8 !important;
      background-image:none !important;
    }

    #Top {
      border-bottom: none;
    }

    #global > div.header-container.showSearchBoxOrHeaderFixed > header > div.right > div > div.dropdown-nav{
      display: none;
    }

    #__next > div.AnnouncementWrapper_container__Z51yh > div > aside > div > div > menu > section:nth-child(4) > section, #__next > div.AnnouncementWrapper_container__Z51yh > div > aside > div > div > menu > section:nth-child(4){
      display: none;
    }

    @media (min-width:1280px){
      #__next .text-base.xl\\:max-w-3xl, #__next form.stretch.xl\\:max-w-3xl {
        max-width: 48rem;
      }
    }

    #__next .prose ol li p {
      margin: 0;
      display: inline;
    }

    .AppHeader .AppHeader-globalBar.js-global-bar {
      padding-top: 35px;
    }

    .header-overlay .header-logged-out {
      margin-top: 15px;
    }

    .w-full #stage-slideover-sidebar {
      padding-top: 16px;
    }
    .w-full #thread #page-header {
      padding-top: 36px;
    }
  `;
  const contentStyleElement = document.createElement("style");
  contentStyleElement.textContent = contentCSS;
  document.head.appendChild(contentStyleElement);

  // Top spacing adapts to head-hiding scenarios
  const topPaddingCSS = `
    .columns .column #header,
    .main > div > div.panel.give_me > div.header {
      padding-top: 30px;
    }

    #__next header.HeaderBar_header__jn5ju {
      padding-top: 16px;
    }

    .geist-page nav.dashboard_nav__PRmJv,
    #app > div.layout > div.header-container.showSearchBoxOrHeaderFixed > header > a {
      padding-top:10px;
    }

    .geist-page .submenu button{
      margin-top:24px;
    }

    .container-with-note #home, .container-with-note #switcher{
      top: 30px;
    }

    #__next .overflow-hidden>.overflow-x-hidden .scrollbar-trigger > nav {
      padding-top: 12px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.flex.h-full.flex-col > div.flex-1.overflow-hidden > div > div.absolute.left-0.right-0 > div > div.flex.items-center.gap-2 > button{
      margin-left: 60px;
      margin-right: -10px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.dark.flex-shrink-0.overflow-x-hidden.bg-black > div > div > div > div > nav > div.flex.flex-col.pt-2.empty\\:hidden.dark\\:border-white\\/20 > a,
    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.group.fixed.bottom-3.right-3.z-10.hidden.gap-1.lg\\:flex > div,
    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav > div.flex.flex-col.pt-2.empty\\:hidden.dark\\:border-white\\/20 > a {
      display: none;
    }

    #__next .md\\:px-\\[60px\\].text-token-text-secondary.text-xs.text-center.py-2.px-2.relative{
      visibility:hidden;
    }

    #__next>div>div>.flex.h-screen.w-full.flex-col.items-center {
      padding-top: 20px;
    }

    .h-dvh.flex-grow .bg-gradient-to-b.from-background.via-background {
      padding-top: 40px;
    }

    body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.z-\\[21\\].flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary.max-md\\:\\!w-0 > div > div > div > nav > div.flex.justify-between.h-\\[60px\\].items-center.md\\:h-header-height {
      padding-top: 25px;
    }

    body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.composer-parent.flex.h-full.flex-col.focus-visible\\:outline-0 > div.flex-1.overflow-hidden.\\@container\\/thread > div > div.absolute.left-0.right-0 > div{
      padding-top: 35px;
    }

    #__next .sticky.left-0.right-0.top-0.z-20.bg-black{
      padding-top: 0px;
    }

    #header-area > div > .css-gtiexd > div:nth-child(1) > div, #header-area .logoIcon .user-info{
      padding-top: 20px;
    }

    #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > div > nav, #__next > div.relative.z-0.flex.h-full.w-full.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main {
      padding-top: 6px;
    }

    #__next > div.AnnouncementWrapper_container__Z51yh > div > aside.SidebarLayout_sidebar__SXeDJ.SidebarLayout_left__k163a > div > div > header{
      padding-left: 84px;
      padding-top: 10px;
    }

    #page .main_header, .cb-layout-basic--navbar,
    #app .splitpanes.splitpanes--horizontal.no-splitter header,
    .fui-FluentProvider .fui-Button[data-testid="HomeButton"],
    #__next > div.PageWithSidebarLayout_centeringDiv___L9br > aside .ChatPageSidebar_logo__9PIXq {
      padding-top: 20px;
    }

    #tabs-sidebar--tabpanel-0 > div.tw-flex.tw-items-center.tw-mb-\\[12px\\].tw-mt-\\[14px\\].tw-px-4 {
      padding-top: 15px;
    }

    #tabs-sidebar--tabpanel-1 > div > div.tw-p-\\[16px\\].tw-flex.tw-flex-col.tw-gap-1\\.5{
      padding-top: 30px;
    }

    #tabs-sidebar--tabpanel-2 > div > h2 {
      padding-top: 20px;
      height: 70px;
    }

    #global > div.header-container > .mask-paper {
      padding-top: 20px;
    }

    .wrap.h1body-exist.max-container > div.menu-tocs > div.menu-btn{
      top: 28px;
    }

    .flex.w-full.h-full.overflow-hidden{
      padding-top:20px;
    }

    .text-sidebar-foreground .bg-sidebar{
      padding-top:30px;
    }

    #pake-top-dom:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
    }

    #pake-top-dom{
      position:fixed;
      background:transparent;
      top:0;
      width: 100%;
      height: 20px;
      cursor: grab;
      -webkit-app-region: drag;
      user-select: none;
      -webkit-user-select: none;
      z-index: 99999;
    }

    /* On Windows with traffic lights, extend drag region height to cover full traffic light area */
    body.pake-macos-style #pake-top-dom {
      height: 36px;
    }

    @media (max-width:767px){
      #__next .overflow-hidden.w-full .max-w-full>.sticky.top-0 {
        padding-top: 20px;
      }

      #__next > div.overflow-hidden.w-full.h-full  main.relative.h-full.w-full.flex-1 > .flex-1.overflow-hidden .h-32.md\\:h-48.flex-shrink-0{
        height: 0px;
      }
    }
  `;
  const isMac = /Mac/i.test(navigator.userAgent);
  if (window["pakeConfig"]?.hide_title_bar) {
    const topPaddingStyleElement = document.createElement("style");
    topPaddingStyleElement.textContent = topPaddingCSS;
    document.head.appendChild(topPaddingStyleElement);
  }

  // macOS-style traffic light buttons for Windows when hide_title_bar is enabled
  if (!isMac && window["pakeConfig"]?.hide_title_bar) {
    const trafficLightCSS = `
      #pake-traffic-lights {
        position: fixed;
        top: 0;
        left: 0;
        height: 36px;
        display: flex;
        align-items: center;
        padding-left: 12px;
        gap: 8px;
        z-index: 100000;
        -webkit-app-region: no-drag;
        pointer-events: auto;
      }

      #pake-traffic-lights .traffic-light {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: filter 0.15s ease;
        position: relative;
      }

      #pake-traffic-lights .traffic-light.close {
        background: #ff5f57;
        border: 0.5px solid #e0443e;
      }

      #pake-traffic-lights .traffic-light.minimize {
        background: #febc2e;
        border: 0.5px solid #dea123;
      }

      #pake-traffic-lights .traffic-light.maximize {
        background: #28c840;
        border: 0.5px solid #1aab29;
      }

      #pake-traffic-lights:hover .traffic-light.close::after {
        content: "×";
        font-size: 12px;
        line-height: 1;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bold;
      }

      #pake-traffic-lights:hover .traffic-light.minimize::after {
        content: "−";
        font-size: 14px;
        line-height: 1;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bold;
      }

      #pake-traffic-lights:hover .traffic-light.maximize::after {
        content: "+";
        font-size: 14px;
        line-height: 1;
        color: rgba(0, 0, 0, 0.5);
        font-weight: bold;
      }

      #pake-traffic-lights .traffic-light:active {
        filter: brightness(0.8);
      }

      /* Inactive state - all buttons become gray */
      #pake-traffic-lights.inactive .traffic-light {
        background: #ddd;
        border-color: #ccc;
      }

      #pake-traffic-lights.inactive .traffic-light::after {
        display: none !important;
      }
    `;
    const trafficLightStyleElement = document.createElement("style");
    trafficLightStyleElement.textContent = trafficLightCSS;
    document.head.appendChild(trafficLightStyleElement);

    // Create traffic light buttons
    const trafficLights = document.createElement("div");
    trafficLights.id = "pake-traffic-lights";
    trafficLights.innerHTML = `
      <div class="traffic-light close" title="Close"></div>
      <div class="traffic-light minimize" title="Minimize"></div>
      <div class="traffic-light maximize" title="Maximize"></div>
    `;
    document.body.appendChild(trafficLights);
    document.body.classList.add("pake-macos-style");
  }
});
