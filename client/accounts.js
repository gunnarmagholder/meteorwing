
// configure the special accounts user interface
// by setting up some extra fields and specifying constraints
// see:https://github.com/ianmartorell/meteor-accounts-ui-bootstrap-3/
accountsUIBootstrap3.setLanguage('de');
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'Vorname',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
            if (!value) {
                errorFunction("Gib bitte deinen Vornamen ein");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        fieldName: 'last-name',
        fieldLabel: 'Nachname',
        inputType: 'text',
        visible: true,
    },
    {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Geschlecht',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
            id: 1,                  // id suffix of the radio element
            label: 'Typ',          // label for the radio element
            value: 'm',              // value of the radio element, this will be saved.
            checked: 'checked'
        }, {
            id: 2,
            label: 'Mädel',
            value: 'f'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'Land',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Gib bitte das Land ein, in dem du wohnst',
        data: [{
            id: 1,
            label: 'Deutschland',
            value: 'de'
        }, {
            id: 2,
            label: 'United States',
            value: 'us',
        }],
        visible: true
    }
    ]
});

