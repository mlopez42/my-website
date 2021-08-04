import {Component} from "react";
import "./cvHeader.scss";

export default class CvHeader extends Component {

    render() {
        return (
            <div className="cv-header">
                <div className="cv-header-content">
                    <div className="cv-header-content-name">Matias Lopez</div>
                    <div className="cv-header-content-title">Developpeur Web et Logiciel</div>
                </div>
            </div>
        )
    }
}