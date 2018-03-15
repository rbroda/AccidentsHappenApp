(function () {
    function buttonRotate() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("click", function() {
                    if($element.hasClass("slide") == false) {
                        console.log("false");
                        $element.css({"transform": "rotate(0deg)", "transition-duration": "2200ms"});
                        $("header").css("height", "100vh");
                        $(".homePageButtons").css("display", "none");
                        $(".formTitle").css("color", "#eae8e5");
                        $element.addClass("slide");
                        $("header").removeClass("changeBackground");
                    }else{
                        console.log("true");
                        $element.css({"transform": "rotate(180deg)", "transition-duration": "2200ms"});
                        $("header").css("height", "25vh");
                        $(".homePageButtons").css("display", "flex");
                        $(".formTitle").css("color", "#39414C");
                        $element.removeClass("slide");
                        $("header").addClass("changeBackground");
                    }
                });
            }
        };

    }



    angular.module("app")
        .directive("buttonRotate", buttonRotate);
})();
