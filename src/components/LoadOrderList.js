import loadOrder from './loadOrderData';
import { useState } from 'react';

function LoadOrderList() {
    const [list] = useState(loadOrder)
    return (
        <div id="loadOrderList_wrapper">
            <div id="loadOrder_header">
                <h1>Fallout: New Vegas <small>Load Order</small></h1>
                <h2>Featuring A World of Pain and Fallout: The Frontier</h2>
                <p>{list.length} Mods not including those merged into bashed patch.</p>
                <p>Mods are listed in load order.</p>
            </div>
            {list.map((loadItem, index) => (
                <div className="loadOrderItem" key={index} >
                <hr/>
                    <span className="textWrapper">
                        <p>{index + 1}) {loadItem}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default LoadOrderList