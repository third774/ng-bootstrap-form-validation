export default {
    entry: 'dist/bootstrap-form-validation.module.js',
    dest: 'dist/angular-bootstrap-form-validation.bundle.js',
    format: 'umd',
    moduleName: 'angular-bootstrap-form-validation',
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ],
    onwarn: warning => {
        var skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
}
;
