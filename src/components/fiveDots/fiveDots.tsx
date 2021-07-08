import {Component} from "react";
import "./fiveDots.scss";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

type MyProps = {
    rate: number
}

export default class FiveDots extends Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }

    get filed() {
        return <FiberManualRecordIcon className="five-dots-reskin" />;
    }

    get outlined() {
        return <FiberManualRecordOutlinedIcon className="five-dots-reskin" />;
    }

    get rating(): number {
        return this.props.rate || 0;
    }

    get fiveDots() {
        let cpt = 5;
        let ret: any = [];
        for (let t = this.rating; cpt > 0; cpt--){
            if (t > 0) {
                ret.push(this.filed);
                t--;
            }
            else
                ret.push(this.outlined);
        }
        return ret;
    }

    render() {
        return (
            <div className="five-dots">
                {this.fiveDots}
            </div>
        )
    }
}