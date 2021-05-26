import {Component, Props} from "react";
import "./curriculumVitae.scss";
import CvTitleCategory from "../../components/cvTitleCategory/cvTitleCategory";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';

export default class CurriculumVitae extends Component {
    constructor(props: Props<any>) {
        super(props);
    }

    render() {
        return (
            <div className="cv-page">
                <div className="cv-column">
                    <div>
                        <CvTitleCategory comp={<PersonIcon />} title={'A PROPOS'}></CvTitleCategory>
                        <div></div>
                    </div>
                    <div>
                        <CvTitleCategory comp={<PhoneIcon />} title={'CONTACT'}></CvTitleCategory>
                        <div></div>
                    </div>
                    <div>
                        <CvTitleCategory comp={<ChatIcon />} title={'LANGUES'}></CvTitleCategory>
                        <div></div>
                    </div>
                </div>
                <div className="cv-column">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}