import {
    PayPalScriptProvider,
    PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { PurchaseUnit } from "@paypal/paypal-js/types/apis/orders"
import { OnApproveData } from "@paypal/paypal-js/types/components/buttons"
import PayPalBtnWrapper from './PayPalBtnWrapper';

export interface PayPalProps {
    brandName?: string;
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
    onDisableClick?: () => void;
}

function PayPal({
    brandName,
    currency = "USD",
    style = [{ layout: "vertical" }],
    spinner = false,
    disableBtn = false,
    clientId = "test",
    fundingSources = [undefined],
    purchaseUnit = [],
    onApprove,
    onError,
    onCancel,
    onDisableClick
}: PayPalProps) {

    return (
        <div style={{
            display: 'grid',
            gap: '16px',
            width: "100%"
        }}>
            <PayPalScriptProvider
                options={{
                    "client-id": clientId,
                    components: "buttons",
                    currency
                }}
            >
                {
                    fundingSources.map((source, i) => (
                        <PayPalBtnWrapper
                            key={source}
                            style={style[i]}
                            brand_name={brandName}
                            onApprove={onApprove}
                            onError={onError}
                            onCancel={onCancel}
                            purchaseUnit={purchaseUnit}
                            disableBtn={disableBtn}
                            currency={currency}
                            showSpinner={spinner}
                            fundingSource={source}
                            onDisableClick={onDisableClick}
                        />
                    ))
                }

            </PayPalScriptProvider>
        </div>
    );
}

export default PayPal