//Title.js

class Title
{
	constructor()
	{
		

	}

	//html描画(初回だけで十分)
	display(leftPos)
	{
		document.getElementById('disp').innerHTML = `

		<div class="menu-wrapper">
		<input type="checkbox" id="menu-toggle" hidden>
		
		<label class="menu-icon" for="menu-toggle">
			<span></span>
			<span></span>
			<span></span>
		</label>
		
		<div class="overlay"></div>
		
		<nav class="menu">
			<ul>
			<li onClick="gm.setKey('Enter')">推移を見る</li>
			<li onClick="gm.setKey('h')">入力履歴を見る</li>
			<li onClick="alert('バージョン情報: 1.0.0')">バージョン</li>
			<li><a href="#">問い合わせ</a></li>
			</ul>
		</nav>
		</div>

	
