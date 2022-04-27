import { InputProps } from '../../components/Input'


export const inputDefault: Partial<InputProps> = {
    id:"test",
    name: "first-name",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
}

export const inputPhone: Partial<InputProps> = {
    id:"test",
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Phone Number",
}

export const inputDate: Partial<InputProps> = {
    id:"test",
    name: "date",
    type: "date",
    label: "Date",
    min: '2022-04-26'
}

export const inputError: Partial<InputProps> = {
    id:"test",
    name: "first-name",
    type: "text",
    label: "First Name",
    placeholder: "First Name",
    isRequired: true,
    requiredMessage: 'Please fill in the form',
    errors: {
        "first-name": {
            types: {
                required: 'Please fill in the form'
            }
        } 
    }
}

export const formDataContactUS = {
    sections: [
        {
            label: 'Contact Us',
            rows: [
                {
                    fields: [
                        {
                            id:"1",
                            type: 'select',
                            span: 'half',
                            name: 'pronoun',
                            label: "Pronoun",
                            placeholder: "Select",
                            isRequired: false,
                            options: [
                                {
                                    label: 'I',
                                    value: 'i'
                                },
                                {
                                    label: 'She',
                                    value: 'she'
                                },
                                {
                                    label: 'He',
                                    value: 'he'
                                },
                                {
                                    label: 'We',
                                    value: 'we'
                                },
                                {
                                    label: 'It',
                                    value: 'it'
                                }
                            ]
                        },
                    ]
                },
                {
                    fields: [
                        {
                            id:"2",
                            type: 'text',
                            span: 'half',
                            name: 'first-name',
                            label: "First Name",
                            placeholder: "First Name",
                            isRequired: true,
                            requiredMessage: 'Please enter First Name',
                        },
                        {
                            id:"3",
                            type: 'text',
                            span: 'half',
                            name: 'last-name',
                            label: "Last Name",
                            placeholder: "Last Name",
                            isRequired: true,
                            requiredMessage: 'Please enter First Name',
                            minLength: {
                                value: 2,
                                message: 'Must have at least 2'
                            },
                            // pattern: {
                            //     value: new RegExp('/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/'),
                            //     message: 'Phone number'
                            // }
                        }
                    ]
                }
            ]
        }
    ]
};