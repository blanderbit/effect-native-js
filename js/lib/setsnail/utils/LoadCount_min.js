function LoadCount(totalItems){var _itemsLoaded=0,_callback=null,_totalItems=totalItems,_allLoaded=!1;isNaN(_totalItems)&&(_totalItems=0),this.setCallback=function(callback){_callback=callback},this.setCount=function(totalItems){_totalItems=totalItems},this.getCount=function(){return _totalItems},this.loaded=function(){return _allLoaded},this.count=function(){_itemsLoaded+=1,_itemsLoaded==_totalItems&&(_allLoaded=!0,_callback&&(BrowserDetect.TABLET?setTimeout(_callback,100):_callback()))}}