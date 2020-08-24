import React, {Component} from "react";
import './TechnicalServiceHeader.scss'

class TechnicalServiceHeader extends Component {

    render() {

        const telnumber = "8 (800) 000-00-00";

        return (
            <div className="TechnicalServiceHeader__wrapper">
                <div className="telnumber">
                    {telnumber}
                </div>
                <div className="address">
                    01.01.1989 00:01 <br />г.Москва, Дмитровское шоссе, д.39
                </div>
            </div>
        )
    }

}

export default TechnicalServiceHeader;