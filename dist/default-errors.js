export var DEFAULT_ERRORS = [
    {
        error: 'required',
        format: function (label) { return label + " is required"; }
    },
    {
        error: 'pattern',
        format: function (label) { return label + " is invalid"; }
    },
    {
        error: 'minlength',
        format: function (label, error) { return label + " must be at least " + error.requiredLength + " characters"; }
    },
    {
        error: 'maxlength',
        format: function (label, error) { return label + " must be no longer than " + error.requiredLength + " characters"; }
    },
    {
        error: 'requiredTrue',
        format: function (label, error) { return label + " is required"; }
    },
    {
        error: 'email',
        format: function (label, error) { return "Invalid email address"; }
    }
];
//# sourceMappingURL=default-errors.js.map