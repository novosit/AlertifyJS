( function ( window ) {
    'use strict';
    
    /**
     * Keys enum
     * @type {Object}
     */
    var keys = {
        ENTER: 13,
        ESC: 27,
        F1: 112,
        F12: 123
    };
    /**
     * Default options 
     * @type {Object}
     */
    var defaults = {
        modal:true,
        basic:false,
        movable:true,
        resizable:true,
        closable:true,
        maximizable:true,
        pinnable:true,
        pinned:true,
        padding: true,
        overflow:true,
        maintainFocus:true,
        transition:'pulse',
        notifier:{
            delay:5,
            position:'bottom-right'
        },
        glossary:{
            title:'AlertifyJS',
            ok: 'OK',
            cancel: 'Cancel',
            acccpt: 'Accept',
            deny: 'Deny',
            confirm: 'Confirm',
            decline: 'Decline',
            close: 'Close',
            maximize: 'Maximize',
            restore: 'Restore',
        },
        theme:{
            input:'ajs-input',
            ok:'ajs-ok',
            cancel:'ajs-cancel',
        }
    };
    
    //holds open dialogs instances
    var openDialogs = [];

    /**
     * [Helper]  Adds the specified class(es) to the element.
     *
     * @element {node}      The element
     * @className {string}  One or more space-separated classes to be added to the class attribute of the element.
     * 
     * @return {undefined}
     */
    function addClass(element,classNames){
        element.className += ' ' + classNames;
    }
    
    /**
     * [Helper]  Removes the specified class(es) from the element.
     *
     * @element {node}      The element
     * @className {string}  One or more space-separated classes to be removed from the class attribute of the element.
     * 
     * @return {undefined}
     */
    function removeClass(element,classNames){
        var classes = classNames.split(' ');
        for(var x=0;x<classes.length;x+=1){
            element.className = element.className.replace(' ' + classes[x], '');
        }
    }

    /**
     * [Helper]  Checks if the document is RTL
     *
     * @return {Boolean} True if the document is RTL, false otherwise.
     */
    function isRightToLeft(){
        return window.getComputedStyle(window.document.body).direction === 'rtl';
    }
    /**
     * [Helper]  Get the document current scrollTop
     *
     * @return {Number} current document scrollTop value
     */
    function getScrollTop(){
        if (window.document && window.document.documentElement ) {
            return window.document.documentElement.scrollTop;
        }
        else if (window.document && window.document.body) {
            return window.document.body.scrollTop;
        }
        else {
            return 0;
        }
    }

    /**
     * [Helper]  Get the document current scrollLeft
     *
     * @return {Number} current document scrollLeft value
     */
    function getScrollLeft(){
        if (window.document && window.document.documentElement ) {
            return window.document.documentElement.scrollLeft;
        }
        else if (window.document && window.document.body) {
            return window.document.body.scrollLeft;
        }
        else {
            return 0;
        }
    }
