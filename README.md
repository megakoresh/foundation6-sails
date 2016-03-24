# foundation-sails

a [Sails](http://sailsjs.org) application

##Usage:
You want to clone this to your PC, then cd into the directory. Then install dependencies
```
npm install
```
After that your usual
```
sails lift
```
And the default page will be Foundation 6 kitchen sink. Take note, that in keeping with Sails default configuration, both Foundation and motion-ui need to be included in the importer.scss. If you want to change this behaviour make sure to apply relevant imports and includes where needed, otherwise the styles won't be used. You can omit the full path, as it has been included in the grunt-sass configuration. For example to import foundation's slider you would simply do.
 ```
 @import 'components/slider.scss'
 ```
 All import paths by default consider `node_modules/foundation-sites/scss` and `node_modules\motion-ui\src` as root. I hope there won't be any directory name overlaps between those 2, which would break this behaviour. 
 This project is configured to use Jade.
##Generator
Hey, I made this into a generator so it's easier to use now (and doesn't force Jade on you, though in all honesty, we all swap ejs for something usable anyway).
[Here it is](https://www.npmjs.com/package/sails-generate-foundation)
