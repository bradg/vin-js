/* Checks for a valid VIN
 *
 * Written by Brad Garland (bradg76 on github)
 *
 * With thanks to https://github.com/chilledham/Data-Validate-VIN
 * 
 * Usage:
 * 
 * valid_vin('12345678901234567');
 *
 * returns either true or false
 *
 * Open runner.html to run the jasmine tests
 */

valid_vin = function(vin) {
  // Reject based on bad pattern match
  no_ioq = '[a-hj-npr-z0-9]';  // Don't allow characters I,O or Q
  matcher = new RegExp("^" + no_ioq + "{8}[0-9xX]" + no_ioq + "{8}$", 'i'); // Case insensitive
  if(vin.match(matcher) == null)
    return false;

  // Reject base on bad check digit
  return check_digit_check(vin);
};

check_digit_check = function(vin) {
  letter_map = {A : 1, B : 2, C : 3, D : 4, E : 5, F : 6, G : 7, H : 8,
                J : 1, K : 2, L : 3, M : 4, N : 5,        P : 7,        R : 9,
                       S : 2, T : 3, U : 4, V : 5, W : 6, X : 7, Y : 8, Z : 9,
                1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 0 : 0
                };
  weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  products = 0;
  for(var i = 0; i < vin.length; i++) {
    // alert('adding ' + letter_map[vin[i]] + ' * ' + weights[i] + ' to ' + products);
    products += letter_map[vin[i]] * weights[i];
  }
  check_digit_should_be = products % 11;
  if(check_digit_should_be == 10) check_digit_should_be = 'X';

  return check_digit_should_be == vin[8].toUpperCase();
}
