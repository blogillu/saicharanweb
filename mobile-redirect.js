	if ((function(a,b){return /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera)&& !(function(a,b){return /ipad|gt-p1000|sgh-t849|gt-i9000|shw-m180S|playbook|hp-tablet/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera)&& !document.cookie.match(/____forcefullsite=true/) && !navigator.userAgent.match('FBDV/iPad')) {
		//alert(location.host);
		var server = location.host;
		switch(server){
			case 'news.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/news");
				break;
			case 'entertainment.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/entertainment");
				break;
			case 'education.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/education");
				break;
			case 'hindi.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/hindi");
				break;
			case 'kannada.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/kannada");
				break;
			case 'malayalam.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/malayalam");
				break;
			case 'tamil.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/tamil");
				break;
			case 'telugu.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/telugu");
				break;
			case 'gujarati.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/gujarati");
				break;
			case 'www.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com");
				break;
			case 'hindi.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com/hindi");
				break;
			case 'kannada.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com/kannada");
				break;
			case 'malayalam.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com/malayalam");
				break;
			case 'tamil.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com/tamil");
				break;
			case 'telugu.boldsky.com':
				str = location.href.replace(location.host, "m.boldsky.com/telugu");
				break;
			case 'www.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com");
				break;
			case 'hindi.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com/hindi");
				break;
			case 'kannada.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com/kannada");
				break;
			case 'malayalam.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com/malayalam");
				break;
			case 'tamil.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com/tamil");
				break;
			case 'telugu.thatscricket.com':
				str = location.href.replace(location.host, "m.thatscricket.com/telugu");
				break;
			case 'www.goodreturns.in':
				str = location.href.replace(location.host, "m.goodreturns.in");
				break;
			case 'www.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com");
				break;
			case 'hindi.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com/hindi");
				break;
			case 'kannada.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com/kannada");
				break;
			case 'malayalam.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com/malayalam");
				break;
			case 'tamil.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com/tamil");
				break;
			case 'telugu.drivespark.com':
				str = location.href.replace(location.host, "m.drivespark.com/telugu");
				break;
			case 'www.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com");
				break;
			case 'hindi.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com/hindi");
				break;
			case 'kannada.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com/kannada");
				break;
			case 'malayalam.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com/malayalam");
				break;
			case 'tamil.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com/tamil");
				break;
			case 'telugu.indiansutras.com':
				str = location.href.replace(location.host, "m.indiansutras.com/telugu");
				break;
			case 'www.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com");
				break;
			case 'hindi.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com/hindi");
				break;
			case 'kannada.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com/kannada");
				break;
			case 'malayalam.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com/malayalam");
				break;
			case 'tamil.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com/tamil");
				break;
			case 'telugu.gizbot.com':
				str = location.href.replace(location.host, "m.gizbot.com/telugu");
				break;
			case 'www.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in");
				break;
			case 'gallery.oneindia.in':
				str = location.href.replace(location.host, "m.oneindia.in/gallery");
				break;
		}	
		//alert(str);
		location.href = str;
	}