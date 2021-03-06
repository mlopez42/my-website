import {Component /*, Props*/} from "react";
import "./curriculumVitae1.scss";
import CvTitleCategory from "../../components/cvTitleCategory/cvTitleCategory";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import CvHeader from "../../components/cvHeader/cvHeader";
import FiveDots from "../../components/fiveDots/fiveDots";

export default class CurriculumVitae1 extends Component {

    render() {
        return (
            <div className="cv-page">
                <CvHeader />
                <div className="cv-page-content">
                    <div className="cv-column">
                        <div>
                            <CvTitleCategory comp={<PersonIcon />} title={'A PROPOS'} />
                            <div>test</div>
                        </div>
                        <div>
                            <CvTitleCategory comp={<CodeIcon />} title={'PROGRAMMATION'} />
                            <div className="cv-column-content">
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>Javascript</b></div>
                                    <FiveDots rate={5}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>HTML/CSS</b></div>
                                    <FiveDots rate={5}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>TypeScript</b></div>
                                    <FiveDots rate={4}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>VueJs</b></div>
                                    <FiveDots rate={4}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>ReactJs</b></div>
                                    <FiveDots rate={4}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>Angular4+</b></div>
                                    <FiveDots rate={3}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>C</b></div>
                                    <FiveDots rate={3}/>
                                </div>
                                <div className="cv-column-content-item-comp">
                                    <div className="title-center"><b>C#</b></div>
                                    <FiveDots rate={2}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CvTitleCategory comp={<PhoneIcon />} title={'CONTACT'} />
                            <div>
                                <p>lopezmatias417@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <CvTitleCategory comp={<ChatIcon />} title={'LANGUES'} />
                            <div>
                                <p>Anglais (Interm??diaire et technique)</p>
                                <p>Espagnol (Parl?? Interm??diaire)</p>
                            </div>
                        </div>
                    </div>
                    <div className="cv-column">
                        <div>
                            <CvTitleCategory comp={<BusinessCenterIcon />} title={'EXPERIENCES'} />
                            <div className="cv-column-content">
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2019</div><div>?? Juin 2020</div></div>
                                    <div>
                                        <b>Auto-entreprenneur.fr</b>
                                        <p>Developpeur front-end VueJs + Typescript. Refonte tunnel d'inscription, bureau virtuel et systeme d'??dition de factures</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Octobre 2018</div><div>?? mars 2019</div></div>
                                    <div>
                                        <b>Lablaco</b>
                                        <p>Developpeur front-end React. R????criture du site en ReactJs, cr??ation d'un CRM complet (market place + gestion utilisateurs)</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2017</div><div>?? d??cembre 2017</div></div>
                                    <div>
                                        <b>Blupods Europe</b>
                                        <p>Stagiaire d??veloppeur front-end Angular 4 + Typescript. R????criture du proof of concept (cod?? en AngularJs) vers un site web fonctionnel et maintenable ainsi qu'ajout de fonctionnalit??s en Angular4</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2014</div><div>?? juin 2014</div></div>
                                    <div>
                                        <b>Association Fran??aise contre la Myopathie</b>
                                        <p>Stagiaire technicien support informatique. Suivi des utilisateurs et prise en charge des probl??mes informatiques, tests de mise en place d'un systeme d'exploitation de remplacement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CvTitleCategory comp={<SchoolIcon />} title={'FORMATION'} />
                            <div className="cv-column-content">
                                <div className="cv-column-content-item">
                                    <div>Depuis 2015</div>
                                    <div><b>??tudiant ?? l'??cole 42</b><p>( <a href="https://www.42.fr" target="_blank" rel="noreferrer">www.42.fr</a> )</p></div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div>2014</div>
                                    <div><b>Niveau DUT Genie ??lectrique et Informatique Industrielle</b><p>(IUT S??nart Fontainebleau UPEC)</p></div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div>2012</div>
                                    <div><b>BAC Scientifique option Sciences de l'ing??nieur</b><p>(Lyc??e Rosa Parks ?? Montgeron)</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}