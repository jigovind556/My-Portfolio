import { createContext,useContext } from "react";

export const PopupContext = createContext({
    isPopupVisible : false,
    openPopup : ()=>{}
})

export const PopupProvider =PopupContext.Provider;

export default function usePopup (){
    return useContext(PopupContext);
}