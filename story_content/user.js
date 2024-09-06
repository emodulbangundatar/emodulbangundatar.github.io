function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cTWLmjWmKN":
        Script1();
        break;
      case "6m86JwQbzg6":
        Script2();
        break;
      case "6MkVIEwviX1":
        Script3();
        break;
      case "5Y8cgjUYzZX":
        Script4();
        break;
      case "6gHTesooDxg":
        Script5();
        break;
      case "5wqfOGoyKcz":
        Script6();
        break;
      case "6XcLWF1jsWn":
        Script7();
        break;
      case "5qbJiTbdOdp":
        Script8();
        break;
      case "63mkLDePuIt":
        Script9();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="musik2.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="musik3.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.volume=0;

audio.src="musik2.mp3";
audio.volume=0;

audio.src="musik3.mp3";
audio.volume=0;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.src="musik2.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.src="musik3.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.src="musik1.mp3";
audio.volume=0;

audio.src="musik2.mp3";
audio.volume=0;

audio.src="musik3.mp3";
audio.volume=0;
}

