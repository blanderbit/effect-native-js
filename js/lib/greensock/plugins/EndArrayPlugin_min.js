var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.3",init:function(target,value){var start,end,i=value.length,a=this.a=[];if(this.target=target,this._mod=0,!i)return!1;for(;--i>-1;)start=target[i],end=value[i],start!==end&&a.push({i:i,s:start,c:end-start});return!0},mod:function(lookup){"function"==typeof lookup.endArray&&(this._mod=lookup.endArray)},set:function(ratio){var e,val,target=this.target,a=this.a,i=a.length,mod=this._mod;if(mod)for(;--i>-1;)e=a[i],target[e.i]=mod(e.s+e.c*ratio,target);else for(;--i>-1;)e=a[i],val=e.s+e.c*ratio,target[e.i]=1e-6>val&&val>-1e-6?0:val}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();