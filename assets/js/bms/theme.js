if (!global || !global._babelPolyfill) {
    require('babel-polyfill');
}
let Specialty = require('./specialty');
let Trials = require('./trials');
let VideoModal = require('../components/video-modal');

require('bootstrap');
(function(t){var e=function(){try{return!!Symbol.iterator}catch(e){return false}};var r=e();var n=function(t){var e={next:function(){var e=t.shift();return{done:e===void 0,value:e}}};if(r){e[Symbol.iterator]=function(){return e}}return e};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};var a=function(){var a=function(e){Object.defineProperty(this,"_entries",{writable:true,value:{}});var t=typeof e;if(t==="undefined"){}else if(t==="string"){if(e!==""){this._fromString(e)}}else if(e instanceof a){var r=this;e.forEach(function(e,t){r.append(t,e)})}else if(e!==null&&t==="object"){if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){var i=e[n];if(Object.prototype.toString.call(i)==="[object Array]"||i.length!==2){this.append(i[0],i[1])}else{throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")}}}else{for(var o in e){if(e.hasOwnProperty(o)){this.append(o,e[o])}}}}else{throw new TypeError("Unsupported input's type for URLSearchParams")}};var e=a.prototype;e.append=function(e,t){if(e in this._entries){this._entries[e].push(String(t))}else{this._entries[e]=[String(t)]}};e.delete=function(e){delete this._entries[e]};e.get=function(e){return e in this._entries?this._entries[e][0]:null};e.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};e.has=function(e){return e in this._entries};e.set=function(e,t){this._entries[e]=[String(t)]};e.forEach=function(e,t){var r;for(var n in this._entries){if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var i=0;i<r.length;i++){e.call(t,r[i],n,this)}}}};e.keys=function(){var r=[];this.forEach(function(e,t){r.push(t)});return n(r)};e.values=function(){var t=[];this.forEach(function(e){t.push(e)});return n(t)};e.entries=function(){var r=[];this.forEach(function(e,t){r.push([t,e])});return n(r)};if(r){e[Symbol.iterator]=e.entries}e.toString=function(){var r=[];this.forEach(function(e,t){r.push(i(t)+"="+i(e))});return r.join("&")};t.URLSearchParams=a};var s=function(){try{var e=t.URLSearchParams;return new e("?a=1").toString()==="a=1"&&typeof e.prototype.set==="function"}catch(e){return false}};if(!s()){a()}var f=t.URLSearchParams.prototype;if(typeof f.sort!=="function"){f.sort=function(){var r=this;var n=[];this.forEach(function(e,t){n.push([t,e]);if(!r._entries){r.delete(t)}});n.sort(function(e,t){if(e[0]<t[0]){return-1}else if(e[0]>t[0]){return+1}else{return 0}});if(r._entries){r._entries={}}for(var e=0;e<n.length;e++){this.append(n[e][0],n[e][1])}}}if(typeof f._fromString!=="function"){Object.defineProperty(f,"_fromString",{enumerable:false,configurable:false,writable:false,value:function(e){if(this._entries){this._entries={}}else{var r=[];this.forEach(function(e,t){r.push(t)});for(var t=0;t<r.length;t++){this.delete(r[t])}}e=e.replace(/^\?/,"");var n=e.split("&");var i;for(var t=0;t<n.length;t++){i=n[t].split("=");this.append(o(i[0]),i.length>1?o(i[1]):"")}}})}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(h){var e=function(){try{var e=new h.URL("b","http://a");e.pathname="c%20d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var t=function(){var t=h.URL;var e=function(e,t){if(typeof e!=="string")e=String(e);var r=document,n;if(t&&(h.location===void 0||t!==h.location.href)){r=document.implementation.createHTMLDocument("");n=r.createElement("base");n.href=t;r.head.appendChild(n);try{if(n.href.indexOf(t)!==0)throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var i=r.createElement("a");i.href=e;if(n){r.body.appendChild(i);i.href=i.href}if(i.protocol===":"||!/:/.test(i.href)){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i});var o=new h.URLSearchParams(this.search);var a=true;var s=true;var f=this;["append","delete","set"].forEach(function(e){var t=o[e];o[e]=function(){t.apply(o,arguments);if(a){s=false;f.search=o.toString();s=true}}});Object.defineProperty(this,"searchParams",{value:o,enumerable:true});var c=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:false,configurable:false,writable:false,value:function(){if(this.search!==c){c=this.search;if(s){a=false;this.searchParams._fromString(this.search);a=true}}}})};var r=e.prototype;var n=function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:true})};["hash","host","hostname","port","protocol"].forEach(function(e){n(e)});Object.defineProperty(r,"search",{get:function(){return this._anchorElement["search"]},set:function(e){this._anchorElement["search"]=e;this._updateSearchParams()},enumerable:true});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e;this._updateSearchParams()},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true}});e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};h.URL=e};if(!e()){t()}if(h.location!==void 0&&!("origin"in h.location)){var r=function(){return h.location.protocol+"//"+h.location.hostname+(h.location.port?":"+h.location.port:"")};try{Object.defineProperty(h.location,"origin",{get:r,enumerable:true})}catch(e){setInterval(function(){h.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);

(function ($) {
    let BMSTheme = {
        /**
         * Initialize the theme codes.
         */
        init: function() {
            this.cacheElements();
            this.bindEvents();

            // For pipeline page filters
            if($("body").attr("data-page") == "pipeline"){
                let self = this;
                this.specialty = {};
                if($('#trialList').length === 0){
                    this.dom.pipelineTab.find("ul.tab-thumb li").each(function(){
                        var tabItem = $(this).find("a").attr("href");
                        let specialty = tabItem.slice(1);
                        console.log(tabItem);
                        self.specialty[specialty] = new Specialty({
                            container: $(tabItem)
                        });
                    });
                }else{
                    self.specialty['trialList'] = new Trials({
                        container: $('#trialList')
                    });
                }
            }

			if($('body').hasClass('bms-resource')) {
                VideoModal();
            }
            
        },

        /**
         * Cache elements we're referencing
         */
        cacheElements: function() {
            this.dom = {
                window: $(window),
                document: $(document),
                body: $('body'),
                pillsLink: $('.filterPills .pillsLink'),
                filterPillsDropdown: $('.filterPillsDropdown'),
                mobileFilterPill: $('.filterByBx .filterMobPill'),
                mobileCancelFilter: $('.filterByBx .mobButton .mobileFilter'),
                backToTop: $('#backToTop'),
                pipelineTab: $(".pipelineTab"),
                scrollPosTop:0,
            };
        },

        bindEvents: function() {
            let $this = this;

            this.dom.pillsLink.on('click', function(e) {
                e.stopPropagation();
                $this.filterPillClick($(this))
            });

            this.dom.filterPillsDropdown.on('click', function(e) { e.stopPropagation(); });
            this.dom.document.on('click', function() { $this.documentClick() });
            this.dom.mobileFilterPill.on('click', function() {$this.mobFilterPillClick($(this))});
            this.dom.mobileCancelFilter.on('click', function() {$this.mobFilterCancel($(this))});
            this.dom.backToTop.on('click', function() {$this.backToTopClick()});

            $.fn.isInViewport = function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
            
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
            
                return elementBottom > viewportTop && elementTop < viewportBottom;
            };

            this.dom.window.scroll(function() {
                if ($(this).scrollTop() > 270) {
                    $('#backToTop').show();
                }else{
                    $('#backToTop').hide();
                }

                if($("footer").isInViewport()){
                    $('#backToTop').addClass('footerVisible');
                }else{
                    $('#backToTop').removeClass('footerVisible');
                }
            });

            this.dom.window.resize(function(){
                if( $(window).width() < 768 ) {
                    return;
                }

                $('.filterByBx .filterMobPill').click(function(){
                    $(this).parents('.filterByBx').find('.filterPills').slideDown();
                });
            });
        },

        filterPillClick : function(ele) {
            if(ele.hasClass('active')){
                this.dom.pillsLink.removeClass('active');
                this.dom.pillsLink.parents('.filterPills').find('.filterPillsDropdown').slideUp();
            }else{
                this.dom.pillsLink.removeClass('active');
                this.dom.pillsLink.parents('.filterPills').find('.filterPillsDropdown').slideUp();
                ele.addClass('active');
                ele.parents('li').find('.filterPillsDropdown').slideDown();
            }
            return false;
        },

        documentClick : function(){
            let $this = this;
            if($(window).width()>=768){
                console.log("go back up");
                $(".filterPillsDropdown").slideUp('slow', function() {
                    // $(".filterPillsDropdown").slideUp('slow');
                    $this.dom.pillsLink.removeClass('active');
                });
            }
        },
        mobFilterPillClick : function(ele){
             this.scrollPosTop = $(document).scrollTop();
             $("html, body").css("overflow","hidden");
             $("body").css({"position":"fixed","top": -(this.scrollPosTop)});
             ele.parents('.filterByBx').find('.filterPills').slideDown();
        },
        mobFilterCancel : function(ele){
            $("html, body").css("overflow","scroll");
            $("body").css({"position":"relative","top":""});
            $('html, body').animate({scrollTop: this.scrollPosTop}, 0);
            ele.parents('.filterByBx').find('.filterPills').slideUp();
        },
        backToTopClick : function(){
            $('html, body').animate({scrollTop: '0px'}, 1000);
        }
        
    };

    $(document).ready(function() {
        BMSTheme.init();
    });

}(jQuery));