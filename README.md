#Identicon
Repackaged Identicon.js (https://github.com/stewartlord/identicon.js)

##Usage

```

var hash = "b4d4ddf332ae27db737175a88847ce57"; // for example md5 of 'foobar@example.org'

var identicon = new Identicon(hash, 256).toString();

var dataUri = "data:image/png;base64," + identicon.toString();

```