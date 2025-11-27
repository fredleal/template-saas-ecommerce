export type DeviceType = 'phone' | 'tablet' | 'desktop';
export interface UseDeviceReturn {
    deviceType: DeviceType;
    isPhone: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}
export declare const useDevice: () => UseDeviceReturn;
//# sourceMappingURL=useDevice.d.ts.map