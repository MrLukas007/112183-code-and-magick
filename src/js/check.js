function getMessage(a, b) {
  var stringResult = '';
  if (typeof a === 'boolean') {
    if (a) {
      stringResult = 'Я попал в ' + b;
    }
    else {
      stringResult = 'Я никуда не попал';
    }
  } else if (typeof a === 'number') {
    stringResult = 'Я прыгнул на ' + a * 100 + ' сантиметров';
  }
  else if (Array.isArray(a) && Array.isArray(b)) {
    var distancePath = 0;
    for (var i = 0; i < a.length; i++) {
      distancePath += a[i] * b[i];
    }
    stringResult = 'Я прошёл ' + distancePath + ' метров';
  }
  else if (Array.isArray(a)) {
    var numberOfSteps = 0;
    for (var i = 0; i < a.length; i++) {
      numberOfSteps += a[i];
    }
    stringResult = 'Я прошёл ' + numberOfSteps + ' шагов';
  }
  else {
    stringResult = 'Переданы некорректные данные';
  }
  return stringResult;
}
