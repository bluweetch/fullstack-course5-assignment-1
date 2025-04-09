"use strict";

(() => {
  const appModule = angular.module("LunchCheckApp", []);

  function LunchCheckController($scope) {
    $scope.class = "";

    $scope.submit = () => {
      $scope.class = "";

      const value = $scope.value.trim();

      if (!value) {
        $scope.class = "red";
        $scope.message = "Please enter data first.";
        return;
      }

      $scope.class = "green";

      const words = value
        .split(",")
        .map((word) => word.trim())
        .filter((word) => !!word);

      if (words.length <= 3) {
        $scope.message = "Enjoy!";
        return;
      }

      $scope.message = "Too much!";
    };
  }

  LunchCheckController.$inject = ["$scope"];

  appModule.controller("LunchCheckController", LunchCheckController);
})();
