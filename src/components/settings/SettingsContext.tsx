import { createContext, useEffect, useContext, useMemo, useCallback } from 'react';

//hooks
import useLocalStorage from '@/hooks/useLocalStorage';
// utils
import localStorageAvailable from '@/utils/localStorageAvailable';
//
import { defaultSettings } from './config-setting';
import { SettingsContextProps } from './types';
import { defaultPreset, getPresets, presetsOption } from './presets';

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},
  // Direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  // Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  // Contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  // Color
  onChangeColorPresets: () => {},
  presetsColor: defaultPreset,
  presetsOption: [],
  // Stretch
  onToggleStretch: () => {},
  // Reset
  onResetSetting: () => {},
};

export const SettingsContext = createContext(initialState)

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if(!context) throw new Error('useSettingsContext must be use inside SettingsProvider')


  return context;
};

// ----------------------------------------------------------------------

type SettingsProviderProps = {
    children:React.ReactNode;
}

export function SettingsProvider({children}: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage("settings", defaultSettings);
  
  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem("i18nextLng") : "";

  const isArabic = langStorage === "ar";

  useEffect(() => {
    isArabic && onChangeDirectionByLang("ar")
  }, [isArabic])

  //Mode
  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === "light" ? "dark" : "light";
    setSettings({...settings, themeMode})
  }, [setSettings, settings]);

  const onChangeMode = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
    const themeMode = event.target.value;
    setSettings({...settings, themeMode});
  }, [setSettings, settings]);


   // Layout
   const onToggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const onChangeLayout = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeLayout = event.target.value;
      setSettings({ ...settings, themeLayout });
    },
    [setSettings, settings]
  );


  //Direction
  const onChangeDirectionByLang = useCallback((lang:string) => {
    const themeDirection = lang === "ar" ? "rtl" : "ltr";
    setSettings({...settings, themeDirection})
  }, [setSettings, settings])


   // Color
   const onChangeColorPresets = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeColorPresets = event.target.value;
      setSettings({ ...settings, themeColorPresets });
    },
    [setSettings, settings]
  );

  // Stretch
  const onToggleStretch = useCallback(() => {
    const themeStretch = !settings.themeStretch;
    setSettings({...settings, themeStretch});
  }, [setSettings, settings])


  // Reset
  const onResetSetting = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings]);


  const memoizedValue = useMemo(() => ({
    ...settings,
    // Mode
    onToggleMode,
    onChangeMode,
     // Layout
     onToggleLayout,
     onChangeLayout,
    // Color
    onChangeColorPresets,
    presetsOption,
    presetsColor: getPresets(settings.themeColorPresets),
    // Stretch
    onToggleStretch,
     // Reset
     onResetSetting,
  }), [
    settings,
    // Mode
    onToggleMode,
    onChangeMode,
     // Layout
     onToggleLayout,
     onChangeLayout,
    // Color
    onChangeColorPresets,
     // Stretch
     onToggleStretch,
    //Reset
    onResetSetting,
  ]);

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>

}
