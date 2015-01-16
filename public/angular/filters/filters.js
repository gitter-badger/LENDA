(function() {
  angular.module('ARM')
    .filter("asDate", asDateFilter)
    .filter('dateFmt', dateFmtFilter)
    .filter('capitalize', capitalizeFilter)
    .filter('displayname', displaynameFilter)
    .filter('displaynull', displaynullFilter)
    .filter('displaynullcurrency', displaynullcurrencyFilter)
    .filter('displaynullpercent', displaynullpercentFilter)
    .filter('displaynullsingle', displaynullsingleFilter)
    .filter('displaypercent', displaypercentFilter)
    .filter('boolean', booleanFilter)
    .filter('noCentsCurrency', noCentsCurrencyFilter)
    .filter('phone', phoneFilter)
    .filter('ssnum', ssnumFilter)
    .filter('justtext', justtextFilter)
    .filter('flexCurrency', flexCurrencyFilter);


  function asDateFilter() {
    return function (input) {
      return new Date(input);
    }
  }

  function dateFmtFilter($filter) {
    return function (input) {
      if (input == null) {
        return "";
      }
      var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
      return _date.toUpperCase();
    };
  }

  function capitalizeFilter() {
    return function (input) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) : '';
    }
  }

  function displaynameFilter() {
    return function (input) {
      if (!input) {
        return '';
      }
      if (input.indexOf(",") < 1) {
        return input;
      }
      return input.substring(input.indexOf(",") + 1) + ' ' + input.substring(0, input.indexOf(","));
    };
  }

  function displaynullFilter() {
    return function (input) {
      if (!input) {
        return ' - ';
      }
      if (parseFloat(input) != 0) {
        return input;
      }
      return ' - ';
    };
  }

  function displaynullcurrencyFilter($filter) {
    return function (input) {
      if (!input) {
        return ' - ';
      }
      if (parseFloat(input) != 0) {
        return $filter('currency')(input);
      }
      return ' - ';
    };
  }

  function displaynullpercentFilter($filter) {
    return function (input) {
      if (!input) {
        return ' - ';
      }
      if (parseFloat(input) != 0) {
        return $filter('number')(input, 1) + '%';
      }
      return ' - ';
    };
  }

  function displaynullsingleFilter($filter) {
    return function (input) {
      if (!input) {
        return ' - ';
      }
      if (parseFloat(input) != 0) {
        return $filter('number')(input, 1);
      }
      return ' - ';
    };
  }

  function displaypercentFilter($filter) {
    return function (input) {
      return $filter('number')(input, 0) + '%';
    };
  }

  function booleanFilter($filter) {
    return function (input) {
      if (input === 1 || input === true) {
        return 'Yes';
      }
      return 'No';
    };
  }

  function noCentsCurrencyFilter($filter, $locale) {
    var currencyFilter = $filter('currency');
    var formats = $locale.NUMBER_FORMATS;
    return function (amount, currencySymbol) {
      if (!amount) {
        return ' - ';
      }
      var value = currencyFilter(amount, currencySymbol);
      var sep = value.indexOf(formats.DECIMAL_SEP);
      //console.log(amount, value);
      if (amount >= 0) {
        return value.substring(0, sep);
      }
      return value.substring(0, sep) + ')';
    };

  }

  function phoneFilter(){
    return function(input){
      if(!input) { return ''; }
      if( input.length < 10 ){ return input; }
      return '(' + input.substr(0,3) + ') ' + input.substr(3,3) + '-' + input.substr(6,4);
    };
  }

  function ssnumFilter(){
    return function(input){
      if(!input){ return ''; }
      if(input.length != 9){ return input; }
      var ssn = input.substr(0, 3) + '-' + input.substr(3, 2) + '-' + input.substr(5, 4);
      return ssn;
    };
  }

  function justtextFilter(input) {
    return function (input) {
      return input;
    };
  }

  function flexCurrencyFilter($filter) {
    return function (input, decPlaces) {
      var decPlaces = decPlaces || 2;

      // Check for invalid inputs
      if(isNaN(input)){
        return input;
      }
      if(input === '' || input === null){
        return ' - ';
      }
      var out =  input;

      //Deal with the minus (negative numbers)
      var minus = input < 0;
      out = Math.abs(out);
      out = $filter('number')(out, decPlaces);

      // Add the minus and the symbol
      if (minus) {
        return "( $" + out + ")";
      } else {
        return "$" + out;
      };
    }
  }

}());