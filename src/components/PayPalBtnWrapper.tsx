import { useEffect } from 'react'
import {
    Box
} from "@chakra-ui/react"
import {
    PayPalButtons,
    usePayPalScriptReducer,
    PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PurchaseUnit } from "@paypal/paypal-js/types/apis/orders"
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js/types/components/buttons"

export interface PayPalBtnWrapperProps {
    brand_name?: string;
    currency?: string;
    showSpinner: boolean;
    disableBtn: boolean;
    fundingSource: string | undefined;
    purchaseUnit: PurchaseUnit[];
    style: PayPalButtonsComponentProps['style'];
    onApprove?: (data: OnApproveData) => void;
    onError?: PayPalButtonsComponentProps['onError'];
    onCancel?: PayPalButtonsComponentProps['onCancel'];
    onDisableClick?: () => void;
}

const PayPalBtnWrapper = ({
    brand_name,
    currency = "USD",
    showSpinner,
    disableBtn,
    fundingSource,
    purchaseUnit = [],
    style,
    onError,
    onCancel,
    onApprove,
    onDisableClick
}: PayPalBtnWrapperProps) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <Box sx={{
            div: {
                display: 'flex'
            }
        }}>
            <PayPalButtons
                style={style}
                disabled={disableBtn}
                forceReRender={[(purchaseUnit[0]?.amount?.value || '0'), currency, style]}
                fundingSource={fundingSource}
                onClick={() => {
                    if (disableBtn && onDisableClick) {
                        onDisableClick()
                    }
                }}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: purchaseUnit,
                            application_context: {
                                brand_name,
                                shipping_preference: 'NO_SHIPPING'
                            }
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data: OnApproveData, actions: OnApproveActions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        if (onApprove) onApprove(data)
                    });
                }}
                onError={onError}
                onCancel={onCancel}
            />
        </Box>
    </>
    );
}

export default PayPalBtnWrapper