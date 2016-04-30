var s724 = {"=":"路虎","+":"自行车","/":"电瓶车","0":"玩具车","1":"兰博基尼","2":"玛莎拉蒂","3":"比亚迪","4":"长城","5":"红旗","6":"三菱","7":"众泰","8":"海马","9":"江淮","A":"二手奥迪","B":"二手奔驰","C":"二手宝马","D":"二手保时捷","E":"二手巴博斯","F":"二手大众","G":"二手本田","H":"二手丰田","I":"二手铃木","J":"二手雷克萨斯","K":"二手马自达","L":"二手日产","M":"二手斯巴鲁","N":"二手五十铃","O":"二手现代","P":"二手起亚","Q":"二手别克","R":"二手道奇","S":"二手福特","T":"二手雪佛兰","U":"二手标致","V":"二手雪铁龙","W":"二手宾利","X":"二手路虎","Y":"二手劳斯莱斯","Z":"二手法拉利","a":"奥迪","b":"奔驰","c":"宝马","d":"保时捷","e":"巴博斯","f":"大众","g":"本田","h":"丰田","i":"铃木","j":"雷克萨斯","k":"马自达","l":"日产","m":"斯巴鲁","n":"五十铃","o":"现代","p":"起亚","q":"别克","r":"道奇","s":"福特","t":"雪佛兰","u":"标致","v":"雪铁龙","w":"宾利","x":"斯柯达","y":"劳斯莱斯","z":"法拉利"};
var r724 = {}; for (i in s724) r724[s724[i]] = i;
function s724_replace(str) {
	out = ""; for (i = 0; i < str.length; i++) out += s724[str[i]] + ","; return out;
}
function r724_replace(str) {
	out = ""; str = str.split(':'); str = str[str.length - 1].split(',');
	l = parseInt(str.length / 4) * 4;
	for (i = 0; i < l; i++) if (typeof r724[str[i]] !== 'undefined') out += r724[str[i]];
	return out;
}
function encode() {
	try {encoded = s724_replace(Base64.encode($("#Message").val()));}
	catch(e) { encoded = "这车太高级。。车库装不下"; }
	$("#Message").val("老司机的车库:" + encoded);
}
function decode() {
	try {
		b64 = r724_replace($("#Message").val()); if (b64 === "") throw "儿童乐园"; 
		decoded = Base64.decode(b64);
	} catch(e) { decoded = "这车库太高级。。车上不去"; }
	$("#Message").val( decoded );
}