/** layui-v1.0.8 MIT License By http://www.layui.com */
 ;layui.define("jquery",function(i){"use strict";var t=layui.jquery,a=(layui.hint(),layui.device()),e="element",n="layui-this",l="layui-show",s=function(){this.config={}};s.prototype.set=function(i){var a=this;return t.extend(!0,a.config,i),a},s.prototype.on=function(i,t){return layui.onevent(e,i,t)},s.prototype.tabAdd=function(i,a){var e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(".layui-tab-title"),l=e.children(".layui-tab-content");return n.append("<li>"+(a.title||"unnaming")+"</li>"),l.append('<div class="layui-tab-item">'+(a.content||"")+"</div>"),y.tabAuto(),this},s.prototype.tabDelete=function(i,a){var e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(".layui-tab-title").find(">li").eq(a);return y.tabDelete(null,n),this},s.prototype.tabChange=function(i,a){var e=t(".layui-tab[lay-filter="+i+"]"),n=e.children(".layui-tab-title").find(">li").eq(a);return y.tabClick(null,a,n),this},s.prototype.progress=function(i,a){var e="layui-progress",n=t("."+e+"[lay-filter="+i+"]"),l=n.find("."+e+"-bar"),s=l.find("."+e+"-text");return l.css("width",a),s.text(a),this};var o=".layui-nav",r="layui-nav-item",c="layui-nav-bar",u="layui-nav-tree",d="layui-nav-child",h="layui-nav-more",f="layui-anim layui-anim-upbit",y={tabClick:function(i,a,s){var o=s||t(this),a=a||o.index(),r=o.parents(".layui-tab"),c=r.children(".layui-tab-content").children(".layui-tab-item"),u=r.attr("lay-filter");o.addClass(n).siblings().removeClass(n),c.eq(a).addClass(l).siblings().removeClass(l),layui.event.call(this,e,"tab("+u+")",{elem:r,index:a})},tabDelete:function(i,a){var e=a||t(this).parent(),l=e.index(),s=e.parents(".layui-tab"),o=s.children(".layui-tab-content").children(".layui-tab-item");e.hasClass(n)&&(e.next()[0]?y.tabClick.call(e.next()[0],null,l+1):e.prev()[0]&&y.tabClick.call(e.prev()[0],null,l-1)),e.remove(),o.eq(l).remove()},tabAuto:function(){var i="layui-tab-more",e="layui-tab-bar",n="layui-tab-close",l=this;t(".layui-tab").each(function(){var s=t(this),o=s.children(".layui-tab-title"),r=(s.children(".layui-tab-content").children(".layui-tab-item"),'lay-stope="tabmore"'),c=t('<span class="layui-unselect layui-tab-bar" '+r+"><i "+r+' class="layui-icon">&#xe61a;</i></span>');if(l===window&&8!=a.ie&&y.hideTabMore(!0),s.attr("lay-allowClose")&&o.find("li").each(function(){var i=t(this);if(!i.find("."+n)[0]){var a=t('<i class="layui-icon layui-unselect '+n+'">&#x1006;</i>');a.on("click",y.tabDelete),i.append(a)}}),o.prop("scrollWidth")>o.outerWidth()+1){if(o.find("."+e)[0])return;o.append(c),c.on("click",function(t){o[this.title?"removeClass":"addClass"](i),this.title=this.title?"":"收缩"})}else o.find("."+e).remove()})},hideTabMore:function(i){var a=t(".layui-tab-title");i!==!0&&"tabmore"===t(i.target).attr("lay-stope")||(a.removeClass("layui-tab-more"),a.find(".layui-tab-bar").attr("title",""))},clickThis:function(){var i=t(this),a=i.parents(o),l=a.attr("lay-filter");i.find("."+d)[0]||(a.find("."+n).removeClass(n),i.addClass(n),layui.event.call(this,e,"nav("+l+")",i))},clickChild:function(){var i=t(this),a=i.parents(o),l=a.attr("lay-filter");a.find("."+n).removeClass(n),i.addClass(n),layui.event.call(this,e,"nav("+l+")",i)},showChild:function(){var i=t(this),a=i.parents(o),e=i.parent(),n=i.siblings("."+d);a.hasClass(u)&&(n.removeClass(f),e["none"===n.css("display")?"addClass":"removeClass"](r+"ed"))}};s.prototype.init=function(i){var e={tab:function(){y.tabAuto.call({})},nav:function(){var i,e,n,s=200,p=function(o,r){var c=t(this),y=c.find("."+d);r.hasClass(u)?o.css({top:c.position().top,height:c.children("a").height(),opacity:1}):(y.addClass(f),o.css({left:c.position().left+parseFloat(c.css("marginLeft")),top:c.position().top+c.height()-5}),i=setTimeout(function(){o.css({width:c.width(),opacity:1})},a.ie&&a.ie<10?0:s),clearTimeout(n),"block"===y.css("display")&&clearTimeout(e),e=setTimeout(function(){y.addClass(l),c.find("."+h).addClass(h+"d")},300))};t(o).each(function(){var a=t(this),o=t('<span class="'+c+'"></span>'),f=a.find("."+r);a.find("."+c)[0]||(a.append(o),f.on("mouseenter",function(){p.call(this,o,a)}).on("mouseleave",function(){a.hasClass(u)||(clearTimeout(e),e=setTimeout(function(){a.find("."+d).removeClass(l),a.find("."+h).removeClass(h+"d")},300))}),a.on("mouseleave",function(){clearTimeout(i),n=setTimeout(function(){a.hasClass(u)?o.css({height:0,top:o.position().top+o.height()/2,opacity:0}):o.css({width:0,left:o.position().left+o.width()/2,opacity:0})},s)})),f.each(function(){var i=t(this),a=i.find("."+d);if(a[0]&&!i.find("."+h)[0]){var e=i.children("a");e.append('<span class="'+h+'"></span>')}i.off("click",y.clickThis).on("click",y.clickThis),i.children("a").off("click",y.showChild).on("click",y.showChild),a.children("dd").off("click",y.clickChild).on("click",y.clickChild)})})},breadcrumb:function(){var i=".layui-breadcrumb";t(i).each(function(){var i=t(this),a=i.attr("lay-separator")||">",e=i.find("a");e.find(".layui-box")[0]||(e.each(function(i){i!==e.length-1&&t(this).append('<span class="layui-box">'+a+"</span>")}),i.css("visibility","visible"))})},progress:function(){var i="layui-progress";t("."+i).each(function(){var a=t(this),e=a.find(".layui-progress-bar"),n=e.attr("lay-percent");e.css("width",n),a.attr("lay-showPercent")&&setTimeout(function(){e.html('<span class="'+i+'-text">'+Math.round(e.width()/a.width()*100)+"%</span>")},350)})}};return layui.each(e,function(i,t){t()})};var p=new s,b=t(document);p.init();var v=".layui-tab-title li";b.on("click",v,y.tabClick),b.on("click",y.hideTabMore),t(window).on("resize",y.tabAuto),i(e,function(i){return p.set(i)})});