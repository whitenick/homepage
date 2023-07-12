import { getChildrenByType, removeChildrenByType } from "react-nanny";

export const getSlotChild = (
    children: React.ReactNode | null,
    type: React.ElementType
) => {
    return children ? getChildrenByType(children, type) : null;
}

export const getSlotChildren = (
    children: React.ReactNode | null,
    type: React.ElementType
) => {
    return children ? getChildrenByType(children, type) : [];
}

export const removeSlotChildren = (
    children: React.ReactNode | null,
    types: React.ElementType[]
) => {
    return children ? removeChildrenByType(children, types) : null;
}