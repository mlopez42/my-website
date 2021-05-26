import {Component} from "react";
import "./cvTitleCategory.scss";

type MyProps = {
    comp: any,
    title: String
}

export default class CvTitleCategory extends Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }

    icon() {
        return this.props.comp;
    }

    render() {
        return (
            <div className="cv-title-category">
                {this.icon()}
                <div className="cv-title-category-text">{this.props.title}</div>
            </div>
        )
    }
}