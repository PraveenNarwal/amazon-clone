import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotalGift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Checkout</button>

        </div>
    )
}

export default Subtotal