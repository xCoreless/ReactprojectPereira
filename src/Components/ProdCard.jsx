import {Button} from "antd";

function ProdCard(props) {
    
    console.log (props)
    console.log (props.name)

    return (
        <div className="prod-card">
            <img src="https://picsum.photos/200" alt="img random" />
            <h3>{props.name}</h3>
            <button>Ver más</button>
       </div>
    )
}

export default ProdCard;