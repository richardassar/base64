var charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function _atob(d,b,c,u,r,q,x){for(r=q=x='';c=d[x++];~c&&(u=q%4?u*64+c:c,q++%4)?r+=String.fromCharCode(255&u>>(-2*q&6)):0)c=b.indexOf(c);return r} // https://gist.github.com/1020396

function _btoa(a,b,c,d,e){for(d=e='';a[d|0]||(b='=',d%1);e+=b[63&c>>8-d%1*8])c=c<<8|a.charCodeAt(d-=-.75);return e} // https://gist.github.com/999166

function atob(string) {
	return _atob(string, charMap);
}

function btoa(string) {
	return _btoa(string, charMap);
}

if(typeof window == "undefined") {
	module.exports = {
		'atob' : atob,
		'btoa' : btoa
	};
} else {
	module.exports = {
		'atob' : window.atob || atob,
		'btoa' : window.btoa || btoa
	};
}