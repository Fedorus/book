window.search = {"doc_urls":["intro.html#introduction","quickstart.html#quickstart","quickstart.html#bot-father","quickstart.html#hello-world"],"index":{"documentStore":{"docInfo":{"0":{"body":42,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":28,"breadcrumbs":2,"title":2},"3":{"body":91,"breadcrumbs":2,"title":2}},"docs":{"0":{"body":"Telegram.Bot is the most popular .NET Client for Telegram Bot API . The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram. Telegram Logo All the Bot API methods are already documented by Telegram [1] but this guide covers all you need to create a chat bot in .NET and there are many concrete examples written in C#. Telegram Bot API","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"","breadcrumbs":"Quickstart","id":"1","title":"Quickstart"},"2":{"body":"Before you start developing a bot, you need to talk to Bot Father @botfather on Telegram. Register a bot with him and get an access token. Access token is a secret key used to identify and authorize your bot in API requests. It looks like this: 123456789:AAE5cvFhxQ9C7vFGElcpMTNrYrkl3OBFo45 Bot Father","breadcrumbs":"Bot Father","id":"2","title":"Bot Father"},"3":{"body":"Now you have a bot, it's time to bring it to life! Create a new console project for your bot. It could be a .NET Core project or a .NET project targeting versions 4.5+. This guide uses .NET Core examples but full .NET framework projects work as well. dotnet new console Add a reference to Telegram.Bot package. dotnet add package Telegram.Bot Open Program.cs file and use the following content. Replace YOUR_ACCESS_TOKEN_HERE with the access token from Bot Father. using System;\nusing Telegram.Bot; namespace Awesome { class Program { static void Main() { var botClient = new TelegramBotClient(\"YOUR_ACCESS_TOKEN_HERE\"); var me = botClient.GetMeAsync().Result; Console.WriteLine( $\"Hello, World! I am user {me.Id} and my name is {me.FirstName}.\" ); } }\n} Running the program gives you the following output: dotnet run Hello, World! I am user 123456789 and my name is Awesome Bot.","breadcrumbs":"Hello World","id":"3","title":"Hello World"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"2":{"3":{"4":{"5":{"6":{"7":{"8":{"9":{":":{"a":{"a":{"df":0,"docs":{},"e":{"5":{"c":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":0,"docs":{},"h":{"df":0,"docs":{},"x":{"df":0,"docs":{},"q":{"9":{"c":{"7":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"m":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"3":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"4":{"5":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"4":{".":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":2.0},"2":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"(":{")":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":3,"docs":{"0":{"tf":2.449489742783178},"2":{"tf":2.449489742783178},"3":{"tf":2.0}},"f":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":1,"docs":{"0":{"tf":1.0}},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{".":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"y":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.0}}},"w":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{".":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{".":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"_":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":2.23606797749979},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}},"l":{"d":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"_":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"1":{"2":{"3":{"4":{"5":{"6":{"7":{"8":{"9":{":":{"a":{"a":{"df":0,"docs":{},"e":{"5":{"c":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":0,"docs":{},"h":{"df":0,"docs":{},"x":{"df":0,"docs":{},"q":{"9":{"c":{"7":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"m":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"3":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"4":{"5":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"0":{"tf":1.0}}},"4":{".":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"d":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":2.0},"2":{"tf":1.0}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"y":{"df":0,"docs":{},"n":{"c":{"(":{")":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":3,"docs":{"0":{"tf":2.449489742783178},"2":{"tf":2.6457513110645907},"3":{"tf":2.0}},"f":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":1,"docs":{"0":{"tf":1.0}},"h":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"e":{".":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":2.0},"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":2.0}}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"y":{"df":1,"docs":{"2":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":2.0}}},"w":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"p":{"a":{"c":{"df":0,"docs":{},"k":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{".":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.0}}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{".":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"_":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":2,"docs":{"0":{"tf":2.23606797749979},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":2.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}},"l":{"d":{"df":1,"docs":{"3":{"tf":2.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"_":{"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"title":{"root":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}};