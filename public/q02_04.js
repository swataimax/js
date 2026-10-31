const signal = "黄";

switch (signal) {
  case "赤":
	document.write("止まれ");
	break;
  case "黄":
	document.write("注意");
	break;
  case "青":
	document.write("進め");
	break;
  default:
	document.write("故障中");
}

