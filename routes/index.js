var express = require('express');
var router = express.Router();
var fs = require('fs');
var marked = require('marked');
var highlight = require('highlight.js');
var pb = require('pygmentize-bundled');
var _ = require('lodash');
var benchmark = require('benchmark');


var path = './build/index.html';

marked.setOptions({
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});




/* GET home page. */
router.get('/', function(req, res, next) {

    var builed = fs.existsSync(path);
    if (builed) {
        console.log(1);
        var html = fs.readFileSync(path,{
            encoding:'utf-8'
        });
        res.send(html);
        return false;
    } 
    var text = fs.readFileSync('./lodash.md', {
        encoding: 'utf-8'
    });
    text = marked(text);
    var arr = [];
    var text = text.replace(/<\!--([\s\S]*?)-->/ig, (item, p1) => {
        p1 = _.trim(p1);
        var items = p1.split(' ');
        var string = '<';
        items.forEach((item, index) => {
            string += item + " ";
        })
        string = _.trim(string);
        string += '>';
        return string;
    });

    text = text.replace(/<code>([\s\S]*?)<\/code>/ig, (item, p1) => {
        var arr = p1.split('.');
        var str = '';
        if (arr.length > 1) {
            arr.forEach((item, index) => {
                if (index > 0) {
                    var append = false;
                    item = item.replace(/([\[\]\(\),\{\}=]+?)|(\d+?)/ig, (item, p1, p2) => {
                        var char = p1;
                        if (!append) {
                            item += `</span>`;
                            append = true;
                        }
                        var className = 'br0';
                        switch (p1) {
                            case ',':
                                className = 'sy0';
                                break;
                            case '=':
                                className = 'sy0';
                                break;
                                defalut:
                                    break;
                        }
                        if (!_.isUndefined(p2)) {
                            className = 'nu0';
                            char = p2;
                        }
                        return `<span class="${className}">${char}</span>`;
                    });

                    item = `.<span class="me1">${item}`;
                    arr[index] = item;
                }
            });
            arr.forEach((item, index) => {
                str += item;
            });
        } else {
            str = p1;
        }

        return `<code>${str}</code>`;


    });

    res.render('index', {
        title: 'lodash',
        arr: arr,
        'text': text
    }, function(err,html) {
        fs.writeFileSync(path,html);
        res.send(html);
    });
});

module.exports = router;
