import {
    PayPalScriptProvider,
    PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PurchaseUnit } from "@paypal/paypal-js/types/apis/orders"
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons"
import PayPalBtnWrapper from './PayPalBtnWrapper';

export interface PayPalProps {
    brand_name?: string;
    spinner?: boolean;
    currency?: string;
    disableBtn?: boolean;
    clientId: string;
    fundingSources?: string[];
    purchaseUnit: PurchaseUnit[];
    style: PayPalButtonsComponentProps['style'][];
    onApprove?: (data: OnApproveData) => void;
    onError?: PayPalButtonsComponentProps['onError'];
    onCancel?: PayPalButtonsComponentProps['onCancel'];
}

function PayPal({
    brand_name,
    currency = "USD",
    style = [{ layout: "vertical" }],
    spinner = false,
    disableBtn = false,
    clientId = "test",
    fundingSources = [undefined],
    purchaseUnit = [],
    onApprove,
    onError,
    onCancel
}: PayPalProps) {

    return (
        <div style={{ width: "100%" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": clientId,
                    components: "buttons",
                    currency
                }}
            >
                {
                    fundingSources.map((source, i) => (
                        <>
                            <PayPalBtnWrapper
                                key={source}
                                style={style[i]}
                                brand_name={brand_name}
                                onApprove={onApprove}
                                onError={onError}
                                onCancel={onCancel}
                                purchaseUnit={purchaseUnit}
                                disableBtn={disableBtn}
                                currency={currency}
                                showSpinner={spinner}
                                fundingSource={source}
                            />
                        </>
                    ))
                }

            </PayPalScriptProvider>
        </div>
    );
}

export default PayPal