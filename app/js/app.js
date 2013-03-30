'use strict';

//http://stackoverflow.com/questions/14284263/refresh-bootstrap-scrollspy-after-angular-model-changes
var x = {};

// Declare app level module which depends on filters, and services
angular.module('shopCartApp', ['shopCartApp.filters', 'shopCartApp.services', 'shopCartApp.directives'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/main.html', controller: ProductCtrl});
    //$routeProvider.when('/products/:productID', {templateUrl: 'partials/product-detail.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/products'});
  }])

.directive('scrollSpy', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                scope.$watch(attrs.scrollSpy, function(value) {
                    setTimeout(function() { elem.scrollspy('refresh'); }, 500);
                }, true);
            }
        }
    }
)

.run(function( $location, $anchorScroll, $routeParams, Product, $rootScope) {

    // http://i.imgur.com/UNsSkK5b.jpg
    var imgurs =
        ["UNsSkK5","bGm1odk","NquqVEF","0NIkfaQ","hzAihtL","0hyW7iQ","M0kn7l3","6529Zk8","u56IUTb","X6AwmwL","wDOLil8","PIuXGkc","VvqJPXm","tkQ5nWr","Y04G45w","4q0SDg8","eVYmiYz","L55uMbw","rgBmiWg","Xafcze5","VUVO5rl","wZlV1XU","MFb207U","g5kaFpT","Tu4SLm8","hxnkJTV","cFCbzgU","SHRNTm6","60S6Ie1","9dtTbjg","wH8Gh1U","L0IU6tN","DRQl2MP","ttCpCYY","KcL9L0B","3VXYSuV","P8Ms6ve","PxRsCS2","k8TUb2S","FtKsviM","1OGHnXo","2z9XPvR","Gnqj4Tt","tb12Kc7","UkdtVVU","g1dY2mg","tMLqMyF","rfOPoqj","00ApFfv","dsGIIal","XLAyW2t","wmF3BQF","MhGQPbO","VgN5zmF","2w6M3gg","K51pmzC","aYCTgxC","gmj8xlM","Xt7yvLS","6CkrVcL","UdaP3uq","qwSajVL","UIM94TZ","hTdLhlB","OtAtJ4S","j3eD7lQ","IddECKp","6bJI82Q","AhtlY5z","9Exdqty","CVJxYt0","wBmvODI","7RKz4i7","69IGS7o","nhbnKhG","KeoNQzZ","MM6WJ1Z","8vBVntL","LzixB4k","sliP8w9","uthKblU","NrL2lyp","Hsq9gll","rBUUj4v","Xmdodb1","JcfSE6a","VzNyoqK","qR1eIfb","VzrmL2J","2sqHgBP","2CsUrV2","mZoyhpJ","r4Gwsnt","2MtpENA","sSTzXQc","0YnsTtx","E2Otxlo","j11ilBb","oT7VIdI","1POvyBC","DyP6XqO","HzBO9cc","jEO6FYP","U5EzTdA","icsHG2Z","WsxHzww","atkZGnM","lMSRRxQ","RwTFjvS","Gbxdefz","Wp6U2au","VuEvjGo","D7G1reW","W5oFTQb","LhJoUgv","YgZo27t","cjbjKxU","4i5H5d1","islpubN","CelgnZL","lQmMmK2","VVLhrh0","z6wHoGR","C7EvoJp","I3f4tlR","525Lksf","X7oYLlm","MmH4lg3","OciXt6d","FX4HGiF","nL0t6VQ","U2sGGJa","f85YcTj","WXvoNkZ","kgSBPk6","eDNV0i6","kyjqrAe","fASg7yc","5i46PYm","lXyFm7V","a4szEzH","RkxoHvS","3ZQ80mx","rtUHVzs","ZzmF9RN","2pEHmMl","KzKkQdC","kSJflpc","VSsxGG6","0c3gH1s","KOqSfYX","nTP93mo","EBCqQY1","hzW6KUe","MQ4LgLJ","JcBRZCd","EHKN1tI","AfTvHBG","yJXgphf","owcb0BD","AZRADIX","vY5Itiw","nPmuIa6","g9WCoES","yYFsf6j","5I8ELXT","YpzQt2t","CWgsf8e","HG81RSr","6pRgaOZ","jq4iZ6g","4CArVMG","9ii3RXq","QcxBa13","Wfm7qK0","kAcqk4i","C73xSJw","EhF6Dlr","zWh3bJY","QwjnG36","lLSxftQ","gxHaXO2","j6uWLdQ","yIRGmTj","zoH6quG","jMGMi1X","RvLERNT","CCR0zE5","pVAEr9e","0xmi3x3","uJniy0A","AtYcMvm","jXW9FlP","6j70f5Y","lSDo7Sz","MY9PK7u","Eu8yl2i","rrGyj72","q9HAMBE","ee9qmIc","mBsR7sN","Uh4VPBy","yN05bLI","dAbAdLH","0lflwVo","8JclMdQ","856X0Cd","ycQmrG9","Vpy8zBz","D9EBJHa","mFtjrYa","Nxnowe7","yMijKBm","MLx925G","0zekWqZ","pWvYhqj","SyKVdJs","G979iWY","Vwxc5XX","TBRp6HS","9L18w73","rKXFXuK","MF2meyk","Iuutg3e","eq8uG9c","QFSRJ6e","C9pkGVx","4cYCCBk","VkjVYX8","u13DBcq","9EAvC1a","9MEuCM1","q1Sg7ps","a9WW3T6","pv6KAO6","ZGKoDeK","VABbENi","ax4MFYC","eYPdhMM","J4a1m7I","q1TXL2j","9MiQQq4","Sszi13n","YTizruR","rqBCCSd","m9prO6M","QyaEGQn","fFoQhXT","qF7Dqsp","Kkcu53d","5qUbeAF","Cmybixi","wJRGhjW","mc7ObMH","4P9QbNv","9ynjFB4","MkV1lGG","8cCRcEm","VOW5Tej","PGgpfuk","B8OOfnh","uIdf8sk","nscY3jz","IFuoKnk","TLq91hD","AjsMVjO","92pm7NS","lQeXYcr","9wgb8Rx","b8MHWF6","DJtBev2","SnL2eSR","U2i0736","A0Fce7t","vUxYspe","ROHfbvL","f8mj2XD","NC5SdJk","mbGaXdD","YCQRYmu"];

    var words = ['Non','eram','nescius','Brute','cum','quae','summis','ingeniis','exquisitaque','doctrina','philosophi','Graeco','sermone','tractavissent','ea','Latinis','litteris','mandaremus','fore','ut','hic','noster','labor','in','varias','reprehensiones','incurreret','nam','quibusdam','et','iis','quidem','non','admodum','indoctis','totum','hoc','displicet','philosophari','quidam','autem','non','tam','id','reprehendunt','si','remissius','agatur','sed','tantum','studium','tamque','multam','operam','ponendam','in','eo','non','arbitrantur','erunt','etiam','et','ii','quidem','eruditi','Graecis','litteris','contemnentes','Latinas','qui','se','dicant','in','Graecis','legendis','operam','malle','consumere','postremo','aliquos','futuros','suspicor','qui','me','ad','alias','litteras','vocent','genus','hoc','scribendi','etsi','sit','elegans','personae','tamen','et','dignitatis','esse','negent','Contra','quos','omnis','dicendum','breviter','existimo','Quamquam','philosophiae','quidem','vituperatoribus','satis','responsum','est','eo','libro','quo','a','nobis','philosophia','defensa','et','collaudata','est','cum','esset','accusata','et','vituperata','ab','Hortensio','qui','liber','cum','et','tibi','probatus','videretur','et','iis','quos','ego','posse','iudicare','arbitrarer','plura','suscepi','veritus','ne','movere','hominum','studia','viderer','retinere','non','posse','Qui','autem','si','maxime','hoc','placeat','moderatius','tamen','id','volunt','fieri','difficilem','quandam','temperantiam','postulant','in','eo','quod','semel','admissum','coerceri','reprimique','non','potest','ut','propemodum','iustioribus','utamur','illis','qui','omnino','avocent','a','philosophia','quam','his','qui','rebus','infinitis','modum','constituant','in','reque','eo','meliore','quo','maior','sit','mediocritatem','desiderent','','Sive','enim','ad','sapientiam','perveniri','potest','non','paranda','nobis','solum','ea','sed','fruenda','etiam','sapientia','est','sive','hoc','difficile','est','tamen','nec','modus','est','ullus','investigandi','veri','nisi','inveneris','et','quaerendi','defatigatio','turpis','est','cum','id','quod','quaeritur','sit','pulcherrimum','etenim','si','delectamur','cum','scribimus','quis','est','tam','invidus','qui','ab','eo','nos','abducat','sin','laboramus','quis','est','qui','alienae','modum','statuat','industriae','nam','ut','Terentianus','Chremes','non','inhumanus','qui','novum','vicinum','non','vult','fodere','aut','arare','aut','aliquid','ferre','denique','non','enim','illum','ab','industria','sed','ab','inliberali','labore','deterret','sic','isti','curiosi','quos','offendit','noster','minime','nobis','iniucundus','labor'];

    var next = 0;
    $rootScope.next = function() {
        return next++;
    };

    $rootScope.random = function() {
        return Math.floor(Math.random() * 100);
    };

    var sentences = {};

    var randomSentence = function(key) {
        var sentence = [];
        while(sentence.length<50) sentence.push(words[Math.floor(Math.random() * words.length)]);

        var firstWord = sentence[0];

        firstWord = firstWord[0].toUpperCase() + firstWord.substr(1);
        sentence[0] = firstWord;

        return sentence.join(' ');
    };

    $rootScope.categories = [];

    $rootScope.products = Product.query({}, function(data) {
        // post-process the data after download
        _.each(data, function(v,k,l) {
            v.ID = Math.random().toString(36).substr(13);

            v.photos = [];
            while (v.photos.length < 5)
                v.photos.push('http://i.imgur.com/' + imgurs[Math.floor(Math.random() * imgurs.length)]+ 'b.jpg');

            v.description = randomSentence();

        });

        $rootScope.categories = _.unique(_.pluck( data, 'category'));
    });

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.ID);
        $anchorScroll();
    });

    x = $rootScope;

});

