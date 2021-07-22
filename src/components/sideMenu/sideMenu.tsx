import {Component} from "react";
import "./sideMenu.scss";
import {Link} from "react-router-dom"

export default class SideMenu extends Component {

    render() {
       return (
        <div className="side-menu">
            <Link className="side-menu-href" to="/" >Home</Link>
            <Link className="side-menu-href" to="/cv">Curriculum Vitae</Link>
        </div>
       )
    }
}