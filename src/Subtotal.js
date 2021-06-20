import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { SportsBasketball } from '@material-ui/icons'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'
import { useStateValue } from "./StateProvider";


function Subtotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotalGift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Checkout</button>

        </div>
    )
}

export default Subtotal
