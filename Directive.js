/**
 * Created by gaidash on 17.01.15.
 */

/*myApp.controller("DirectiveCtrl",function($scope){
    $scope.loadMessage = function(){
        alert("Complete!")
    };
    $scope.removeMessage = function(){
        alert("Message has been removed")
    }
        });
   myApp.directive('superman',function(){
       return{
           restrict: 'AC',

           link: function(){
               alert('Hello')
           }
       }
   });

    myApp.directive('enter',function(){
        return function(scope,element,attrs){
            element.bind("mouseenter",function(){
              scope.$apply(attrs.enter);
            })
        }
    });

    myApp.directive('leave',function(){
        return {
            link: function(scope,element){
                element.bind("mouseleave",function(){
                    element.removeClass("panel").css({background:'none'})
                })
            }
        }
    });

////////////////////////////////////////////////////////////////////////

myApp.directive('main',function(){
    return{
        restrict: 'E',
        scope: {},
        controller: function($scope){
            $scope.abilities = [];

            this.addStrength = function(){
                $scope.abilities.push('strength');
            };
            this.addSpeed = function(){
                $scope.abilities.push('speed');
            };
            this.addFlight = function(){
                $scope.abilities.push('flight');
            }
        },
        link: function(scope,element){
            element.bind('mouseenter',function(){
                console.log(scope.abilities)
            });
        }
    }
});

myApp.directive('first',function(){
    return{
        require:'main',
        link: function(scope,element,attrs,firstCtrl){
            firstCtrl.addStrength();
        }

    };
});

myApp.directive('second',function(){
    return{
        require: 'main',
        link: function(scope,element,attrs,secondCtrl){
            secondCtrl.addSpeed();
        }
    }
});

myApp.directive('third',function(){
    return{
        require: 'main',
        link: function(scope,element,attrs,thirdCtrl){
            thirdCtrl.addFlight();
        }
    }
});

 /////////////////////////////////////////////////


myApp.directive('panel',function(){
    return{
        restrict:'E',
        transclude:true,
        template: '<div class="panel" ng-transclude>This is panel</div>'
    }
});

////////////////////////////////////////////////////////////////////////

myApp.directive('clock',function(){
    return{
        restrict: 'E',
        scope: {
            timezone: '@'
        },
        template: '<div>12:00pm {{timezone}}</div>'
    }
});

myApp.directive('panel',function(){
    return{
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        template: "<div style='border: 3px solid #000000'>" +
            "<div class='alert-box'>{{title}}</div>" +
            "<div ng-transclude></div></div>"
    }
});
/////////////////////////////////////////////////////////////

myApp.directive('country',function(){
    return{
        restrict:'E',
        controller: function(){
            this.makeAnnouncement = function(message){
                console.log("Country says " + message);
            }
        }
    }
});


myApp.directive('state',function(){
    return{
        restrict:'E',
        controller: function(){
            this.makeLaw = function(law){
                console.log("We say " + law )
            }
        }

        }

});


myApp.directive('city',function(){
    return{
        restrict:'E',
        require: ["^country","^state"],
        link: function(scope,element,attrs,ctrls){
            ctrls[0].makeAnnouncement("hello");
            ctrls[1].makeLaw("don't do it!")
        }
    }

});*/
//////////////////////////////////////////////////////////Part5.1
myApp.controller('ChoreCtrl',function($scope){
    $scope.logChore = function(chore){
        alert(chore + " is done!");
    };
});
myApp.directive("kid", function() {
    return {
        restrict: "E",
        scope:{
            don:'&'
        },
        template: '<input type="text" ng-model="word">' +
            '<div>{{word}}</div>'+
            '<div class="btn btn-large btn-primary" ng-click="don({word:word})">Im done</div>'

    };
});

///////////////////////////////////////////////////////////Part5.2
myApp.controller('DrinkCtrl',function($scope){
    $scope.ctrlFlavor = 'crunberry';
});

myApp.directive('drink',function(){
    return{
        scope:{
            flavor: '@'
        },

        template: '<div>{{flavor}}</div>',
        link: function(scope){
            scope.flavor = 'cherry';
        }
    }
});
////////////////////////////////////////////////////////////Part7.1
myApp.directive('myPassword',function(){



    return{
        restrict:'E',
        replace: true,
        scope:{},
        template:"<div>\n    <input type=\"text\" ng-model=\"model.input\"/>\n  <div class='box'>{{model.input}}</div>\n</div> ",

        link:function(scope){
            scope.$watch('model.input',function(value){
                if(value === 'password'){
                   $('.box').addClass("alert");
                }
            })
        }
    }
});
//////////////////////////////////////////////////////////////Part 7 Readings(additional)

myApp.directive('myWidget',function(){
    var linkFn;
    linkFn = function(scope,element,attrs){
        var animateDown, animateRight;

        //oneBox = element.children()[0];
        //twoBox = element.children()[1];

        animateDown = function(){
            $(this).animate({
                top:"+=50"
            })
        };
        animateRight = function(){
            $(this).animate({
                left:"+=50"
            })
        };

        $("#one").on("click",animateDown);
        $("#two").on("click",animateRight);

    };
   return{
       restrict:'E',
       link: linkFn
   }
});

///////////////////////////////////////////////////////////Zippy

myApp.directive("zippy", function(){
    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        template: '<div>' +
            '<h3 ng-click="toggleContent()">{{title}}</h3>' +
            '<div ng-show="isContentVisible" ng-transclude></div>' +
            '</div>',
        link: function (scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            };
        }
};
});
////////////////////////////////////////////////////////////Part 11.3

myApp.factory('game',function(){
    return {
        title: "starcraft"
    }
});

myApp.controller('AppCtrl',function($scope,game,$injector){
    $injector.invoke(function(game){
        alert(game.title)
    });


    $scope.title = game.title;

});