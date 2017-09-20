## Usage

In your webpack config:
```
var ExtractFromZipPlugin = require('webpack-extract-from-zip-plugin');

module.exports = {
    resolve:{
        plugins:[
            ExtractFromZipPlugin,
        ]
    },
}
```

Within a module:
```
Import YinYangIcon from 'file-loader!./icons.zip?file=yin-yang.svg'
```
