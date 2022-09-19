import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const paypalID = `paypal-donate-${uuidv4()}`

const PaypalDonate = () => {
    useEffect(() => {
        // PayPal.Donation.Button({
        //     env: 'sandbox',
        //     hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
        //     // business: 'YOUR_EMAIL_OR_PAYERID',
        //     image: {
        //         src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
        //         title: 'PayPal - The safer, easier way to pay online!',
        //         alt: 'Donate with PayPal button'
        //     },
        //     onComplete: function (params) {
        //         // Your onComplete handler
        //     },
        // }).render(paypalID)
    }, [])
    return <div id={paypalID}></div>
}

export default PaypalDonate
