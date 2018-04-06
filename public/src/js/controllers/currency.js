'use strict';

angular.module('insight.currency').controller('CurrencyController',
  function($scope, $rootScope, $http, Currency) {
    $rootScope.currency.symbol = defaultCurrency;

    var _roundFloat = function(x, n) {
      if(!parseInt(n, 10) || !parseFloat(x)) n = 0;

      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    };

    $rootScope.currency.getConvertion = function(value) {
      value = value * 1; // Convert to number

      if (!isNaN(value) && typeof value !== 'undefined' && value !== null) {
        if (value === 0.00000000) return '0 ' + this.symbol; // fix value to show

        var response;

        if (this.symbol === $rootScope.defaultUSD) {
          response = _roundFloat((value * 0.01 * this.factor), 5);
        } else if (this.symbol === $rootScope.defaultMicroCoinUnit) {
          this.factor = 10; // 10x for flashcoin.io - 1/1000x multiple 18Mar2017
          response = _roundFloat((value * this.factor), 5);
        } else if (this.symbol === $rootScope.defaultBits) {
          this.factor = 10000; // 10x for flashcoin.io - 1/1000x multiple 18Mar2017
          response = _roundFloat((value * this.factor), 2);
        } else {
          this.factor = 0.01; // 10x for flashcoin.io- 1/1000x multiple 18Mar2017
          response = _roundFloat((value * this.factor), 2);
        }
        // prevent sci notation
        if (response < 1e-7) response=response.toFixed(8);

        return response + ' ' + this.symbol;
      }

      return 'value error';
    };

    $scope.setCurrency = function(currency) {
      $rootScope.currency.symbol = currency;
      localStorage.setItem('insight-currency', currency);

      if (currency === $rootScope.defaultUSD) {
        // Currency.get({}, function(res) {
        //   $rootScope.currency.factor = $rootScope.currency.bitstamp = res.data.bitstamp;
        // });
        $http.get('https://api.coinmarketcap.com/v1/ticker/flash/')
        .success(function(data) {
            $rootScope.currency.factor = data[0].price_usd;
        })
        .error(function(err) {
            $rootScope.currency.factor = 1;
        });
      } else if (currency === $rootScope.defaultMicroCoinUnit) {
        $rootScope.currency.factor = 10; // 10x for flashcoin.io- 1000x multiple 18Mar2017
      } else if (currency === $rootScope.defaultBits) {
        $rootScope.currency.factor = 10000; // 10x for flashcoin.io- 1000x multiple 18Mar2017
      } else {
        $rootScope.currency.factor = 0.01; // 10x for flashcoin.io- 1000x multiple 18Mar2017
      }
    };

    // Get initial value
    // Currency.get({}, function(res) {
    //   $rootScope.currency.factor = $rootScope.currency.bitstamp = res.data.bitstamp;
    // });

    $http.get('https://api.coinmarketcap.com/v1/ticker/flash/')
    .success(function(data) {
        $rootScope.currency.factor = data[0].price_usd;
    })
    .error(function(err) {
        $rootScope.currency.factor = 1;
    });
  });
