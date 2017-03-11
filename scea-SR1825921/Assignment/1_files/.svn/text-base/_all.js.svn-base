//this javascript is included on every single page of IBT.
//its pulled in through the getHeadInfo
//reinvent popups here.

function watchForSymbol(options)	{
    var stopAt; 
    if (!options || !options.symbol || !Object.isFunction(options.onSuccess))    {throw "Missing required options";}
    options.onTimeout = options.onTimeout || Prototype.K;
    options.timeout = options.timeout || 10;
    stopAt = (new Date()).getTime() + (options.timeout * 1000);
    new PeriodicalExecuter(function(pe) {
        if (typeof window[options.symbol] != "undefined")	{
			options.onSuccess(options.symbol);
            pe.stop();
        }else if ((new Date()).getTime() > stopAt)	{
            options.onTimeout(options.symbol);
            pe.stop();
        }
    }, 0.25);
}
