import React from "react";

interface AppContextProps {
}

export const AppContext = React.createContext<AppContextProps | undefined>(undefined);