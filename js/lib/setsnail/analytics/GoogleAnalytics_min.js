var GoogleAnalytics={};GoogleAnalytics.trackPage=function(opt_trackPageName){null===opt_trackPageName&&(opt_trackPageName=location.pathname+location.search+location.hash),_gaq.push(["_trackPageview",opt_trackPageName])},GoogleAnalytics.trackEvent=function(category,action,opt_label,opt_value,opt_noninteraction){null===opt_noninteraction&&(opt_noninteraction=!1),_gaq.push(["_trackEvent",category,action,opt_label,opt_value,opt_noninteraction])},GoogleAnalytics.trackSocialEvent=function(network,socialAction,opt_target,opt_pagePath){_gaq.push(["_trackSocial",network,socialAction,opt_target,opt_pagePath])};