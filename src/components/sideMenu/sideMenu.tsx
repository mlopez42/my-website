import {Component} from "react";
import "./sideMenu.scss";
import {Link} from "react-router-dom"
import CvPersonalBlock from "../cvPersonnalBlock/cvPersonalBlock";

type MyProps = {
    sideStyle: number
}

export default class SideMenu extends Component<MyProps> {

    get sideMenu() {
        switch (this.props.sideStyle) {
            case 0:
                return  <div className="side-menu-blue">
                            <Link className="side-menu-blue-href" to="/" >Home</Link>
                            <Link className="side-menu-blue-href" to="/cv">Curriculum Vitae</Link>
                        </div>;
            case 1:
                return  <div className="side-menu-white-content">
                            <div className="side-menu-white">

                            </div>
                            <CvPersonalBlock />
                        </div>
        }
        return <div className="side-menu-blue">
                    <Link className="side-menu-blue-href" to="/" >Home</Link>
                    <Link className="side-menu-blue-href" to="/cv">Curriculum Vitae</Link>
                </div>;
    }

    render() {
       return (
       <div className={this.props.sideStyle === 0 ? "side-menu-container" : "side-menu-container-white"}>
           {this.sideMenu}
       </div>
       )
    }
}