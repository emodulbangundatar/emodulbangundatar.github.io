function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VGAfdOVxpY":
        Script1();
        break;
      case "6IFZU9PAulK":
        Script2();
        break;
      case "60zSzohsLYU":
        Script3();
        break;
      case "5gV0uZkC9BG":
        Script4();
        break;
      case "5zfm31wsDt0":
        Script5();
        break;
      case "6TCujJci8Vp":
        Script6();
        break;
      case "6SjqSjfcupd":
        Script7();
        break;
      case "5Z7LXw2zcZI":
        Script8();
        break;
      case "6NnVDxrUAby":
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

