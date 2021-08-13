import {Component} from "react";
import "./curriculumVitae2.scss";
import CvSummary from "../../components/cvSummary/cvSummary";
import CvDetails from "../../components/cvDetails/cvDetails";

export default class curriculumVitae2 extends Component {

    render() {
        return (
            <div className="cv-page-2">
                <CvSummary />
                <CvDetails />
            </div>
        )
    }
}