import {Component} from "react";
import "./sideMenu.scss";

export default class SideMenu extends Component {

    render() {
       return (
        <div className="side-menu">
            <a className="side-menu-href" href="/cv">Curriculum Vitae</a>
            <a className="side-menu-href" href="/">Home</a>
        </div>
       )
    }
}