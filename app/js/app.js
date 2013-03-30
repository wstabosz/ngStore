'use strict';


// Declare app level module which depends on filters, and services
angular.module('shopCartApp', ['shopCartApp.filters', 'shopCartApp.services', 'shopCartApp.directives'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/product-list.html', controller: ProductCtrl});
    //$routeProvider.when('/products/:productID', {templateUrl: 'partials/product-detail.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/products'});
  }])


.run(function( $location, $anchorScroll, $routeParams, Product, $rootScope) {

    var words = ['Non','eram','nescius','Brute','cum','quae','summis','ingeniis','exquisitaque','doctrina','philosophi','Graeco','sermone','tractavissent','ea','Latinis','litteris','mandaremus','fore','ut','hic','noster','labor','in','varias','reprehensiones','incurreret','nam','quibusdam','et','iis','quidem','non','admodum','indoctis','totum','hoc','displicet','philosophari','quidam','autem','non','tam','id','reprehendunt','si','remissius','agatur','sed','tantum','studium','tamque','multam','operam','ponendam','in','eo','non','arbitrantur','erunt','etiam','et','ii','quidem','eruditi','Graecis','litteris','contemnentes','Latinas','qui','se','dicant','in','Graecis','legendis','operam','malle','consumere','postremo','aliquos','futuros','suspicor','qui','me','ad','alias','litteras','vocent','genus','hoc','scribendi','etsi','sit','elegans','personae','tamen','et','dignitatis','esse','negent','Contra','quos','omnis','dicendum','breviter','existimo','Quamquam','philosophiae','quidem','vituperatoribus','satis','responsum','est','eo','libro','quo','a','nobis','philosophia','defensa','et','collaudata','est','cum','esset','accusata','et','vituperata','ab','Hortensio','qui','liber','cum','et','tibi','probatus','videretur','et','iis','quos','ego','posse','iudicare','arbitrarer','plura','suscepi','veritus','ne','movere','hominum','studia','viderer','retinere','non','posse','Qui','autem','si','maxime','hoc','placeat','moderatius','tamen','id','volunt','fieri','difficilem','quandam','temperantiam','postulant','in','eo','quod','semel','admissum','coerceri','reprimique','non','potest','ut','propemodum','iustioribus','utamur','illis','qui','omnino','avocent','a','philosophia','quam','his','qui','rebus','infinitis','modum','constituant','in','reque','eo','meliore','quo','maior','sit','mediocritatem','desiderent','','Sive','enim','ad','sapientiam','perveniri','potest','non','paranda','nobis','solum','ea','sed','fruenda','etiam','sapientia','est','sive','hoc','difficile','est','tamen','nec','modus','est','ullus','investigandi','veri','nisi','inveneris','et','quaerendi','defatigatio','turpis','est','cum','id','quod','quaeritur','sit','pulcherrimum','etenim','si','delectamur','cum','scribimus','quis','est','tam','invidus','qui','ab','eo','nos','abducat','sin','laboramus','quis','est','qui','alienae','modum','statuat','industriae','nam','ut','Terentianus','Chremes','non','inhumanus','qui','novum','vicinum','non','vult','fodere','aut','arare','aut','aliquid','ferre','denique','non','enim','illum','ab','industria','sed','ab','inliberali','labore','deterret','sic','isti','curiosi','quos','offendit','noster','minime','nobis','iniucundus','labor'];

    var next = 0;
    $rootScope.next = function() {
        return next++;
    };

    $rootScope.random = function() {
        return Math.floor(Math.random() * 100);
    };

    var sentences = {};

    $rootScope.randomSentence = function(key) {
        if (!(key in sentences)) {
            var sentence = [];
            while(sentence.length<50) sentence.push(words[Math.floor(Math.random() * words.length)-1]);
            var firstWord = sentence[0];
            firstWord = firstWord[0].toUpperCase() + firstWord.substr(1);
            sentence[0] = firstWord;
            sentences[key] = sentence.join(' ');
        }
        return sentences[key];
    };

    $rootScope.products = Product.query();

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.ID);
        $anchorScroll();
    });
});

