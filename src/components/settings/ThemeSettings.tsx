import ThemeColorPresets from "./ThemeColorPresets";
import SettingsDrawer from "./drawer";
import ThemeRtlLayout from "./ThemeRtlLayout";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeRtlLayout>
        {children}
        <SettingsDrawer />
      </ThemeRtlLayout>
    </ThemeColorPresets>
  );
}

