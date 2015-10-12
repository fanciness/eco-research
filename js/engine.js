var idSelected='', parOpened='0';
function $id(id) {
	return document.getElementById(id);
}
function s(e) {
	if (!e) e = window.event;
	if (e.srcElement) el = e.srcElement;
	else if (e.target) el = e.target;
	if (el.className==='nav-h')
		location.href=el.children[0].getAttribute('href');
	else if (el.tagName.toUpperCase()==='SUMMARY') {
		parClicked = el.id.substr(2);
                if (parOpened===parClicked) {
			$id('p'+parClicked).style.height='0';
			parOpened='0';
		}
		else {
			if (parOpened!=='0') $id('p'+parOpened).style.height='0';
			$id('p'+parClicked).style.height='100%';
			parOpened=parClicked;
		}
	}
}
document.onclick = s;
$id('y').innerHTML=new Date().getFullYear();