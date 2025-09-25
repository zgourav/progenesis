// store/praoNavbarSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PraoNavbarState {
  isSubmenuOpen: boolean;
  isActionMenuOpen: boolean;
  isOpenBlackBackdrop: boolean;
  isOpenLgBreadcrumbMenu: boolean;
  activeMenuId: string | null;
  activeSubmenuId: string | null;
  activeActionMenuId: string | null;
  subMenuData: any;
  actionMenuData: any;
  pathSegments: { menuId: string | null, submenuId: string | null, actionMenuId: string | null };
  isMobileNavbarOpen: boolean;
}

const initialState: PraoNavbarState = {
  isSubmenuOpen: false,
  isActionMenuOpen: false,
  isOpenBlackBackdrop: false,
  isOpenLgBreadcrumbMenu: false,
  activeMenuId: null,
  activeSubmenuId: null,
  activeActionMenuId: null,
  subMenuData: null,
  actionMenuData: null,
  pathSegments: {
    menuId: null,
    submenuId: null,
    actionMenuId: null,
  },
  isMobileNavbarOpen: false,
};

const praoNavbarSlice = createSlice({
  name: "praoNavbar",
  initialState,
  reducers: {
    setActivePraoMenu(state, action: PayloadAction<string>) {
      state.activeMenuId = action.payload;
    },

    removeActivePraoMenu(state) {
      state.activeMenuId = null;
    },

    openPraoSubmenu(state, action: PayloadAction<string>) {
      state.isSubmenuOpen = true;
      state.subMenuData = action.payload;
    },

    openPraoActionMenu(state, action: PayloadAction<{ activeSubmenuId: string, actionMenuData: any }>) {
      state.isActionMenuOpen = true;
      state.activeSubmenuId = action.payload.activeSubmenuId;
      state.actionMenuData = action.payload.actionMenuData;
    },

    closePraoSubMenu(state) {
      state.isSubmenuOpen = false;
      state.subMenuData = null;
    },

    closePraoActionMenu(state) {
      state.isActionMenuOpen = false;
      state.actionMenuData = null;
    },

    // Used for LG Bread

    openBlackBackdrop(state) {
      state.isOpenBlackBackdrop = true;
    },

    closeBlackBackdrop(state) {
      state.isOpenBlackBackdrop = false;
      state.isOpenLgBreadcrumbMenu = false;
    },

    openLgBreadcrumbMenu(state) {
      state.isOpenLgBreadcrumbMenu = true;
    },

    closeLgBreadcrumbMenu(state) {
      state.isOpenLgBreadcrumbMenu = false;
      state.activeSubmenuId = null;
      state.activeMenuId = null;
      state.activeActionMenuId = null;
    },

    setActiveSubmenuId(state, action: PayloadAction<string>) {
      state.activeSubmenuId = action.payload;
    },

    setActiveActionMenuId(state, action: PayloadAction<string>) {
      state.activeActionMenuId = action.payload;
    },
    
    setPathSegments(state, action: PayloadAction<{ menuId: string | null, submenuId: string | null, actionMenuId: string | null }>) {
      state.pathSegments.menuId = action.payload.menuId;
      state.pathSegments.submenuId = action.payload.submenuId;
      state.pathSegments.actionMenuId = action.payload.actionMenuId;
    },

    // Mobile navbar
    openMobileNavbar(state) {
      state.isMobileNavbarOpen = true;
    },
    closeMobileNavbar(state) {
      state.isMobileNavbarOpen = false;
    },
  },
});

export const { setActivePraoMenu, removeActivePraoMenu, openPraoSubmenu, closePraoSubMenu, openPraoActionMenu, closePraoActionMenu, openBlackBackdrop, closeBlackBackdrop, openLgBreadcrumbMenu, closeLgBreadcrumbMenu, setActiveSubmenuId, setActiveActionMenuId, setPathSegments, openMobileNavbar, closeMobileNavbar } = praoNavbarSlice.actions;

export default praoNavbarSlice.reducer;
