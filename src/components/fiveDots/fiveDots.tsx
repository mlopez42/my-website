import {Component} from "react";
import "./fiveDots.scss";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

type MyProps = {
    rate: number
}

export default class FiveDots extends Component<MyProps> {

    filed(id: number) {
        return <FiberManualRecordIcon className="five-dots-reskin" key={id} />;
    }

    outlined(id: number) {
        return <FiberManualRecordOutlinedIcon className="five-dots-reskin" key={id} />;
    }

    get rating(): number {
        return this.props.rate || 0;
    }

    get fiveDots() {
        let cpt = 5;
        let ret: any = [];
        for (let t = this.rating; cpt > 0; cpt--){
            if (t > 0) {
                ret.push(this.filed(cpt));
                t--;
            }
            else
                ret.push(this.outlined(cpt));
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