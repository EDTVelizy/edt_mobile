import { types } from "mobx-state-tree";
import { Appearance, useColorScheme } from 'react-native';


export const System = types
    .model({
        theme: types.enumeration(["light", "dark"])
    })
    .actions(self => ({
        setTheme(newTheme: "light" | "dark") {
            self.theme = newTheme;
        },
        
        setThemeAutomatic() {
            const colorScheme = Appearance.getColorScheme();

            if (colorScheme === 'light' || colorScheme === 'dark') {
                self.theme = colorScheme;
            }
        }
    }));
