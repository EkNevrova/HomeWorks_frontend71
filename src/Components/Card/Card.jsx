import style from "./Card.module.scss"
import CSSModules from 'react-css-modules'

function Card(props) {
    
    let specialStyle;
    if (props.selected == false) {
       specialStyle = "tittle";
    } else {
       specialStyle = "tittle_selected";
    }
    
    return (            
        <div styleName="card_container">                      
            <div styleName={props.color}>
                <div styleName={specialStyle}>Безлимитный {props.price}</div>
                <div styleName="body">
                    <span styleName="currency">руб </span>
                    <span styleName="price">{props.price}</span>
                    <span styleName="period"> /мес</span>
                </div>
            </div>    
            <div styleName="speed">до {props.speed} Мбит/сек</div>
            <div styleName="info">Объем включенного<br/>
            трафика не ограничен</div>
        </div>
    );
}

export default CSSModules(Card, style)
