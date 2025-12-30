//GameMgr.js
//ユーザーの窓口。ボタン操作を受け付け、シーンマネージャーに渡す

document.addEventListener('keydown', function(event) 
{
	gm.setKey(event.key);
});

class GameMgr
{
	constructor()
	{
		
	}

	setKey(key)
	{
		sm.getKey(key);
	}
}

const gm = new GameMgr();
const sm = new SceneMgr();
