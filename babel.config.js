module.exports = function (api) {

    const nativePresets = [
        'babel-preset-expo'
    ];

    const webPresets = [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ];

    return {
        presets: api.caller(caller => caller === 'babel-loader')
            ? webPresets
            : nativePresets
    };
};
