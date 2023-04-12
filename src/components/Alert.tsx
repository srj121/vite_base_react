import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onclose: () => void;
}

const Alert = ({children,onclose}: Props) => {


    return (
        <div className="alert alert-primary alert-dismissible "
        >{children}
        <button type="button" className="btn-close"  onClick={onclose} data-bs-dismiss="alert" ></button>
        </div>
    )
}
export default Alert