portfolioApp.controller('PortfolioListController', function( $scope, $firebaseAuth, $firebaseArray, FIREBASE_URL ) {

    $scope.portfolios = [];

    var ref = new Firebase(FIREBASE_URL);
  var postRef = ref.child('portfolios');


var pushImg = new Firebase(FIREBASE_URL  + '/images');
pushImg.set({
    'vessel1309': [
    { filename: "350.png",
    date: "2013/09/05",
    description: "I love this boat, so much booty." },
    { filename: "350.png",
    date: "2013/09/06",
    description: "We had a wonderful time on her."}],

    'innocents1404': [
    { filename: "350.png",
    date: "2014/04/14",
    description: "So cold and so much sacking!" },
    { filename: "350.png",
    date: "2014/04/15",
    description: "The sails are so white here."}],

    'firstmate1210': [
    { filename: "350.png",
    date: "2012/10/01",
    description: "Getting mah pipe on!"},
    { filename: "350.png",
    date: "2012/10/02",
    description: "FTW!!!11!one!1"}]
});

    $scope.new_album = {};
    $scope.add_portfolio_error = "";

    $scope.addPortfolio = function( new_portfolio ){
            // if new_portfolio is not defined
            if (typeof(new_portfolio) === 'undefined') {
        // then add an error message to $scope and exit
        $scope.add_portfolio_error = "The form is not properly filled out";
        return false;
    };
    if (!new_portfolio.title) 
    {
        $scope.add_portfolio_error = "Missing title";
    }
    else if (!new_portfolio.date || !is_valid_date(new_portfolio.date))
    {
        $scope.add_portfolio_error = "You must provide a date in format yyyy/mm/dd";
    }
    else if (!new_portfolio.description)
    {
        $scope.add_portfolio_error = "Missing description";
    }
    else if (!new_portfolio.name)
    {
        $scope.add_portfolio_error = "Missing name - six characters";
    }
    else {
        $scope.portfolios.push( new_portfolio );
        $scope.adding_portfolio = {};
        $scope.add_portfolio_error = "";
    };
};

function is_valid_date (the_date){
        //http://eloquentjavascript.net/09_regexp.html
        if (the_date.match(/^[0-9]{4,4}\/[0-9]{2,2}\/[0-9]{2,2}$/)){
            var d = new Date(the_date);
            return !(isNaN(d.getTime()));
        } else {
            return false;
        };
    };
});