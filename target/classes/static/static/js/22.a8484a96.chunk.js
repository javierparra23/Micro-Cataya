"use strict";(self.webpackChunkcataya=self.webpackChunkcataya||[]).push([[22],{5022:function(t,e,a){a.r(e),a.d(e,{createSwipeBackGesture:function(){return i}});var n=a(1811),r=a(7909),i=function(t,e,a,i,u){var c=t.ownerDocument.defaultView;return(0,r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:a,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,a=c.innerWidth,r=e/a,i=t.velocityX,o=a/2,s=i>=0&&(i>.2||t.deltaX>o),d=(s?1-r:r)*a,f=0;if(d>5){var h=d/Math.abs(i);f=Math.min(h,540)}u(s,r<=0?.01:(0,n.d)(0,r,.9999),f)}})}}}]);
//# sourceMappingURL=22.a8484a96.chunk.js.map