import {Component, Props} from "react";
import "./curriculumVitae.scss";
import CvTitleCategory from "../../components/cvTitleCategory/cvTitleCategory";
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import CvHeader from "../../components/cvHeader/cvHeader";
import FiveDots from "../../components/fiveDots/fiveDots";

export default class CurriculumVitae extends Component {
    constructor(props: Props<any>) {
        super(props);
    }

    render() {
        return (
            <div className="cv-page">
                <CvHeader />
                <div className="cv-page-content">
                    <div className="cv-column">
                        <div>
                            <CvTitleCategory comp={<PersonIcon />} title={'A PROPOS'} />
                            <div></div>
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
                                <p>Anglais (Intermédiaire et technique)</p>
                                <p>Espagnol (Parlé Intermédiaire)</p>
                            </div>
                        </div>
                    </div>
                    <div className="cv-column">
                        <div>
                            <CvTitleCategory comp={<BusinessCenterIcon />} title={'EXPERIENCES'} />
                            <div className="cv-column-content">
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2019</div><div>à Juin 2020</div></div>
                                    <div>
                                        <b>Auto-entreprenneur.fr</b>
                                        <p>Developpeur front-end VueJs + Typescript. Refonte tunnel d'inscription, bureau virtuel et systeme d'édition de factures</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Octobre 2018</div><div>à mars 2019</div></div>
                                    <div>
                                        <b>Lablaco</b>
                                        <p>Developpeur front-end React. Réécriture du site en ReactJs, création d'un CRM complet (market place + gestion utilisateurs)</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2017</div><div>à décembre 2017</div></div>
                                    <div>
                                        <b>Blupods Europe</b>
                                        <p>Stagiaire développeur front-end Angular 4 + Typescript. Réécriture du proof of concept (codé en AngularJs) vers un site web fonctionnel et maintenable ainsi qu'ajout de fonctionnalités en Angular4</p>
                                    </div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div><div>D'Avril 2014</div><div>à juin 2014</div></div>
                                    <div>
                                        <b>Association Française contre la Myopathie</b>
                                        <p>Stagiaire technicien support informatique. Suivi des utilisateurs et prise en charge des problèmes informatiques, tests de mise en place d'un systeme d'exploitation de remplacement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CvTitleCategory comp={<SchoolIcon />} title={'FORMATION'} />
                            <div className="cv-column-content">
                                <div className="cv-column-content-item">
                                    <div>Depuis 2015</div>
                                    <div><b>Étudiant à l'école 42</b><p>(<a href="https://www.42.fr" target="_blank">www.42.fr</a>)</p></div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div>2014</div>
                                    <div><b>Niveau DUT Genie Électrique et Informatique Industrielle</b><p>(IUT Sénart Fontainebleau UPEC)</p></div>
                                </div>
                                <div className="cv-column-content-item">
                                    <div>2012</div>
                                    <div><b>BAC Scientifique option Sciences de l'ingénieur</b><p>(Lycée Rosa Parks à Montgeron)</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}