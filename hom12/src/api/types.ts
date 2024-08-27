/*
 * The ThemeSwitcherProps interface defines the structure of the props
 * that the ThemeSwitcher component expects. It includes a render function
 * that takes in two arguments: isDark (boolean) and toggleTheme (function).
 */

import { ReactNode } from "react"

export interface ThemeSwitcherProps {
    render: (isDark: boolean, toggleTheme: () => void) => ReactNode;
}