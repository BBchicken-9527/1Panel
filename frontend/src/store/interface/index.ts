import { RouteRecordRaw } from 'vue-router';
import { DeviceType } from '@/enums/app';
export interface ThemeConfigProp {
    panelName: string;
    primary: string;
    theme: string; // dark | bright ｜ auto
    isGold: boolean;
    footer: boolean;

    title: string;
    logo: string;
    logoWithText: string;
    favicon: string;
}

export interface GlobalState {
    isLoading: boolean;
    loadingText: string;
    isLogin: boolean;
    entrance: string;
    language: string; // zh | en | tw
    themeConfig: ThemeConfigProp;
    isFullScreen: boolean;
    openMenuTabs: boolean;
    isOnRestart: boolean;
    agreeLicense: boolean;
    hasNewVersion: boolean;
    ignoreCaptcha: boolean;
    device: DeviceType;
    lastFilePath: string;
    currentDB: string;
    currentRedisDB: string;
    showEntranceWarn: boolean;
    defaultNetwork: string;

    isProductPro: boolean;
    productProExpires: number;
    isMasterProductPro: boolean;

    errStatus: string;

    currentNode: string;
}

export interface MenuState {
    isCollapse: boolean;
    menuList: RouteRecordRaw[];
    withoutAnimation: boolean;
}

export interface TerminalState {
    lineHeight: number;
    letterSpacing: number;
    fontSize: number;
    cursorBlink: string;
    cursorStyle: string;
    scrollback: number;
    scrollSensitivity: number;
}
