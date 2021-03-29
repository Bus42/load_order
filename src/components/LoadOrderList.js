import loadOrder from './loadOrderData';

function LoadOrderList(){
    return (
        <div id="loadOrderList_wrapper">
            <h1>Fallout: New Vegas <small>Load Order</small></h1>
            {loadOrder.map((loadItem, index) => (
                <div className="loadOrderItem" key={index} >
                    <span className="textWrapper">
                        <p>{loadItem}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default LoadOrderList