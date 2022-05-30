import { InputProps } from '../../components/Input'

export const inputDefault: Partial<InputProps> = {
  id: 'test',
  name: 'first-name',
  type: 'text',
  label: 'First Name',
  placeholder: 'First Name',
}

export const inputPhone: Partial<InputProps> = {
  id: 'test',
  name: 'phone',
  type: 'tel',
  label: 'Phone Number',
  placeholder: 'Phone Number',
}

export const inputDate: Partial<InputProps> = {
  id: 'test',
  name: 'date',
  type: 'date',
  label: 'Date',
  min: '2022-04-26',
}

export const inputError: Partial<InputProps> = {
  id: 'test',
  name: 'first-name',
  type: 'text',
  label: 'First Name',
  placeholder: 'First Name',
  isRequired: true,
  requiredMessage: 'Please fill in the form',
  errors: {
    'first-name': {
      types: {
        required: 'Please fill in the form',
      },
    },
  },
}

export const formDataContactUS = {
  label: 'contact us form',
  action: 'contact-us',
  sections: [
    {
      label: 'Contact Us',
      rows: [
        {
          fields: [
            {
              id: '1',
              type: 'select',
              span: 'half',
              name: 'pronoun',
              label: 'Pronoun',
              placeholder: 'Select',
              isRequired: false,
              options: [
                {
                  label: 'I',
                  value: 'i',
                },
                {
                  label: 'She',
                  value: 'she',
                },
                {
                  label: 'He',
                  value: 'he',
                },
                {
                  label: 'We',
                  value: 'we',
                },
                {
                  label: 'It',
                  value: 'it',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '2',
              type: 'text',
              span: 'full',
              name: 'first-name',
              label: 'First Name',
              placeholder: 'First Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
            },
          ],
        },
        {
          fields: [
            {
              id: '3',
              type: 'text',
              span: 'full',
              name: 'last-name',
              label: 'Last Name',
              placeholder: 'Last Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
              minLength: {
                value: 2,
                message: 'Must have at least 2',
              },
            },
          ],
        },
        {
          fields: [
            {
              id: '3',
              type: 'text',
              span: 'full',
              name: 'subject',
              label: 'Subject',
              placeholder: 'Subject',
              isRequired: true,
              requiredMessage: 'Please enter a subject',
            },
          ],
        },
        {
          fields: [
            {
              id: '3',
              type: 'textarea',
              span: 'full',
              name: 'message',
              label: 'Message',
              placeholder: 'Leave your message',
              isRequired: true,
              requiredMessage: 'Please enter a message',
            },
          ],
        },
      ],
    },
  ],
}

export const fileAComplaint = {
  label: 'complaint form',
  action: 'complaint',
  sections: [
    {
      label: 'Contact Information',
      rows: [
        {
          fields: [
            {
              id: '1',
              type: 'select',
              span: 'half',
              name: 'pronoun',
              label: 'Pronoun',
              placeholder: 'Select a Pronoun',
              isRequired: false,
              options: [
                {
                  label: 'I',
                  value: 'i',
                },
                {
                  label: 'She',
                  value: 'she',
                },
                {
                  label: 'He',
                  value: 'he',
                },
                {
                  label: 'We',
                  value: 'we',
                },
                {
                  label: 'It',
                  value: 'it',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '2',
              type: 'text',
              span: 'half',
              name: 'first-name',
              label: 'First Name',
              placeholder: 'First Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
            },
            {
              id: '3',
              type: 'text',
              span: 'half',
              name: 'last-name',
              label: 'Last Name',
              placeholder: 'Last Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
              minLength: {
                value: 2,
                message: 'Must have at least 2',
              },
            },
          ],
        },
        {
          fields: [
            {
              id: '4',
              type: 'text',
              span: 'full',
              name: 'address',
              label: 'Address',
              placeholder: 'Address',
              isRequired: true,
              requiredMessage: 'Please enter Address',
              minLength: {
                value: 2,
                message: 'Must have at least 2',
              },
            },
          ],
        },
        {
          fields: [
            {
              id: '5',
              type: 'text',
              span: 'full',
              name: 'address2',
              label: 'Address Line 2',
              placeholder: 'Address Line 2',
            },
          ],
        },
        {
          fields: [
            {
              id: '6',
              type: 'text',
              span: 'half',
              name: 'city',
              label: 'City',
              placeholder: 'City',
              isRequired: true,
              requiredMessage: 'Please enter City',
            },
            {
              id: '7',
              type: 'select',
              span: 'half',
              name: 'state',
              label: 'State',
              placeholder: 'Select a State',
              requiredMessage: 'Please select the state',
              isRequired: true,
              options: [
                {
                  label: 'Vermont',
                  value: 'VT',
                },
                {
                  label: 'New York',
                  value: 'NY',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '8',
              type: 'text',
              span: 'half',
              name: 'zipCode',
              label: 'Zip Code',
              placeholder: 'Zip Code',
              isRequired: true,
              requiredMessage: 'Please enter Zip Code',
            },
            {
              id: '9',
              type: 'tel',
              span: 'half',
              name: 'phone',
              label: 'Phone',
              placeholder: 'Phone',
              isRequired: true,
              requiredMessage: 'Please enter a phone number',
            },
          ],
        },
        {
          fields: [
            {
              id: '10',
              type: 'email',
              span: 'full',
              name: 'email',
              label: 'Email',
              placeholder: 'Email',
              isRequired: true,
              requiredMessage: 'Please enter a email',
            },
          ],
        },
      ],
    },
    {
      label: 'Are you currently being represented by an attorney?',
      rows: [
        {
          fields: [
            {
              id: '1-1',
              type: 'radio',
              span: 'full',
              name: 'options',
              isRequired: true,
              requiredMessage: 'Please select one',
              radios: [
                {
                  label: 'Yes',
                  value: 'yes',
                },
                {
                  label: 'No',
                  value: 'No',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '1-2',
              type: 'text',
              span: 'full',
              name: 'attorney',
              label: 'Name Of Attorney',
              placeholder: 'Name of Attorney',
              isRequired: false,
            },
          ],
        },
      ],
    },
  ],
}

export const checkout = {
  label: 'checkout',
  action: 'callback',
  sections: [
    {
      label: 'Member Information',
      rows: [
        {
          fields: [
            {
              id: '1',
              type: 'select',
              span: 'half',
              name: 'pronoun',
              label: 'Pronoun',
              placeholder: 'Select a Pronoun',
              isRequired: false,
              options: [
                {
                  label: 'I',
                  value: 'i',
                },
                {
                  label: 'She',
                  value: 'she',
                },
                {
                  label: 'He',
                  value: 'he',
                },
                {
                  label: 'We',
                  value: 'we',
                },
                {
                  label: 'It',
                  value: 'it',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '2',
              type: 'text',
              span: 'half',
              name: 'first-name',
              label: 'First Name',
              placeholder: 'First Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
            },
            {
              id: '3',
              type: 'text',
              span: 'half',
              name: 'last-name',
              label: 'Last Name',
              placeholder: 'Last Name',
              isRequired: true,
              requiredMessage: 'Please enter First Name',
              minLength: {
                value: 2,
                message: 'Must have at least 2',
              },
            },
          ],
        },
        {
          fields: [
            {
              id: '4',
              type: 'text',
              span: 'full',
              name: 'address',
              label: 'Address',
              placeholder: 'Address',
              isRequired: true,
              requiredMessage: 'Please enter Address',
              minLength: {
                value: 2,
                message: 'Must have at least 2',
              },
            },
          ],
        },
        {
          fields: [
            {
              id: '5',
              type: 'text',
              span: 'full',
              name: 'address2',
              label: 'Address Line 2',
              placeholder: 'Address Line 2',
            },
          ],
        },
        {
          fields: [
            {
              id: '6',
              type: 'text',
              span: 'half',
              name: 'city',
              label: 'City',
              placeholder: 'City',
              isRequired: true,
              requiredMessage: 'Please enter City',
            },
            {
              id: '7',
              type: 'select',
              span: 'half',
              name: 'state',
              label: 'State',
              placeholder: 'Select a State',
              requiredMessage: 'Please select the state',
              isRequired: true,
              options: [
                {
                  label: 'Vermont',
                  value: 'VT',
                },
                {
                  label: 'New York',
                  value: 'NY',
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              id: '8',
              type: 'text',
              span: 'half',
              name: 'zipCode',
              label: 'Zip Code',
              placeholder: 'Zip Code',
              isRequired: true,
              requiredMessage: 'Please enter Zip Code',
            },
            {
              id: '9',
              type: 'tel',
              span: 'half',
              name: 'phone',
              label: 'Phone',
              placeholder: 'Phone',
              isRequired: true,
              requiredMessage: 'Please enter a phone number',
            },
          ],
        },
        {
          fields: [
            {
              id: '10',
              type: 'email',
              span: 'full',
              name: 'email',
              label: 'Email',
              placeholder: 'Email',
              isRequired: true,
              requiredMessage: 'Please enter a email',
            },
          ],
        },
      ],
    },
    {
      label: 'Committee Assignment',
      rows: [
        {
          fields: [
            {
              id: '1-1',
              type: 'checkbox',
              span: 'full',
              name: 'educationCommittee',
              label: 'Sign me up for the Education Committee.',
              heading:
                'Education. The Committee on Education seeks to eliminate segregation and other discriminatory practices in public education.',
              defaultChecked: true,
            },
          ],
        },
        {
          fields: [
            {
              id: '1-2',
              type: 'checkbox',
              span: 'full',
              name: 'attorney',
              label: 'Sign me up for the Community Coordination Committee.',
              heading:
                'Community Coordination. The Committee on Community Coordination enlists the support of other community organizations on issues affecting the interests of African Americans and other communities of color',
              defaultChecked: true,
            },
          ],
        },
        {
          fields: [
            {
              id: '1-3',
              type: 'checkbox',
              span: 'full',
              name: 'attorney',
              label: 'Sign me up for the Health Committee.',
              heading:
                'Health. The Health Committee shall advocate for equal access to health education, care, treatment, and research for all Americans with a focus on the health needs of African-Americans.',
              defaultChecked: null,
            },
          ],
        },
      ],
    },
  ],
}
