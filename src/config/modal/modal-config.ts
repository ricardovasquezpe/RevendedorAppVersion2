import React, {LazyExoticComponent} from "react";

export enum Modals {
 LoginModal,
}

export const modalsConfig: Record<Modals, LazyExoticComponent<any>> = {
    [Modals.LoginModal]: React.lazy(() => import('../../components/myModal/myModal').then((module) => ({
        default: module.MyModal,
    }))),
}