import {Component} from "react";
import "./fiveDots.scss";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

type MyProps = {
    rate: number
}

export default class fiveDots extends Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }

    get filed() {
        return <FiberManualRecordIcon />;
    }

    get outlined() {
        return <FiberManualRecordOutlinedIcon />;
    }

    get rating(): number {
        return this.props.rate || 0;
    }

    render() {
        return (
            <div className="">

            </div>
        )
    }
}