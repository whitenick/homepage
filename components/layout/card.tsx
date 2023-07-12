import Slot from "./slots/slot";
import { getSlotChild } from "./slots/slot-children";

const Left = Slot();
const Right = Slot();

const Container = (props) => {
    const left = getSlotChild(props.children, Left);
    const right = getSlotChild(props.children, Right);

    return (
        <div className="grid auto-rows-auto shadow rounded p-4 bg-Snow gap-y-2 w-full">
            <div className="grid grid-cols-2">
                {left}
                {right}
            </div>
        </div>
    )
}

export const Card = {
    Container,
    Left,
    Right
};